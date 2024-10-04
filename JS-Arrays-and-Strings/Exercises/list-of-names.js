function solve(names) {
    const sortedNames = names.toSorted((a, b) => a.localeCompare(b));

    for (let i = 0; i < sortedNames.length; i++) {
        console.log(`${i + 1}.${sortedNames[i]}`);
    }
}

solve(["John", "Bob", "Christina", "Ema"]);
