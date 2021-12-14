//declare variables
const ingredient1 = document.querySelector("#ingredient1");
const ingredient2 = document.querySelector("#ingredient2");
const ingredient3 = document.querySelector("#ingredient3");
const generate = document.querySelector("#submit");
let movieSelections = [];
let foodSelections = [];

let movieURL = 'https://api.themoviedb.org/3/discover/movie?api_key=c6d75842800d82b4602daf055d240f68&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&primary_release_year=2002&with_watch_monetization_types=flatrate&vote_average.gte=7&with_genres=35&vote_count.gte=20&with_runtime.lte=20&original_language=en'

let foodURL = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey=cac1eb65ed1f478ab7030fe3f22a709b&number=10&ingredients=broccoli,+carrots'


// gathers selections, parses movie values into numbers
const gatherSelections = (ev) => {
  ev.preventDefault();
// creates object for movie selections to enter into url
  let movie = {
    genre: parseInt(document.querySelector("#genre").value),
    runtime: parseInt(document.querySelector("#runtime").value),
    year: parseInt(document.querySelector("#decade").value)
  };
//creates object for ingredient selections, makes lower case to work with API URL
  let ingredients = {
    ingredient1: (document.querySelector("#ingredient1").value).toLowerCase(),
    ingredient2: (document.querySelector("#ingredient2").value).toLowerCase(),
    ingredient3: (document.querySelector("#ingredient3").value).toLowerCase()
  };
  // adds movie and ingredients into empty array to insert into respective API urls
  movieSelections.push(movie);
  foodSelections.push(ingredients);
  console.log(movie.year);
// generates random number of year between decades
  if (movie.year < 2020) {
  movie.year = (Math.floor((Math.random() * 10)) + movie.year);
  };

//test to make sure objects are generated properly
console.log(movieSelections);
console.log(foodSelections);
};

// listens for click event on generate button, fires gatherSelections function
generate.addEventListener("click", gatherSelections)
