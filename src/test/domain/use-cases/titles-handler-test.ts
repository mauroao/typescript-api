import assert from 'assert';
import { fakeConfig } from '../../helper';
import TitlesHandler from '../../../app/domain/use-cases/titles-handler';
import ITitlesRepository from '../../../app/domain/repository/i-titles-repository';
import TitleSearchParams from '../../../app/domain/entities/titles-search-params';
import TitleSearchResult from '../../../app/domain/entities/titles-search-result';

const expectedTitleSearchResult = new TitleSearchResult(fakeConfig);

const fakeRepo: ITitlesRepository = <ITitlesRepository>{
  searchTitles(
    titlesSearchParams: TitleSearchParams
  ): Promise<TitleSearchResult> {
    return new Promise((resolve) => resolve(expectedTitleSearchResult));
  }
};

describe('TitlesHandler', () => {
  describe('#searchTitles', async () => {
    it('should resolves expected titleSearchResult ', async () => {
      const titlesHandler = new TitlesHandler(fakeRepo);
      const titleSearchResult = await titlesHandler.searchTitles(
        new TitleSearchParams(fakeConfig)
      );
      assert.strictEqual(titleSearchResult, expectedTitleSearchResult);
    });
  });
});
