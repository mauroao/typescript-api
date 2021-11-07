import Title from './title';
import IConfig from '../config/i-config';

class TitleSearchResult {
  public pageNumber = 1;
  public totalItemsPerPage: number;
  public totalPages = 1;
  public totalItems = 0;

  public items: Title[] = [];

  constructor(config: IConfig) {
    this.totalItemsPerPage = config.getTotalItemsPerPage();
  }
}

export default TitleSearchResult;
