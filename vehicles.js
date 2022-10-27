// Ioana Alex Mititean
// 10/26/22
// Exercise 12.1.12: Car OO Project


/* Represents any vehicle. */
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