class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
        this.totalCost += product.price * product.quantity;
    }

    getProducts() {
        return this.storage.map(product => JSON.stringify(product)).join('\n');
    }
}


let productOne = {name: 'Cucumber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);

storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);

console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);

console.log('');


let product1 = {name: 'Tomato', price: 0.90, quantity: 19};
let product2 = {name: 'Potato', price: 1.10, quantity: 10};
let storage2 = new Storage(30);

storage2.addProduct(product1);
storage2.addProduct(product2);

console.log(storage2.totalCost);
console.log(storage2.getProducts());
