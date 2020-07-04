import IConfig from '../app/domain/config/i-config';

export const totalItemsPerPage = 99;
export const fakeConfig = <IConfig>{
  getTotalItemsPerPage: (): number => totalItemsPerPage
};
