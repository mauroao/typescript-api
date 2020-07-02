import Title from './title';
import config from '../config';

class TitleSearchResult {
  public pageNumber = 1;
  public totalItemsPerPage = config.defaultTotalItemsPerPage;
  public totalPages = 1;
  public totalItems = 0;

  public items: Title[] = [];
}

export default TitleSearchResult;
