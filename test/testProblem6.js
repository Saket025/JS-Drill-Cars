const getBMWAndAudiCars = require('../problem6');
const inventory = require('../inventory');

const bmwAndAudiCars = getBMWAndAudiCars(inventory);
console.log("BMW and Audi Cars:");
console.log(JSON.stringify(bmwAndAudiCars, null, 2));
