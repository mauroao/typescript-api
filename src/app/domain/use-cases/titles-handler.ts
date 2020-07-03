import TitleSearchParams from '../entities/titles-search-params';
import TitleSearchResult from '../entities/titles-search-result';
import ItitlesRepository from '../repository/i-titles-repository';

class TitlesHandler {
  private repository: ItitlesRepository;

  public constructor(repository: ItitlesRepository) {
    this.repository = repository;
  }

  public async searchTitles(
    titlesSearchParams: TitleSearchParams
  ): Promise<TitleSearchResult> {
    return await this.repository.searchTitles(titlesSearchParams);
  }
}

export default TitlesHandler;
