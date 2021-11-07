import assert from 'assert';
import sinon from 'sinon';
import { fakeConfig } from './helper';
import TitlesHandler from '../domain/use-cases/titles-handler';
import ITitlesRepository from '../domain/repository/i-titles-repository';
import TitleSearchParams from '../domain/entities/titles-search-params';
import TitleSearchResult from '../domain/entities/titles-search-result';

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
