import assert from 'assert';
import sinon from 'sinon';
import { fakeConfig } from '../../helper';
import TitlesHandler from '../../../app/domain/use-cases/titles-handler';
import ITitlesRepository from '../../../app/domain/repository/i-titles-repository';
import TitleSearchParams from '../../../app/domain/entities/titles-search-params';
import TitleSearchResult from '../../../app/domain/entities/titles-search-result';

const expectedTitleSearchResult = new TitleSearchResult(fakeConfig);

const fakeRepo: ITitlesRepository = <ITitlesRepository>{
  searchTitles: sinon.fake.resolves(expectedTitleSearchResult)
};

describe('TitlesHandler', () => {
  describe('#searchTitles', async () => {
    it('should resolves expected titleSearchResult ', async () => {
      const titlesHandler = new TitlesHandler(fakeRepo);
      const titleSearchResult = await titlesHandler.searchTitles(new TitleSearchParams(fakeConfig));
      assert.strictEqual(titleSearchResult, expectedTitleSearchResult);
    });
  });
});
