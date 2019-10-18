(function(){
    const movies = ['The Matrix', 'The Godfather', 'A Star is Born', 'The Silence of the Lambs', 'Titanic', 'Avengers', 'The Lord of the Rings', 'A Quiet Place', 'La La Land', 'Harry Potter', 'A ClockWork Orange', 'Seven Samurai', 'The Notebook'];

    // Trim 'the', 'a' and 'an' which the movie names that begin with
    const trimThe = movieName => movieName.replace(/^(an?|the)\s+?/i, '').trim();
    
    // Sort those arrays alphabetically but ignore the head of 'the', 'a', and 'an'
    const sortMovies = movies.sort((a, b) => trimThe(a) > trimThe(b) ? 1 : -1);

    document.querySelector('#movies').innerHTML = sortMovies.map(movie => `<li>${movie}</li>`).join('');
}());