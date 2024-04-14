function getCarsOlderThan2000(inventory) {
    const olderCars = [];
    for (let car of inventory) {
      if (car.car_year < 2000) {
        olderCars.push(car);
      }
    }
    return olderCars;
  }
  
  export default getCarsOlderThan2000;
  