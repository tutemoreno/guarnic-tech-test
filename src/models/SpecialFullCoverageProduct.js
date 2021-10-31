const Product = require('./Product');

module.exports = class SpecialFullCoverageProduct extends Product {
  /**
   * @param {Number} sellIn dias restantes para expirar
   * @param {Number} price precio del producto
   */
  constructor(sellIn, price) {
    super('Special Full Coverage', sellIn, price);
  }
  /**
   * actualiza el precio del producto
   */
  updatePrice() {
    if (this.isExpired) this.price = 0;
    else {
      if (this.sellIn < 5) this.incPrice(3);
      else if (this.sellIn < 10) this.incPrice(2);
      else this.incPrice();
    }
  }
};
