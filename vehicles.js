// Ioana Alex Mititean
// 10/26/22
// Exercise 12.1.12: Car OO Project


/* PART 1: Represents any vehicle.
* Takes a make, model, and year as arguments.
*/
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep.";
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}


/* PART 2: Represents a car.
* Takes a make, model, and year as arguments.
*/
class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}


/* PART 3: Represents a motorcycle.
* Takes a make, model, and year as arguments.
*/
class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return "VROOM!!!";
    }
}


/* PART 4: Represents a garage, which can store a number of Vehicles.
* Takes a capacity as argument.
*/
class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(vehicle) {
        if (!(vehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }

        if (this.vehicles.length === this.capacity) {
            return "Sorry, we're full.";
        }

        this.vehicles.push(vehicle);
        return "Vehicle successfully added to this garage.";
    }
}