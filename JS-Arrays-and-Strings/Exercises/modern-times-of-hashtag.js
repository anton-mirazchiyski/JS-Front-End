function solve(text) {
    const pattern = /#[A-Za-z]+/gm

    const words = text.match(pattern);

    words.forEach(word => {
        console.log(word.slice(1));
    });
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');
