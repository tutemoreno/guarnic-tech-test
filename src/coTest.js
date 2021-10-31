class Product {
  /**
   * @param {String} name nombre del producto
   * @param {Number} sellIn dias restantes para expirar
   * @param {Number} price precio del producto
   */
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
  /**
   * producto expirado
   * @return {Boolean}
   */
  get isExpired() {
    return this.sellIn < 0;
  }
  /**
   * precio limite del producto
   * @return {Number}
   */
  get limitPrice() {
    return 50;
  }
  /**
   * getter llego al precio limite
   * @return {Boolean}
   */
  get isExpensive() {
    return this.price == this.limitPrice;
  }
  /**
   * getter sin precio
   * @return {Boolean}
   */
  get isFree() {
    return this.price == 0;
  }
  /**
   * setea el precio limite
   */
  setLimitPrice() {
    this.price = this.limitPrice;
  }
  /**
   * incrementa el precio del producto
   * @param {Number} v valor a incrementar - default 1
   */
  incPrice(v = 1) {
    this.price += v;

    if (this.price > this.limitPrice) this.setLimitPrice();
  }
  /**
   * decrementa el precio del producto
   * @param {Number} v valor a decrementar - default 1
   */
  decPrice(v = 1) {
    this.price -= v;

    if (this.price < 0) this.price = 0;
  }
  /**
   * decrementa dias restantes
   */
  decSellIn() {
    this.sellIn--;
  }
}
class CarInsurance {
  /**
   * @param {Array(Product)} products array de productos
   */
  constructor(products = []) {
    this.products = products;
  }
  /**
   * actualiza el precio de los productos
   * @returns {Array(Product)} array de productos
   */
  updatePrice() {
    const products = this.products;

    for (var i = 0; i < products.length; i++) {
      const product = products[i];

      // nothing to do here
      if (product.name == 'Mega Coverage') continue;

      product.decSellIn();

      if (product.isExpired) {
        switch (product.name) {
          case 'Special Full Coverage':
            product.price = 0;

            break;

          case 'Full Coverage':
            if (!product.isExpensive) product.incPrice(2);

            break;

          case 'Super Sale':
            if (!product.isFree) product.decPrice(4);

            break;

          default:
            if (!product.isFree) product.decPrice(2);

            break;
        }
      } else {
        switch (product.name) {
          case 'Full Coverage':
            if (!product.isExpensive) product.incPrice();

            break;
          case 'Special Full Coverage':
            if (product.sellIn < 5) {
              if (!product.isExpensive) product.incPrice(3);
            } else if (product.sellIn < 10) {
              if (!product.isExpensive) product.incPrice(2);
            } else if (!product.isExpensive) product.incPrice();

            break;

          case 'Super Sale':
            if (!product.isFree) product.decPrice(2);

            break;

          default:
            if (!product.isFree) product.decPrice();

            break;
        }
      }
    }

    return products;
  }
}

module.exports = {
  Product,
  CarInsurance,
};
