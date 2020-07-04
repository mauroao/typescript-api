import assert from 'assert';
import { fakeConfig, totalItemsPerPage } from '../../helper';
import TitleSearchParams from '../../../app/domain/entities/titles-search-params';

describe('TitleSearchParams', () => {
  const titleSearchParams = new TitleSearchParams(fakeConfig);

  it('should uses config.getTotalItemsPerPage', function () {
    assert.strictEqual(titleSearchParams.totalItemsPerPage, totalItemsPerPage);
  });
});
