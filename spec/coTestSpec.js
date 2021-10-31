const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe('Co Test', function () {
  describe('Special Full Coverage', function () {
    it('price limit', function () {
      const coTest = new CarInsurance([
        new Product('Special Full Coverage', 1, 50),
        new Product('Special Full Coverage', 6, 50),
        new Product('Special Full Coverage', 11, 50),
      ]);

      const products = coTest.updatePrice();

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
      const coTest = new CarInsurance([
        new Product('Mega Coverage', 0, 10),
        new Product('Special Full Coverage', 0, 10),
        new Product('Full Coverage', 0, 10),
        new Product('Medium Coverage', 0, 10),
        new Product('Low Coverage', 0, 10),
        new Product('Super Sale', 0, 10),
      ]);

      const products = coTest.updatePrice();

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
