const {
  CarInsurance,
  FullCoverageProduct,
  LowCoverageProduct,
  MediumCoverageProduct,
  MegaCoverageProduct,
  SpecialFullCoverageProduct,
  SuperSaleProduct,
} = require('../src/models/index');

const productsAtDayZero = [
  new MediumCoverageProduct(10, 20),
  new FullCoverageProduct(2, 0),
  new LowCoverageProduct(5, 7),
  new MegaCoverageProduct(0),
  new MegaCoverageProduct(-1),
  new SpecialFullCoverageProduct(15, 20),
  new SpecialFullCoverageProduct(10, 49),
  new SpecialFullCoverageProduct(5, 49),
  new SuperSaleProduct(3, 6),
];

const carInsurance = new CarInsurance(productsAtDayZero);

const productPrinter = function (product) {
  console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};

for (let i = 0; i <= 30; i++) {
  console.log(`-------- day ${i} --------`);
  console.log('name, sellIn, price');
  carInsurance.products.forEach(productPrinter);
  console.log('');
  carInsurance.updatePrice();
}
