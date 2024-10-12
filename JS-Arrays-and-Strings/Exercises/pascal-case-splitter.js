function solve(text) {
    const pattern = /[A-Z][a-z]*/g

    const words = text.match(pattern);
    console.log(words.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');
