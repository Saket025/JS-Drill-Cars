function sortCarModelsAlphabetically(inventory) {
    const sortedModels = inventory.map(car => car.car_model).sort();
    return sortedModels;
  }
  
  export default sortCarModelsAlphabetically;
  