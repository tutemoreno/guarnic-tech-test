const Product = require('./Product');

module.exports = class MegaCoverageProduct extends Product {
  /**
   * @param {Number} sellIn dias restantes para expirar
   * @param {Number} price precio del producto
   */
  constructor(sellIn, price) {
    super('Mega Coverage', sellIn, price);
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
  get isRemainingDaysEditable() {
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
  get limitPrice() {
    return 80;
  }
  /**
   * getter llego al precio limite
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
    throw { message: 'price in Mega Coverage Product is not editable' };
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
    throw { message: 'sellIn in Mega Coverage Product is not editable' };
  }
};
