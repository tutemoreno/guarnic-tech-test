const Product = require('./Product');

module.exports = class LowCoverageProduct extends Product {
  /**
   * @param {Number} sellIn dias restantes para expirar
   * @param {Number} price precio del producto
   */
  constructor(sellIn, price) {
    super('Low Coverage', sellIn, price);
  }
};
