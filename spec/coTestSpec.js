const expect = require('chai').expect;
const {
  CarInsurance,
  FullCoverageProduct,
  LowCoverageProduct,
  MediumCoverageProduct,
  MegaCoverageProduct,
  SpecialFullCoverageProduct,
  SuperSaleProduct,
} = require('../src/models/index');

describe('Co Test', function () {
  describe('Special Full Coverage', function () {
    it('price limit', function () {
      const carInsurance = new CarInsurance([
        new SpecialFullCoverageProduct(1, 50),
        new SpecialFullCoverageProduct(6, 50),
        new SpecialFullCoverageProduct(11, 50),
      ]);

      const products = carInsurance.updatePrice();

      expect(products[0]).to.deep.equal({
        name: 'Special Full Coverage',
        sellIn: 0,
        price: 50,
      });
      expect(products[1]).to.deep.equal({
        name: 'Special Full Coverage',
        sellIn: 5,
        price: 50,
      });
      expect(products[2]).to.deep.equal({
        name: 'Special Full Coverage',
        sellIn: 10,
        price: 50,
      });
    });

    it('on expire', function () {
      const carInsurance = new CarInsurance([
        new MegaCoverageProduct(0, 10),
        new SpecialFullCoverageProduct(0, 10),
        new FullCoverageProduct(0, 10),
        new MediumCoverageProduct(0, 10),
        new LowCoverageProduct(0, 10),
        new SuperSaleProduct(0, 10),
      ]);

      const products = carInsurance.updatePrice();

      expect(products[0]).to.deep.equal({
        name: 'Mega Coverage',
        sellIn: 0,
        price: 10,
      });
      expect(products[1]).to.deep.equal({
        name: 'Special Full Coverage',
        sellIn: -1,
        price: 0,
      });
      expect(products[2]).to.deep.equal({
        name: 'Full Coverage',
        sellIn: -1,
        price: 12,
      });
      expect(products[3]).to.deep.equal({
        name: 'Medium Coverage',
        sellIn: -1,
        price: 8,
      });
      expect(products[4]).to.deep.equal({
        name: 'Low Coverage',
        sellIn: -1,
        price: 8,
      });
      expect(products[5]).to.deep.equal({
        name: 'Super Sale',
        sellIn: -1,
        price: 6,
      });
    });
  });
});
