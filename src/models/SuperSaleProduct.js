const Product = require('./Product');

module.exports = class SuperSaleProduct extends Product {
  /**
   * @param {Number} sellIn dias restantes para expirar
   * @param {Number} price precio del producto
   */
  constructor(sellIn, price) {
    super('Super Sale', sellIn, price);
  }
  /**
   * actualiza el precio del producto
   */
  updatePrice() {
    if (this.isExpired) this.decPrice(4);
    else this.decPrice(2);
  }
};
