function solve(stock, delivery) {
    const result = {};

    for (let i = 0; i < stock.length; i += 2) {
        const product = stock[i];
        const quantity = Number(stock[i + 1]);

        result[product] = quantity;
    }

    for (let i = 0; i < delivery.length; i += 2) {
        const product = delivery[i];
        const quantity = Number(delivery[i + 1]);

        if (result.hasOwnProperty(product)) {
            result[product] += quantity;
        } else {
            result[product] = quantity;
        }
    }

    Object.keys(result).forEach(product => console.log(`${product} -> ${result[product]}`));
}


solve(
[
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],

[
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
]);

console.log('');

solve(
[
    'Salt', '2', 'Fanta', '4', 'Apple', '14',
    'Water', '4', 'Juice', '5'
],

[
    'Sugar', '44', 'Oil', '12', 'Apple', 
    '7', 'Tomatoes', '7', 'Bananas', '30'
]
);
