const sortCarModelsAlphabetically = require('../problem3');
const inventory = require('../inventory');

const sortedModels = sortCarModelsAlphabetically(inventory);
console.log("Sorted Car Models:");
console.log(sortedModels);
