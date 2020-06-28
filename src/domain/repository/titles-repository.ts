import TitleSearchParams from '../entities/titles-search-params';
import TitleSearchResult from '../entities/titles-search-result';

interface ItitlesRepository {
  searchTitles(
    titlesSearchParams: TitleSearchParams
  ): Promise<TitleSearchResult>;
}

export default ItitlesRepository;
