class Car2 {
    make: string;

    constructor (make: string) {
        this.make = make;
    }
    
    drive() {
        return `Driving a ${this.make}`;
    }
}

console.log(new Car2('Toyota').drive());

const car2 = new Car2('Mercedes');
console.log(car2.drive());

