import assert from 'assert';
import TitleSearchResult from '../../../app/domain/entities/titles-search-result';
import IConfig from '../../../app/domain/config/i-config';

describe('TitleSearchResult', () => {
  const totalItemsPerPage = 99;
  const fakeConfig = <IConfig>{
    getTotalItemsPerPage: (): number => totalItemsPerPage
  };
  const titleSearchResult = new TitleSearchResult(fakeConfig);

  it('should uses config.getTotalItemsPerPage', function () {
    assert.strictEqual(titleSearchResult.totalItemsPerPage, totalItemsPerPage);
  });
});
