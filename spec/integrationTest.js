const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

const productsAtDayZero = [
  new Product('Medium Coverage', 10, 20),
  new Product('Full Coverage', 2, 0),
  new Product('Low Coverage', 5, 7),
  new Product('Mega Coverage', 0, 80),
  new Product('Mega Coverage', -1, 80),
  new Product('Special Full Coverage', 15, 20),
  new Product('Special Full Coverage', 10, 49),
  new Product('Special Full Coverage', 5, 49),
  new Product('Super Sale', 3, 6),
];

const carInsurance = new CarInsurance(productsAtDayZero);

describe('Integration Test 30 days time lapse', function () {
  afterEach(function () {
    carInsurance.updatePrice();
  });

  it('Day 0', function () {
    expect(carInsurance.products).to.deep.equal([
      {
        name: 'Medium Coverage',
        sellIn: 10,
        price: 20,
      },
      {
        name: 'Full Coverage',
        sellIn: 2,
        price: 0,
      },
      {
        name: 'Low Coverage',
        sellIn: 5,
        price: 7,
      },
      {
        name: 'Mega Coverage',
        sellIn: 0,
        price: 80,
      },
      {
        name: 'Mega Coverage',
        sellIn: -1,
        price: 80,
      },
      {
        name: 'Special Full Coverage',
        sellIn: 15,
        price: 20,
      },
      {
        name: 'Special Full Coverage',
        sellIn: 10,
        price: 49,
      },
      {
        name: 'Special Full Coverage',
        sellIn: 5,
        price: 49,
      },
      {
        name: 'Super Sale',
        sellIn: 3,
        price: 6,
      },
    ]);
  });

  it('Day 1', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: 9,
      price: 19,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: 1,
      price: 1,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: 4,
      price: 6,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 14,
      price: 21,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 9,
      price: 50,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 4,
      price: 50,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: 2,
      price: 5,
    });
  });

  it('Day 2', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: 8,
      price: 18,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: 0,
      price: 2,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: 3,
      price: 5,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 13,
      price: 22,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 8,
      price: 50,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 3,
      price: 50,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: 1,
      price: 4,
    });
  });

  it('Day 3', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: 7,
      price: 17,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -1,
      price: 4,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: 2,
      price: 4,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 12,
      price: 23,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 7,
      price: 50,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 2,
      price: 50,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: 0,
      price: 3,
    });
  });

  it('Day 4', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: 6,
      price: 16,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -2,
      price: 6,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: 1,
      price: 3,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 11,
      price: 24,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 6,
      price: 50,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 1,
      price: 50,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: -1,
      price: 1,
    });
  });

  it('Day 5', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: 5,
      price: 15,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -3,
      price: 8,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: 0,
      price: 2,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 10,
      price: 25,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 5,
      price: 50,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 0,
      price: 50,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: -2,
      price: 0,
    });
  });

  it('Day 6', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: 4,
      price: 14,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -4,
      price: 10,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: -1,
      price: 0,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 9,
      price: 27,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 4,
      price: 50,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -1,
      price: 0,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: -3,
      price: 0,
    });
  });

  it('Day 7', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: 3,
      price: 13,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -5,
      price: 12,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: -2,
      price: 0,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 8,
      price: 29,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 3,
      price: 50,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -2,
      price: 0,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: -4,
      price: 0,
    });
  });
  it('Day 8', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: 2,
      price: 12,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -6,
      price: 14,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: -3,
      price: 0,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 7,
      price: 31,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 2,
      price: 50,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -3,
      price: 0,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: -5,
      price: 0,
    });
  });
  it('Day 9', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: 1,
      price: 11,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -7,
      price: 16,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: -4,
      price: 0,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 6,
      price: 33,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 1,
      price: 50,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -4,
      price: 0,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: -6,
      price: 0,
    });
  });
  it('Day 10', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: 0,
      price: 10,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -8,
      price: 18,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: -5,
      price: 0,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 5,
      price: 35,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 0,
      price: 50,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -5,
      price: 0,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: -7,
      price: 0,
    });
  });
  it('Day 11', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: -1,
      price: 8,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -9,
      price: 20,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: -6,
      price: 0,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 4,
      price: 38,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -1,
      price: 0,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -6,
      price: 0,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: -8,
      price: 0,
    });
  });
  it('Day 12', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: -2,
      price: 6,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -10,
      price: 22,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: -7,
      price: 0,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 3,
      price: 41,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -2,
      price: 0,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -7,
      price: 0,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: -9,
      price: 0,
    });
  });
  it('Day 13', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: -3,
      price: 4,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -11,
      price: 24,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: -8,
      price: 0,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 2,
      price: 44,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -3,
      price: 0,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -8,
      price: 0,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: -10,
      price: 0,
    });
  });
  it('Day 14', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: -4,
      price: 2,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -12,
      price: 26,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: -9,
      price: 0,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 1,
      price: 47,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -4,
      price: 0,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -9,
      price: 0,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: -11,
      price: 0,
    });
  });
  it('Day 15', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: -5,
      price: 0,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -13,
      price: 28,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: -10,
      price: 0,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: 0,
      price: 50,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -5,
      price: 0,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -10,
      price: 0,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: -12,
      price: 0,
    });
  });
  it('Day 16', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: -6,
      price: 0,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -14,
      price: 30,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: -11,
      price: 0,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -1,
      price: 0,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -6,
      price: 0,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -11,
      price: 0,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: -13,
      price: 0,
    });
  });
  it('Day 17', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: -7,
      price: 0,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -15,
      price: 32,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: -12,
      price: 0,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -2,
      price: 0,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -7,
      price: 0,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -12,
      price: 0,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: -14,
      price: 0,
    });
  });
  it('Day 18', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: -8,
      price: 0,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -16,
      price: 34,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: -13,
      price: 0,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -3,
      price: 0,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -8,
      price: 0,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -13,
      price: 0,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: -15,
      price: 0,
    });
  });
  it('Day 19', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: -9,
      price: 0,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -17,
      price: 36,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: -14,
      price: 0,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -4,
      price: 0,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -9,
      price: 0,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -14,
      price: 0,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: -16,
      price: 0,
    });
  });
  it('Day 20', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: -10,
      price: 0,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -18,
      price: 38,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: -15,
      price: 0,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -5,
      price: 0,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -10,
      price: 0,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -15,
      price: 0,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: -17,
      price: 0,
    });
  });
  it('Day 21', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: -11,
      price: 0,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -19,
      price: 40,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: -16,
      price: 0,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -6,
      price: 0,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -11,
      price: 0,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -16,
      price: 0,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: -18,
      price: 0,
    });
  });
  it('Day 22', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: -12,
      price: 0,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -20,
      price: 42,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: -17,
      price: 0,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -7,
      price: 0,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -12,
      price: 0,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -17,
      price: 0,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: -19,
      price: 0,
    });
  });
  it('Day 23', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: -13,
      price: 0,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -21,
      price: 44,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: -18,
      price: 0,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -8,
      price: 0,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -13,
      price: 0,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -18,
      price: 0,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: -20,
      price: 0,
    });
  });
  it('Day 24', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: -14,
      price: 0,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -22,
      price: 46,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: -19,
      price: 0,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -9,
      price: 0,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -14,
      price: 0,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -19,
      price: 0,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: -21,
      price: 0,
    });
  });
  it('Day 25', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: -15,
      price: 0,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -23,
      price: 48,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: -20,
      price: 0,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -10,
      price: 0,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -15,
      price: 0,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -20,
      price: 0,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: -22,
      price: 0,
    });
  });
  it('Day 26', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: -16,
      price: 0,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -24,
      price: 50,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: -21,
      price: 0,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -11,
      price: 0,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -16,
      price: 0,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -21,
      price: 0,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: -23,
      price: 0,
    });
  });
  it('Day 27', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: -17,
      price: 0,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -25,
      price: 50,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: -22,
      price: 0,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -12,
      price: 0,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -17,
      price: 0,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -22,
      price: 0,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: -24,
      price: 0,
    });
  });
  it('Day 28', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: -18,
      price: 0,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -26,
      price: 50,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: -23,
      price: 0,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -13,
      price: 0,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -18,
      price: 0,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -23,
      price: 0,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: -25,
      price: 0,
    });
  });
  it('Day 29', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: -19,
      price: 0,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -27,
      price: 50,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: -24,
      price: 0,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -14,
      price: 0,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -19,
      price: 0,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -24,
      price: 0,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: -26,
      price: 0,
    });
  });
  it('Day 30', function () {
    const products = carInsurance.products;

    expect(products[0]).to.deep.equal({
      name: 'Medium Coverage',
      sellIn: -20,
      price: 0,
    });
    expect(products[1]).to.deep.equal({
      name: 'Full Coverage',
      sellIn: -28,
      price: 50,
    });
    expect(products[2]).to.deep.equal({
      name: 'Low Coverage',
      sellIn: -25,
      price: 0,
    });
    expect(products[3]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: 0,
      price: 80,
    });
    expect(products[4]).to.deep.equal({
      name: 'Mega Coverage',
      sellIn: -1,
      price: 80,
    });
    expect(products[5]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -15,
      price: 0,
    });
    expect(products[6]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -20,
      price: 0,
    });
    expect(products[7]).to.deep.equal({
      name: 'Special Full Coverage',
      sellIn: -25,
      price: 0,
    });
    expect(products[8]).to.deep.equal({
      name: 'Super Sale',
      sellIn: -27,
      price: 0,
    });
  });
});
