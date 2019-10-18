(function(){
    const movies = ['The Matrix', 'The Godfather', 'A Star is Born', 'The Silence of the Lambs', 'Titanic', 'Avengers', 'The Lord of the Rings', 'A Quiet Place', 'La La Land', 'Harry Potter', 'A ClockWork Orange', 'Seven Samurai', 'The Notebook'];

    const trimThe = movieName => {
        return movieName.replace(/^(an?|the)\s+?/i, '').trim();
    };
    console.table(trimThe('The Lord of the Ring'));
    // Sort those arrays alphabetically ignoring the beginning of 'the' and 'a'
    const sortedMovies = movies.sort((a, b) =>
        (a > b) ? 1 : -1
    );
    // console.table(sortedMovies);
}());