function solve(input) {
    const movies = [];

    const findMovie = (movieName) => movies.find(movie => movie.name == movieName);

    for (const movieInfo of input) {
        if (movieInfo.includes('addMovie')) {
            const name = movieInfo.split(' ').slice(1,).join(' ');
            const movie = {name,};
            movies.push(movie);

        } else if (movieInfo.includes('directedBy')) {
            const parts = movieInfo.split(' directedBy ');
            const name = parts[0];
            
            const movieFound = findMovie(name);
            if (movieFound) {
                const director = parts[1];
                movieFound['director'] = director;
            }

        } else if (movieInfo.includes('onDate')) {
            const parts = movieInfo.split(' onDate ');
            const name = parts[0];
            
            const movieFound = findMovie(name);
            if (movieFound) {
                const date = parts[1];
                movieFound['date'] = date;
            }
        }
    }

    movies.forEach(movie => {
        if (movie.hasOwnProperty('name') && movie.hasOwnProperty('date') && movie.hasOwnProperty('director')) {
            console.log(JSON.stringify(movie));
        }
    });
}


solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);

console.log('');

solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);
