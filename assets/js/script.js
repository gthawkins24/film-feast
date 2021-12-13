// select input data through id
var genreInputEl = document.querySelector("#genre");
var decadeInputEl = document.querySelector("#decade");
var runtimeInputEl = document.querySelector("#runtime");
var actorFormEl = document.querySelector("#actor-form");
var actorInputEl = document.querySelector("#actor-name");
var goButtonEl = document.querySelector("#go-btn");


// for submission
var formSubmitHandler = function(event) {
    // prevent page from reloading
    event.preventDefault();

    // get values from input elements
    var genre = genreInputEl;
    var decade = decadeInputEl;
    var runtime = runtimeInputEl;
    var actorName = actorInputEl.value.trim();

    console.log(genre);
    console.log(decade);
    console.log(runtime);
    console.log(actorName);

    // if at least one of the variables are valid pass them all to movie recomendation function
    if (genre || decade || runtime || actorName) {
        getMovieRecs(genre, decade, runtime, actorName);

        // clear old content
        genreInputEl = "";
        decadeInputEl = "";
        runtimeInputEl = "";
        actorInputEl.textContent = "";
    } else {
        alert("Please select at least 1 filter")
    }
};

var getMovieRecs =function(genre, decade, runtime, actorName) {
    console.log(genre);
    console.log(decade);
    console.log(runtime);
    console.log(actorName);
    console.log("function call works");
};

goButtonEl.addEventListener("click", formSubmitHandler);



