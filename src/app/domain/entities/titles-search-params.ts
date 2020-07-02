import config from '../config';

class TitleSearchParams {
  public filterColumnName = '';
  public filterValue = '';
  public sortColumnName = '';
  public sortDesc = false;
  public pageNumber = 1;
  public totalItemsPerPage = config.defaultTotalItemsPerPage;
}

export default TitleSearchParams;
