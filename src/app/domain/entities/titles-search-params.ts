import IConfig from '../config/i-config';

class TitleSearchParams {
  public filterColumnName = '';
  public filterValue = '';
  public sortColumnName = '';
  public sortDesc = false;
  public pageNumber = 1;
  public totalItemsPerPage: number;

  constructor(config: IConfig) {
    this.totalItemsPerPage = config.getTotalItemsPerPage();
  }
}

export default TitleSearchParams;
