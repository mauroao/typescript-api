import Title from './title';

class TitleSearchResult {
  public pageNumber = 1;
  public totalItemsPerPage = 20;
  public totalPages = 1;
  public totalItems = 0;

  public items: Title[] = [];
}

export default TitleSearchResult;
