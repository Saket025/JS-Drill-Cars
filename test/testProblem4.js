const getAllCarYears = require('../problem4');
const inventory = require('../inventory');

const carYears = getAllCarYears(inventory);
console.log("All Car Years:");
console.log(carYears);
