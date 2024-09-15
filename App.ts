
// define the Vehicle interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// implement the Car class that conforms to the Vehicle interface
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

//   implement the constructor method for the Car class
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // implement the start method for the Car class
  start(): void {
    console.log('Car engine started');
  }
}

// create an instance of the Car class
const myCar = new Car('Toyota', 'Corolla', 2021);

// call the start method on the Car instance
myCar.start(); 
