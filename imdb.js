//Bring in imdb module
imdb = require('imdb-api');

//API KEY;
const key = 'b3dac628';

//Holder for matches
let movies = [];

//GET MOVIE ON IMDB BY ID
// imdb.get({ id: 'tt0090190' }, { apiKey: 'b3dac628' }).then(console.log);

//Get user input from command line
const userQuery = process.argv[2];

//search database based on name (string only)
imdb.search({
  name: `The Godfather`
}, {
    apiKey: key
  })
  .then((data) => {
    //Loop through potential matches
    data.results.forEach(movie => {
      
     //get full movie objects with id
     imdb.get({ id: movie.imdbid }, { apiKey: key })
     .then((movieObj) => {
       //push full movie objects into global array
      movies.push(movieObj);
     })
     .catch((err) => {
     })
    });
  })
  .catch(console.log); //error

//Method to show results
const resultsMovie = function(){

//wait to return result of matches
  setTimeout(() => {
    console.log(movies[0]);
  }, 1000);
}

resultsMovie();






