class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}
class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice() {
    const products = this.products;

    for (var i = 0; i < products.length; i++) {
      if (
        products[i].name != 'Full Coverage' &&
        products[i].name != 'Special Full Coverage'
      ) {
        if (products[i].price > 0) {
          if (products[i].name != 'Mega Coverage') {
            products[i].price = products[i].price - 1;
          }
        }
      } else {
        if (products[i].price < 50) {
          products[i].price = products[i].price + 1;
          if (products[i].name == 'Special Full Coverage') {
            if (products[i].sellIn < 11) {
              if (products[i].price < 50) {
                products[i].price = products[i].price + 1;
              }
            }
            if (products[i].sellIn < 6) {
              if (products[i].price < 50) {
                products[i].price = products[i].price + 1;
              }
            }
          }
        }
      }
      if (products[i].name != 'Mega Coverage') {
        products[i].sellIn = products[i].sellIn - 1;
      }
      // expired
      if (products[i].sellIn < 0) {
        if (products[i].name != 'Full Coverage') {
          if (products[i].name != 'Special Full Coverage') {
            if (products[i].price > 0) {
              if (products[i].name != 'Mega Coverage') {
                products[i].price = products[i].price - 1;
              }
            }
          } else {
            products[i].price = products[i].price - products[i].price;
          }
        } else {
          if (products[i].price < 50) {
            products[i].price = products[i].price + 1;
          }
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
