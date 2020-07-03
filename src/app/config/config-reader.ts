import IConfig from '../domain/config/i-config';

class ConfigReader implements IConfig {
  public getTotalItemsPerPage = (): number =>
    this.getNumber(process.env.DEFAULTTOTALITEMSPERPAGE, 20);

  private getNumber = (
    param: string | undefined,
    defaultNumber: number
  ): number => {
    if (param === undefined) {
      return defaultNumber;
    }
    const numberValue = parseInt(param);
    if (isNaN(numberValue)) {
      return defaultNumber;
    }
    return numberValue;
  };
}

export default ConfigReader;
