class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.quality = quality;
        this.isOn = false;
    }

    turnOn() {
        this.isOn = true;
        this.decreaseQuality();
    }

    turnOff() {
        this.isOn = false;
        this.decreaseQuality();
    }

    showInfo() {
        return JSON.stringify(this.info);
    }

    decreaseQuality() {
        this.quality--;
    }

    get price() {
        return 800 - (this.info.age * 2) + (this.quality * 0.5);
    }
}


let info = {producer: "Dell", age: 2, brand: "XPS"};
let laptop = new Laptop(info, 10);

laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
console.log(laptop.quality);
laptop.turnOn();
console.log(laptop.isOn);
console.log(laptop.price);

console.log(' ');


let info2 = {producer: "Lenovo", age: 1, brand: "Legion"};
let laptop2 = new Laptop(info2, 10);

laptop2.turnOn();
console.log(laptop2.showInfo());
laptop2.turnOff();
laptop2.turnOn();
laptop2.turnOff();
console.log(laptop2.isOn);
