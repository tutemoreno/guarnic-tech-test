const Product = require('./Product');

module.exports = class FullCoverageProduct extends Product {
  /**
   * @param {Number} sellIn dias restantes para expirar
   * @param {Number} price precio del producto
   */
  constructor(sellIn, price) {
    super('Full Coverage', sellIn, price);
  }
  /**
   * actualiza el precio del producto
   */
  updatePrice() {
    if (this.isExpired) this.incPrice(2);
    else this.incPrice();
  }
};
