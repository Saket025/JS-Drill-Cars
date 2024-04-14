const findCarById = require('../problem1').default;
const inventory = require('../inventory');

const car33 = findCarById(inventory, 33);
console.log(`Car 33 is a ${car33.car_year} ${car33.car_make} ${car33.car_model}`);
