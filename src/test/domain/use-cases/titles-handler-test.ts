import assert from 'assert';
import TitlesHandler from '../../../app/domain/use-cases/titles-handler';
import ITitlesRepository from '../../../app/domain/repository/i-titles-repository';
import TitleSearchParams from '../../../app/domain/entities/titles-search-params';
import IConfig from '../../../app/domain/config/i-config';
import TitleSearchResult from '../../../app/domain/entities/titles-search-result';

const fakeConfig = <IConfig>{
  getTotalItemsPerPage: (): number => 20
};
const expectedTitleSearchResult = new TitleSearchResult(fakeConfig);

const fakeRepo: ITitlesRepository = <ITitlesRepository>{
  searchTitles(
    titlesSearchParams: TitleSearchParams
  ): Promise<TitleSearchResult> {
    return new Promise((resolve) => resolve(expectedTitleSearchResult));
  }
};

const titlesSeachParams = new TitleSearchParams(fakeConfig);

describe('TitlesHandler', () => {
  describe('#searchTitles', async () => {
    it('should resolves expected titleSearchResult ', async () => {
      const titlesHandler = new TitlesHandler(fakeRepo);
      const titleSearchResult = await titlesHandler.searchTitles(
        titlesSeachParams
      );
      assert.strictEqual(titleSearchResult, expectedTitleSearchResult);
    });
  });
});
