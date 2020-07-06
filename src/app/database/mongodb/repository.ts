import ITitlesRepository from '../../domain/repository/i-titles-repository';
import TitleSearchParams from '../../domain/entities/titles-search-params';
import TitleSearchResult from '../../domain/entities/titles-search-result';
import IConfig from '../../domain/config/i-config';
import titleModel from './title-model';
import Title from '../../domain/entities/title';

interface IFilter {
  [key: string]: any;
}

interface ISorter {
  [key: string]: any;
}

class TitleRepository implements ITitlesRepository {
  private config: IConfig;

  public constructor(config: IConfig) {
    this.config = config;
  }

  public searchTitles = async (params: TitleSearchParams): Promise<TitleSearchResult> => {
    const result = new TitleSearchResult(this.config);

    if (params.totalItemsPerPage > 0) {
      result.totalItemsPerPage = params.totalItemsPerPage;
    }

    const filter: IFilter = {};

    if (params.filterColumnName && params.filterValue) {
      filter[(params.filterColumnName = params.filterValue)];
    }

    result.totalItems = await titleModel.find(filter).select({ id: 1 }).count().exec();

    const skipNumber = (params.pageNumber - 1) * result.totalItemsPerPage;

    const sorter: ISorter = {};

    if (params.sortColumnName) {
      sorter[params.sortColumnName] = params.sortDesc ? 'desc' : 'asc';
    }

    const documents = await titleModel.find(filter).sort(sorter).skip(skipNumber).limit(result.totalItemsPerPage);

    result.items = documents.map((item) => {
      const title = new Title();
      title.endYear = item.endYear;
      title.genres = item.genres;
      title.isAdult = item.isAdult;
      title.originalTitle = item.originalTitle;
      title.primaryTitle = item.primaryTitle;
      title.startYear = item.startYear;
      title.tconst = item.tconst;
      title.titleType = item.titleType;
      return title;
    });

    return result;
  };
}

export default TitleRepository;
