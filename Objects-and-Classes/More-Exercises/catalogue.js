function solve(input) {
    const products = [];

    for (let productInfo of input) {
        const [productName, productPrice] = productInfo.split(' : ');
        const product = {
            name: productName,
            price: Number(productPrice)
        };
        products.push(product);
    }

    const sortedProducts = products.toSorted((a, b) => a['name'].localeCompare(b['name']));

    const initialLetters = new Set(sortedProducts.map(product => product.name[0]));
    printCatalogue(sortedProducts, initialLetters);

    function printCatalogue(sortedProducts, initialLetters) {
        initialLetters.forEach(initialLetter => {
            console.log(initialLetter);
            sortedProducts.filter(product => product.name[0] == initialLetter)
                        .forEach(product => console.log(`  ${product.name}: ${product.price}`));
        });
    }
}


solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);

for (let i = 0; i < 2; i++) {
    console.log(' ');
}

solve([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]);
