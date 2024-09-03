class Car4 {
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

class ElectricCar extends Car4 {
    batteryLife: number;

    constructor (make: string) {
        super(make);
    }

    charge() {
        console.log(`El ${this.getMake()} se esta cargando`);
    }

}

new ElectricCar('Tesla').charge();

// console.log(new Car4('Toyota').drive());
// const car4 = new Car4('Mercedes');
// console.log(car4.drive());
// console.log(car4.getMake());
