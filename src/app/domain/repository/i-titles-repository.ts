import TitleSearchParams from '../entities/titles-search-params';
import TitleSearchResult from '../entities/titles-search-result';

interface ITitlesRepository {
  searchTitles(
    titlesSearchParams: TitleSearchParams
  ): Promise<TitleSearchResult>;
}

export default ITitlesRepository;
