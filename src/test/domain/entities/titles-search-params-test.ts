import assert from 'assert';
import TitleSearchParams from '../../../app/domain/entities/titles-search-params';
import IConfig from '../../../app/domain/config/i-config';

describe('TitleSearchParams', () => {
  const totalItemsPerPage = 99;
  const fakeConfig = <IConfig>{
    getTotalItemsPerPage: (): number => totalItemsPerPage
  };
  const titleSearchParams = new TitleSearchParams(fakeConfig);

  it('should uses config.getTotalItemsPerPage', function () {
    assert.strictEqual(titleSearchParams.totalItemsPerPage, totalItemsPerPage);
  });
});
