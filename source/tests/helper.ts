import IConfig from '../domain/config/i-config';
import sinon from 'sinon';

export const totalItemsPerPage = 99;
export const fakeConfig = <IConfig>{
  getTotalItemsPerPage: sinon.fake.returns(totalItemsPerPage)
};
