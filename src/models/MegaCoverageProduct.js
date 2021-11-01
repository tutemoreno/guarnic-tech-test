const Product = require('./Product');

module.exports = class MegaCoverageProduct extends Product {
  /**
   * @param {Number} sellIn dias restantes para expirar
   */
  constructor(sellIn) {
    super('Mega Coverage', sellIn, 80);
  }
  /**
   * booleano para precio editable
   * @return {Boolean}
   */
  get isPriceEditable() {
    return false;
  }
  /**
   * booleano para dias editable
   * @return {Boolean}
   */
  get isDaysRemainingEditable() {
    return false;
  }
  /**
   * no tiene expiracion
   * @return {Boolean}
   */
  get isExpired() {
    return false;
  }
  /**
   * precio limite del producto
   * @return {Number}
   */
  get priceLimit() {
    return 80;
  }
  /**
   * getter llego al precio limite
   * a veces lo mas dificil es el nombre
   * @return {Boolean}
   */
  get isExpensive() {
    return true;
  }
  /**
   * getter sin precio
   * @return {Boolean}
   */
  get isFree() {
    return false;
  }
  /**
   * el precio no es editable
   */
  throwEditPrice() {
    const message = 'price in Mega Coverage Product is not editable';

    throw { message };
  }
  /**
   * incrementa el precio del producto
   */
  incPrice() {
    this.throwEditPrice();
  }
  /**
   * decrementa el precio del producto
   */
  decPrice() {
    this.throwEditPrice();
  }
  /**
   * actualiza el precio del producto
   */
  updatePrice() {
    this.throwEditPrice();
  }
  /**
   * decrementa dias restantes
   */
  decSellIn() {
    const message = 'sellIn in Mega Coverage Product is not editable';

    throw { message };
  }
};
