class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
  get isExpired() {
    return this.sellIn < 0;
  }
  get limitPrice() {
    return 50;
  }
  get isExpensive() {
    return this.price == this.limitPrice;
  }
  get isFree() {
    return this.price == 0;
  }
  setLimitPrice() {
    this.price = this.limitPrice;
  }
  incPrice(v = 1) {
    this.price += v;

    if (this.price > this.limitPrice) this.setLimitPrice();
  }
  decPrice(v = 1) {
    this.price -= v;

    if (this.price < 0) this.price = 0;
  }
  decSellIn() {
    this.sellIn--;
  }
}
class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
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
