const getCarsOlderThan2000 = require('../problem5');
const inventory = require('../inventory');

const olderCars = getCarsOlderThan2000(inventory);
console.log("Cars Older Than 2000:");
console.log(olderCars);
console.log("Number of Older Cars:", olderCars.length);
