function solve(catsInput) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);   
        }
    }

    catsInput.forEach(catInfo => {
        const [catName, catAge] = catInfo.split(' ');
        const cat = new Cat(catName, catAge);
        cat.meow();
    });
}


solve(['Mellow 2', 'Tom 5']);
console.log('');

solve(['Candy 1', 'Poppy 3', 'Nyx 2']);
