function getBMWAndAudiCars(inventory) {
    const bmwAndAudiCars = [];
    for (let car of inventory) {
      if (car.car_make === "BMW" || car.car_make === "Audi") {
        bmwAndAudiCars.push(car);
      }
    }
    return bmwAndAudiCars;
  }
  
  export default getBMWAndAudiCars;
  