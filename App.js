"use strict";
// Implement the Car class that conforms to the Vehicle interface
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log('Car engine started');
    }
}
// Create an instance of the Car class
const myCar = new Car('Toyota', 'Corolla', 2021);
// Call the start method on the Car instance
myCar.start(); // Output: Car engine started
