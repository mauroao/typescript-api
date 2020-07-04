import assert from 'assert';
import TitleSearchResult from '../../../app/domain/entities/titles-search-result';
import { fakeConfig, totalItemsPerPage } from '../../helper';

describe('TitleSearchResult', () => {
  const titleSearchResult = new TitleSearchResult(fakeConfig);

  it('should uses config.getTotalItemsPerPage', function () {
    assert.strictEqual(titleSearchResult.totalItemsPerPage, totalItemsPerPage);
  });
});
