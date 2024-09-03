class Car3 {
    private make: string;

    constructor (make: string) {
        this.make = make;
    }
    
    drive() {
        return `Driving a ${this.make}`;
    }

    getMake() {
        return this.make
    }
}


console.log(new Car3('Toyota').drive());
const car3 = new Car3('Mercedes');
console.log(car3.drive());
console.log(car3.getMake());
