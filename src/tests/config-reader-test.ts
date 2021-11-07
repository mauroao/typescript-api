import assert from 'assert';
import ConfigReader from '../config/config-reader';

describe('ConfigReader', () => {
  const configReader = new ConfigReader();

  after(() => {
    process.env.DEFAULTTOTALITEMSPERPAGE = undefined;
  });

  describe('#getTotalItemsPerPage', () => {
    it('should returns 20 when process.env.DEFAULTTOTALITEMSPERPAGE is undefined ', function () {
      process.env.DEFAULTTOTALITEMSPERPAGE = undefined;
      assert.strictEqual(configReader.getTotalItemsPerPage(), 20);
    });

    it('should returns 100 when process.env.DEFAULTTOTALITEMSPERPAGE is 100 ', function () {
      process.env.DEFAULTTOTALITEMSPERPAGE = '100';
      assert.strictEqual(configReader.getTotalItemsPerPage(), 100);
    });

    it('should returns 20 when process.env.DEFAULTTOTALITEMSPERPAGE is not a number ', function () {
      process.env.DEFAULTTOTALITEMSPERPAGE = 'abc';
      assert.strictEqual(configReader.getTotalItemsPerPage(), 20);
    });
  });
});
