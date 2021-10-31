module.exports = class CarInsurance {
  /**
   * @param {Array} products array de productos
   */
  constructor(products = []) {
    this.products = products;
  }
  /**
   * actualiza el precio de los productos
   * @returns {Array} array de productos
   */
  updatePrice() {
    const products = this.products;

    for (const product of products) {
      if (product.isRemainingDaysEditable) product.decSellIn();
      if (product.isPriceEditable) product.updatePrice();
    }

    return products;
  }
};
