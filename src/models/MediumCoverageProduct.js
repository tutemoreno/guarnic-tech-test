const Product = require('./Product');

module.exports = class MediumCoverageProduct extends Product {
  /**
   * @param {Number} sellIn dias restantes para expirar
   * @param {Number} price precio del producto
   */
  constructor(sellIn, price) {
    super('Medium Coverage', sellIn, price);
  }
};
