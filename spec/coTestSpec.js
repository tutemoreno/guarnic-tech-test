const expect = require('chai').expect;
const {
  FullCoverageProduct,
  LowCoverageProduct,
  MediumCoverageProduct,
  MegaCoverageProduct,
  Product,
  SpecialFullCoverageProduct,
  SuperSaleProduct,
} = require('../src/models/index');

describe('Co Test', function () {
  describe('Base Product', function () {
    it('isPriceEditable', function () {
      const product = new Product('Product Base', 1, 50);

      expect(product.isPriceEditable).to.be.equal(true);
    });

    it('isDaysRemainingEditable', function () {
      const product = new Product('Product Base', 1, 50);

      expect(product.isDaysRemainingEditable).to.be.equal(true);
    });

    it('isExpired without days remaining', function () {
      const product = new Product('Product Base', -1, 1);

      expect(product.isExpired).to.be.equal(true);
    });

    it('isExpired with 0 days remaining', function () {
      const product = new Product('Product Base', 0, 1);

      expect(product.isExpired).to.be.equal(false);
    });

    it('isExpired with days remaining', function () {
      const product = new Product('Product Base', 1, 1);

      expect(product.isExpired).to.be.equal(false);
    });

    it('priceLimit', function () {
      const product = new Product('Product Base', 1, 1);

      expect(product.priceLimit).to.be.equal(50);
    });

    it('isExpensive on limit', function () {
      const product = new Product('Product Base', 1, 50);

      expect(product.isExpensive).to.be.equal(true);
    });

    it('isExpensive below the limit', function () {
      const product = new Product('Product Base', 1, 49);

      expect(product.isExpensive).to.be.equal(false);
    });

    it('isFree without price', function () {
      const product = new Product('Product Base', 1, 0);

      expect(product.isFree).to.be.equal(true);
    });

    it('isFree with price', function () {
      const product = new Product('Product Base', 1, 1);

      expect(product.isFree).to.be.equal(false);
    });

    it('incPrice with limit', function () {
      const product = new Product('Product Base', 1, 50);

      product.incPrice();

      expect(product.price).to.be.equal(50);
    });

    it('incPrice default amount', function () {
      const product = new Product('Product Base', 1, 0);

      product.incPrice();

      expect(product.price).to.be.equal(1);
    });

    it('incPrice amount 5', function () {
      const product = new Product('Product Base', 1, 0);

      product.incPrice(5);

      expect(product.price).to.be.equal(5);
    });

    it('decPrice without price', function () {
      const product = new Product('Product Base', 1, 0);

      product.decPrice();

      expect(product.price).to.be.equal(0);
    });

    it('decPrice default amount', function () {
      const product = new Product('Product Base', 1, 10);

      product.decPrice();

      expect(product.price).to.be.equal(9);
    });

    it('decPrice amount 5', function () {
      const product = new Product('Product Base', 1, 10);

      product.decPrice(5);

      expect(product.price).to.be.equal(5);
    });

    it('updatePrice expired product without price', function () {
      const product = new Product('Product Base', -1, 0);

      product.updatePrice();

      expect(product.price).to.be.equal(0);
    });

    it('updatePrice expired product with price', function () {
      const product = new Product('Product Base', -1, 10);

      product.updatePrice();

      expect(product.price).to.be.equal(8);
    });

    it('updatePrice product without price', function () {
      const product = new Product('Product Base', 1, 0);

      product.updatePrice();

      expect(product.price).to.be.equal(0);
    });

    it('updatePrice product with price', function () {
      const product = new Product('Product Base', 1, 10);
      product.updatePrice();

      expect(product.price).to.be.equal(9);
    });

    it('decSellIn with days remaining', function () {
      const product = new Product('Product Base', 1, 1);

      product.decSellIn();

      expect(product.sellIn).to.be.equal(0);
    });

    it('decSellIn without days remaining', function () {
      const product = new Product('Product Base', 0, 1);

      product.decSellIn();

      expect(product.sellIn).to.be.equal(-1);
    });

    it('decSellIn with negative days remaining', function () {
      const product = new Product('Product Base', -1, 1);

      product.decSellIn();

      expect(product.sellIn).to.be.equal(-2);
    });
  });

  describe('Low Coverage Product', function () {
    it('isPriceEditable', function () {
      const product = new LowCoverageProduct(1, 50);

      expect(product.isPriceEditable).to.be.equal(true);
    });

    it('isDaysRemainingEditable', function () {
      const product = new LowCoverageProduct(1, 50);

      expect(product.isDaysRemainingEditable).to.be.equal(true);
    });

    it('isExpired without days remaining', function () {
      const product = new LowCoverageProduct(-1, 1);

      expect(product.isExpired).to.be.equal(true);
    });

    it('isExpired with 0 days remaining', function () {
      const product = new LowCoverageProduct(0, 1);

      expect(product.isExpired).to.be.equal(false);
    });

    it('isExpired with days remaining', function () {
      const product = new LowCoverageProduct(1, 1);

      expect(product.isExpired).to.be.equal(false);
    });

    it('priceLimit', function () {
      const product = new LowCoverageProduct(1, 1);

      expect(product.priceLimit).to.be.equal(50);
    });

    it('isExpensive on limit', function () {
      const product = new LowCoverageProduct(1, 50);

      expect(product.isExpensive).to.be.equal(true);
    });

    it('isExpensive below the limit', function () {
      const product = new LowCoverageProduct(1, 49);

      expect(product.isExpensive).to.be.equal(false);
    });

    it('isFree without price', function () {
      const product = new LowCoverageProduct(1, 0);

      expect(product.isFree).to.be.equal(true);
    });

    it('isFree with price', function () {
      const product = new LowCoverageProduct(1, 1);

      expect(product.isFree).to.be.equal(false);
    });

    it('incPrice with limit', function () {
      const product = new LowCoverageProduct(1, 50);

      product.incPrice();

      expect(product.price).to.be.equal(50);
    });

    it('incPrice default amount', function () {
      const product = new LowCoverageProduct(1, 0);

      product.incPrice();

      expect(product.price).to.be.equal(1);
    });

    it('incPrice amount 5', function () {
      const product = new LowCoverageProduct(1, 0);

      product.incPrice(5);

      expect(product.price).to.be.equal(5);
    });

    it('decPrice without price', function () {
      const product = new LowCoverageProduct(1, 0);

      product.decPrice();

      expect(product.price).to.be.equal(0);
    });

    it('decPrice default amount', function () {
      const product = new LowCoverageProduct(1, 10);

      product.decPrice();

      expect(product.price).to.be.equal(9);
    });

    it('decPrice amount 5', function () {
      const product = new LowCoverageProduct(1, 10);

      product.decPrice(5);

      expect(product.price).to.be.equal(5);
    });

    it('updatePrice expired product without price', function () {
      const product = new LowCoverageProduct(-1, 0);

      product.updatePrice();

      expect(product.price).to.be.equal(0);
    });

    it('updatePrice expired product with price', function () {
      const product = new LowCoverageProduct(-1, 10);

      product.updatePrice();

      expect(product.price).to.be.equal(8);
    });

    it('updatePrice product without price', function () {
      const product = new LowCoverageProduct(1, 0);

      product.updatePrice();

      expect(product.price).to.be.equal(0);
    });

    it('updatePrice product with price', function () {
      const product = new LowCoverageProduct(1, 10);
      product.updatePrice();

      expect(product.price).to.be.equal(9);
    });

    it('decSellIn with days remaining', function () {
      const product = new LowCoverageProduct(1, 1);

      product.decSellIn();

      expect(product.sellIn).to.be.equal(0);
    });

    it('decSellIn without days remaining', function () {
      const product = new LowCoverageProduct(0, 1);

      product.decSellIn();

      expect(product.sellIn).to.be.equal(-1);
    });

    it('decSellIn with negative days remaining', function () {
      const product = new LowCoverageProduct(-1, 1);

      product.decSellIn();

      expect(product.sellIn).to.be.equal(-2);
    });
  });

  describe('Medium Coverage Product', function () {
    it('isPriceEditable', function () {
      const product = new MediumCoverageProduct(1, 50);

      expect(product.isPriceEditable).to.be.equal(true);
    });

    it('isDaysRemainingEditable', function () {
      const product = new MediumCoverageProduct(1, 50);

      expect(product.isDaysRemainingEditable).to.be.equal(true);
    });

    it('isExpired without days remaining', function () {
      const product = new MediumCoverageProduct(-1, 1);

      expect(product.isExpired).to.be.equal(true);
    });

    it('isExpired with 0 days remaining', function () {
      const product = new MediumCoverageProduct(0, 1);

      expect(product.isExpired).to.be.equal(false);
    });

    it('isExpired with days remaining', function () {
      const product = new MediumCoverageProduct(1, 1);

      expect(product.isExpired).to.be.equal(false);
    });

    it('priceLimit', function () {
      const product = new MediumCoverageProduct(1, 1);

      expect(product.priceLimit).to.be.equal(50);
    });

    it('isExpensive on limit', function () {
      const product = new MediumCoverageProduct(1, 50);

      expect(product.isExpensive).to.be.equal(true);
    });

    it('isExpensive below the limit', function () {
      const product = new MediumCoverageProduct(1, 49);

      expect(product.isExpensive).to.be.equal(false);
    });

    it('isFree without price', function () {
      const product = new MediumCoverageProduct(1, 0);

      expect(product.isFree).to.be.equal(true);
    });

    it('isFree with price', function () {
      const product = new MediumCoverageProduct(1, 1);

      expect(product.isFree).to.be.equal(false);
    });

    it('incPrice with limit', function () {
      const product = new MediumCoverageProduct(1, 50);

      product.incPrice();

      expect(product.price).to.be.equal(50);
    });

    it('incPrice default amount', function () {
      const product = new MediumCoverageProduct(1, 0);

      product.incPrice();

      expect(product.price).to.be.equal(1);
    });

    it('incPrice amount 5', function () {
      const product = new MediumCoverageProduct(1, 0);

      product.incPrice(5);

      expect(product.price).to.be.equal(5);
    });

    it('decPrice without price', function () {
      const product = new MediumCoverageProduct(1, 0);

      product.decPrice();

      expect(product.price).to.be.equal(0);
    });

    it('decPrice default amount', function () {
      const product = new MediumCoverageProduct(1, 10);

      product.decPrice();

      expect(product.price).to.be.equal(9);
    });

    it('decPrice amount 5', function () {
      const product = new MediumCoverageProduct(1, 10);

      product.decPrice(5);

      expect(product.price).to.be.equal(5);
    });

    it('updatePrice expired product without price', function () {
      const product = new MediumCoverageProduct(-1, 0);

      product.updatePrice();

      expect(product.price).to.be.equal(0);
    });

    it('updatePrice expired product with price', function () {
      const product = new MediumCoverageProduct(-1, 10);

      product.updatePrice();

      expect(product.price).to.be.equal(8);
    });

    it('updatePrice product without price', function () {
      const product = new MediumCoverageProduct(1, 0);

      product.updatePrice();

      expect(product.price).to.be.equal(0);
    });

    it('updatePrice product with price', function () {
      const product = new MediumCoverageProduct(1, 10);
      product.updatePrice();

      expect(product.price).to.be.equal(9);
    });

    it('decSellIn with days remaining', function () {
      const product = new MediumCoverageProduct(1, 1);

      product.decSellIn();

      expect(product.sellIn).to.be.equal(0);
    });

    it('decSellIn without days remaining', function () {
      const product = new MediumCoverageProduct(0, 1);

      product.decSellIn();

      expect(product.sellIn).to.be.equal(-1);
    });

    it('decSellIn with negative days remaining', function () {
      const product = new MediumCoverageProduct(-1, 1);

      product.decSellIn();

      expect(product.sellIn).to.be.equal(-2);
    });
  });

  describe('Full Coverage Product', function () {
    it('isPriceEditable', function () {
      const product = new FullCoverageProduct(1, 50);

      expect(product.isPriceEditable).to.be.equal(true);
    });

    it('isDaysRemainingEditable', function () {
      const product = new FullCoverageProduct(1, 50);

      expect(product.isDaysRemainingEditable).to.be.equal(true);
    });

    it('isExpired without days remaining', function () {
      const product = new FullCoverageProduct(-1, 1);

      expect(product.isExpired).to.be.equal(true);
    });

    it('isExpired with 0 days remaining', function () {
      const product = new FullCoverageProduct(0, 1);

      expect(product.isExpired).to.be.equal(false);
    });

    it('isExpired with days remaining', function () {
      const product = new FullCoverageProduct(1, 1);

      expect(product.isExpired).to.be.equal(false);
    });

    it('priceLimit', function () {
      const product = new FullCoverageProduct(1, 1);

      expect(product.priceLimit).to.be.equal(50);
    });

    it('isExpensive on limit', function () {
      const product = new FullCoverageProduct(1, 50);

      expect(product.isExpensive).to.be.equal(true);
    });

    it('isExpensive below the limit', function () {
      const product = new FullCoverageProduct(1, 49);

      expect(product.isExpensive).to.be.equal(false);
    });

    it('isFree without price', function () {
      const product = new FullCoverageProduct(1, 0);

      expect(product.isFree).to.be.equal(true);
    });

    it('isFree with price', function () {
      const product = new FullCoverageProduct(1, 1);

      expect(product.isFree).to.be.equal(false);
    });

    it('incPrice with limit', function () {
      const product = new FullCoverageProduct(1, 50);

      product.incPrice();

      expect(product.price).to.be.equal(50);
    });

    it('incPrice default amount', function () {
      const product = new FullCoverageProduct(1, 0);

      product.incPrice();

      expect(product.price).to.be.equal(1);
    });

    it('incPrice amount 5', function () {
      const product = new FullCoverageProduct(1, 0);

      product.incPrice(5);

      expect(product.price).to.be.equal(5);
    });

    it('decPrice without price', function () {
      const product = new FullCoverageProduct(1, 0);

      product.decPrice();

      expect(product.price).to.be.equal(0);
    });

    it('decPrice default amount', function () {
      const product = new FullCoverageProduct(1, 10);

      product.decPrice();

      expect(product.price).to.be.equal(9);
    });

    it('decPrice amount 5', function () {
      const product = new FullCoverageProduct(1, 10);

      product.decPrice(5);

      expect(product.price).to.be.equal(5);
    });

    it('updatePrice expired product without price', function () {
      const product = new FullCoverageProduct(-1, 0);

      product.updatePrice();

      expect(product.price).to.be.equal(2);
    });

    it('updatePrice expired product with price', function () {
      const product = new FullCoverageProduct(-1, 10);

      product.updatePrice();

      expect(product.price).to.be.equal(12);
    });

    it('updatePrice product without price', function () {
      const product = new FullCoverageProduct(1, 0);

      product.updatePrice();

      expect(product.price).to.be.equal(1);
    });

    it('updatePrice product with price', function () {
      const product = new FullCoverageProduct(1, 10);
      product.updatePrice();

      expect(product.price).to.be.equal(11);
    });

    it('decSellIn with days remaining', function () {
      const product = new FullCoverageProduct(1, 1);

      product.decSellIn();

      expect(product.sellIn).to.be.equal(0);
    });

    it('decSellIn without days remaining', function () {
      const product = new FullCoverageProduct(0, 1);

      product.decSellIn();

      expect(product.sellIn).to.be.equal(-1);
    });

    it('decSellIn with negative days remaining', function () {
      const product = new FullCoverageProduct(-1, 1);

      product.decSellIn();

      expect(product.sellIn).to.be.equal(-2);
    });
  });

  describe('Special Full Coverage Product', function () {
    it('isPriceEditable', function () {
      const product = new SpecialFullCoverageProduct(1, 50);

      expect(product.isPriceEditable).to.be.equal(true);
    });

    it('isDaysRemainingEditable', function () {
      const product = new SpecialFullCoverageProduct(1, 50);

      expect(product.isDaysRemainingEditable).to.be.equal(true);
    });

    it('isExpired without days remaining', function () {
      const product = new SpecialFullCoverageProduct(-1, 1);

      expect(product.isExpired).to.be.equal(true);
    });

    it('isExpired with 0 days remaining', function () {
      const product = new SpecialFullCoverageProduct(0, 1);

      expect(product.isExpired).to.be.equal(false);
    });

    it('isExpired with days remaining', function () {
      const product = new SpecialFullCoverageProduct(1, 1);

      expect(product.isExpired).to.be.equal(false);
    });

    it('priceLimit', function () {
      const product = new SpecialFullCoverageProduct(1, 1);

      expect(product.priceLimit).to.be.equal(50);
    });

    it('isExpensive on limit', function () {
      const product = new SpecialFullCoverageProduct(1, 50);

      expect(product.isExpensive).to.be.equal(true);
    });

    it('isExpensive below the limit', function () {
      const product = new SpecialFullCoverageProduct(1, 49);

      expect(product.isExpensive).to.be.equal(false);
    });

    it('isFree without price', function () {
      const product = new SpecialFullCoverageProduct(1, 0);

      expect(product.isFree).to.be.equal(true);
    });

    it('isFree with price', function () {
      const product = new SpecialFullCoverageProduct(1, 1);

      expect(product.isFree).to.be.equal(false);
    });

    it('incPrice with limit', function () {
      const product = new SpecialFullCoverageProduct(1, 50);

      product.incPrice();

      expect(product.price).to.be.equal(50);
    });

    it('incPrice default amount', function () {
      const product = new SpecialFullCoverageProduct(1, 0);

      product.incPrice();

      expect(product.price).to.be.equal(1);
    });

    it('incPrice amount 5', function () {
      const product = new SpecialFullCoverageProduct(1, 0);

      product.incPrice(5);

      expect(product.price).to.be.equal(5);
    });

    it('decPrice without price', function () {
      const product = new SpecialFullCoverageProduct(1, 0);

      product.decPrice();

      expect(product.price).to.be.equal(0);
    });

    it('decPrice default amount', function () {
      const product = new SpecialFullCoverageProduct(1, 10);

      product.decPrice();

      expect(product.price).to.be.equal(9);
    });

    it('decPrice amount 5', function () {
      const product = new SpecialFullCoverageProduct(1, 10);

      product.decPrice(5);

      expect(product.price).to.be.equal(5);
    });

    it('updatePrice expired product without price', function () {
      const product = new SpecialFullCoverageProduct(-1, 0);

      product.updatePrice();

      expect(product.price).to.be.equal(0);
    });

    it('updatePrice expired product with price', function () {
      const product = new SpecialFullCoverageProduct(-1, 10);

      product.updatePrice();

      expect(product.price).to.be.equal(0);
    });

    it('updatePrice product 0 days remaining', function () {
      const product = new SpecialFullCoverageProduct(0, 0);

      product.updatePrice();

      expect(product.price).to.be.equal(3);
    });

    it('updatePrice product 5 days remaining', function () {
      const product = new SpecialFullCoverageProduct(5, 0);

      product.updatePrice();

      expect(product.price).to.be.equal(2);
    });

    it('updatePrice product 10 days remaining', function () {
      const product = new SpecialFullCoverageProduct(10, 0);

      product.updatePrice();

      expect(product.price).to.be.equal(1);
    });

    it('decSellIn without days remaining', function () {
      const product = new SpecialFullCoverageProduct(0, 1);

      product.decSellIn();

      expect(product.sellIn).to.be.equal(-1);
    });

    it('decSellIn with negative days remaining', function () {
      const product = new SpecialFullCoverageProduct(-1, 1);

      product.decSellIn();

      expect(product.sellIn).to.be.equal(-2);
    });
  });

  describe('Mega Coverage Product', function () {
    it('isPriceEditable', function () {
      const product = new MegaCoverageProduct(1);

      expect(product.isPriceEditable).to.be.equal(false);
    });

    it('isDaysRemainingEditable', function () {
      const product = new MegaCoverageProduct(1);

      expect(product.isDaysRemainingEditable).to.be.equal(false);
    });

    it('isExpired without days remaining', function () {
      const product = new MegaCoverageProduct(-1);

      expect(product.isExpired).to.be.equal(false);
    });

    it('isExpired with 0 days remaining', function () {
      const product = new MegaCoverageProduct(0);

      expect(product.isExpired).to.be.equal(false);
    });

    it('isExpired with days remaining', function () {
      const product = new MegaCoverageProduct(1);

      expect(product.isExpired).to.be.equal(false);
    });

    it('priceLimit', function () {
      const product = new MegaCoverageProduct(1);

      expect(product.priceLimit).to.be.equal(80);
    });

    it('isExpensive on limit', function () {
      const product = new MegaCoverageProduct(1);

      expect(product.isExpensive).to.be.equal(true);
    });

    it('isFree', function () {
      const product = new MegaCoverageProduct(1);

      expect(product.isFree).to.be.equal(false);
    });

    it('incPrice', function () {
      const product = new MegaCoverageProduct(1);

      try {
        product.incPrice();

        throw { message: 'should not throw' };
      } catch (error) {
        expect(error.message).to.be.equal(
          'price in Mega Coverage Product is not editable',
        );
      }
    });

    it('decPrice', function () {
      const product = new MegaCoverageProduct(1);

      try {
        product.decPrice();

        throw { message: 'should not throw' };
      } catch (error) {
        expect(error.message).to.be.equal(
          'price in Mega Coverage Product is not editable',
        );
      }
    });

    it('updatePrice', function () {
      const product = new MegaCoverageProduct(1);

      try {
        product.updatePrice();

        throw { message: 'should not throw' };
      } catch (error) {
        expect(error.message).to.be.equal(
          'price in Mega Coverage Product is not editable',
        );
      }
    });

    it('decSellIn', function () {
      const product = new MegaCoverageProduct(1);

      try {
        product.decSellIn();

        throw { message: 'should not throw' };
      } catch (error) {
        expect(error.message).to.be.equal(
          'sellIn in Mega Coverage Product is not editable',
        );
      }
    });
  });

  describe('Super Sale Product', function () {
    it('isPriceEditable', function () {
      const product = new SuperSaleProduct(1, 50);

      expect(product.isPriceEditable).to.be.equal(true);
    });

    it('isDaysRemainingEditable', function () {
      const product = new SuperSaleProduct(1, 50);

      expect(product.isDaysRemainingEditable).to.be.equal(true);
    });

    it('isExpired without days remaining', function () {
      const product = new SuperSaleProduct(-1, 1);

      expect(product.isExpired).to.be.equal(true);
    });

    it('isExpired with 0 days remaining', function () {
      const product = new SuperSaleProduct(0, 1);

      expect(product.isExpired).to.be.equal(false);
    });

    it('isExpired with days remaining', function () {
      const product = new SuperSaleProduct(1, 1);

      expect(product.isExpired).to.be.equal(false);
    });

    it('priceLimit', function () {
      const product = new SuperSaleProduct(1, 1);

      expect(product.priceLimit).to.be.equal(50);
    });

    it('isExpensive on limit', function () {
      const product = new SuperSaleProduct(1, 50);

      expect(product.isExpensive).to.be.equal(true);
    });

    it('isExpensive below the limit', function () {
      const product = new SuperSaleProduct(1, 49);

      expect(product.isExpensive).to.be.equal(false);
    });

    it('isFree without price', function () {
      const product = new SuperSaleProduct(1, 0);

      expect(product.isFree).to.be.equal(true);
    });

    it('isFree with price', function () {
      const product = new SuperSaleProduct(1, 1);

      expect(product.isFree).to.be.equal(false);
    });

    it('incPrice with limit', function () {
      const product = new SuperSaleProduct(1, 50);

      product.incPrice();

      expect(product.price).to.be.equal(50);
    });

    it('incPrice default amount', function () {
      const product = new SuperSaleProduct(1, 0);

      product.incPrice();

      expect(product.price).to.be.equal(1);
    });

    it('incPrice amount 5', function () {
      const product = new SuperSaleProduct(1, 0);

      product.incPrice(5);

      expect(product.price).to.be.equal(5);
    });

    it('decPrice without price', function () {
      const product = new SuperSaleProduct(1, 0);

      product.decPrice();

      expect(product.price).to.be.equal(0);
    });

    it('decPrice default amount', function () {
      const product = new SuperSaleProduct(1, 10);

      product.decPrice();

      expect(product.price).to.be.equal(9);
    });

    it('decPrice amount 5', function () {
      const product = new SuperSaleProduct(1, 10);

      product.decPrice(5);

      expect(product.price).to.be.equal(5);
    });

    it('updatePrice expired product without price', function () {
      const product = new SuperSaleProduct(-1, 0);

      product.updatePrice();

      expect(product.price).to.be.equal(0);
    });

    it('updatePrice expired product with price', function () {
      const product = new SuperSaleProduct(-1, 10);

      product.updatePrice();

      expect(product.price).to.be.equal(6);
    });

    it('updatePrice product without price', function () {
      const product = new SuperSaleProduct(1, 0);

      product.updatePrice();

      expect(product.price).to.be.equal(0);
    });

    it('updatePrice product with price', function () {
      const product = new SuperSaleProduct(1, 10);
      product.updatePrice();

      expect(product.price).to.be.equal(8);
    });

    it('decSellIn with days remaining', function () {
      const product = new SuperSaleProduct(1, 1);

      product.decSellIn();

      expect(product.sellIn).to.be.equal(0);
    });

    it('decSellIn without days remaining', function () {
      const product = new SuperSaleProduct(0, 1);

      product.decSellIn();

      expect(product.sellIn).to.be.equal(-1);
    });

    it('decSellIn with negative days remaining', function () {
      const product = new SuperSaleProduct(-1, 1);

      product.decSellIn();

      expect(product.sellIn).to.be.equal(-2);
    });
  });
});
