function solve(input) {
    const bookShelves = [];

    for (const row of input) {
        if (row.includes('->')) {
            const [shelfID, shelfGenre] = row.split(' -> ');

            const shelf = findShelfByID(bookShelves, shelfID);
            if (!shelf) {
                const newShelf = {
                    shelfID,
                    shelfGenre,
                    books: []
                };
                bookShelves.push(newShelf);
            }

        } else if(row.includes(':')) {
            const [bookTitle, bookInfo] = row.split(': ');
            const [bookAuthor, bookGenre] = bookInfo.split(', ');

            const shelf = findShelfByGenre(bookShelves, bookGenre);
            if (shelf) {
                const book = {
                    title: bookTitle,
                    author: bookAuthor
                };
                shelf.books.push(book);
            }
        }
    }

    sortShelves(bookShelves);
    printShelves(bookShelves);
    

    function findShelfByID(shelves, shelfID) {
        return shelves.find(shelf => shelf.shelfID === shelfID);
    }

    function findShelfByGenre(shelves, bookGenre) {
        return shelves.find(shelf => shelf.shelfGenre === bookGenre);
    }

    function sortShelves(shelves) {
        shelves.sort((shelfA, shelfB) => shelfB.books.length - shelfA.books.length);

        shelves.forEach(shelf => {
            shelf.books.sort((bookA, bookB) => bookA.title.localeCompare(bookB.title));
        });
    }

    function printShelves(shelves) {
        shelves.forEach(shelf => {
            const bookCount = shelf.books.length;
            console.log(`${shelf.shelfID} ${shelf.shelfGenre}: ${bookCount}`);
            shelf.books.forEach(book => {
                const {title, author} = book;
                console.log(`--> ${title}: ${author}`);
            })
        })
    }
}


solve(
    [
    '1 -> history', 
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'
]
);


console.log('');
console.log('');

solve(
    [
    '1 -> mystery',
    '2 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Lions and Rats: Gabe Roads, history',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi'
]
);
