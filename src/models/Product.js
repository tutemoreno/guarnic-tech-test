module.exports = class Product {
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
   * booleano para precio editable
   * @return {Boolean}
   */
  get isPriceEditable() {
    return true;
  }
  /**
   * booleano para dias editable
   * @return {Boolean}
   */
  get isDaysRemainingEditable() {
    return true;
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
  get priceLimit() {
    return 50;
  }
  /**
   * getter llego al precio limite
   * a veces lo mas dificil es el nombre
   * @return {Boolean}
   */
  get isExpensive() {
    return this.price == this.priceLimit;
  }
  /**
   * getter sin precio
   * @return {Boolean}
   */
  get isFree() {
    return this.price == 0;
  }
  /**
   * incrementa el precio del producto
   * @param {Number} v valor a incrementar - default 1
   */
  incPrice(v = 1) {
    if (this.isExpensive) return;

    this.price += v;

    if (this.price > this.priceLimit) this.price = this.priceLimit;
  }
  /**
   * decrementa el precio del producto
   * @param {Number} v valor a decrementar - default 1
   */
  decPrice(v = 1) {
    if (this.isFree) return;

    this.price -= v;

    if (this.price < 0) this.price = 0;
  }
  /**
   * actualiza el precio del producto
   */
  updatePrice() {
    if (this.isExpired) this.decPrice(2);
    else this.decPrice();
  }
  /**
   * decrementa dias restantes
   */
  decSellIn() {
    this.sellIn--;
  }
};
