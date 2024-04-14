function getAllCarYears(inventory) {
    const carYears = [];
    for (let car of inventory) {
      carYears.push(car.car_year);
    }
    return carYears;
  }
  
  export default getAllCarYears;
  