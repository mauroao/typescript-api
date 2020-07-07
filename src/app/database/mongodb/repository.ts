import ITitlesRepository from '../../domain/repository/i-titles-repository';
import TitleSearchParams from '../../domain/entities/titles-search-params';
import TitleSearchResult from '../../domain/entities/titles-search-result';
import IConfig from '../../domain/config/i-config';
import titleModel from './title-model';
import Title from '../../domain/entities/title';
import ITitleDocument from './i-title-document';

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

  private createTitle = (doc: ITitleDocument) => {
    const title = new Title();
    title.endYear = doc.endYear;
    title.genres = doc.genres;
    title.isAdult = doc.isAdult;
    title.originalTitle = doc.originalTitle;
    title.primaryTitle = doc.primaryTitle;
    title.startYear = doc.startYear;
    title.tconst = doc.tconst;
    title.titleType = doc.titleType;
    return title;
  };

  public searchTitles = async (params: TitleSearchParams): Promise<TitleSearchResult> => {
    const result = new TitleSearchResult(this.config);

    if (params.totalItemsPerPage > 0) {
      result.totalItemsPerPage = params.totalItemsPerPage;
    }

    const filter: IFilter = {};

    if (params.filterColumnName && params.filterValue) {
      filter[params.filterColumnName] = params.filterValue;
    }

    result.totalItems = await titleModel.find(filter).select({ id: 1 }).count().exec();

    const skipNumber = (params.pageNumber - 1) * result.totalItemsPerPage;

    const sorter: ISorter = {};

    if (params.sortColumnName) {
      sorter[params.sortColumnName] = params.sortDesc ? 'desc' : 'asc';
    }

    result.totalPages = Math.ceil(result.totalItems / result.totalItemsPerPage);

    result.pageNumber = params.pageNumber;

    const documents = await titleModel
      .find(filter)
      .sort(sorter)
      .skip(skipNumber)
      .limit(result.totalItemsPerPage)
      .exec();

    result.items = documents.map(this.createTitle);

    return result;
  };
}

export default TitleRepository;
