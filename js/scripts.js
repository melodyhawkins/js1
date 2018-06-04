takehome-day4
// Try it out #2
// In your scripts.js file, create 5 arrays, each with one of your top 5 movies' title and the main character's name
// Add all of these arrays to a final array named favoriteMovies
// Create an array with just the titles of your favorite movies and alert it
// Create another array with your favorite and least favorite of the top 5 and console.log it.
// Check the length of your favoriteMovies array by alerting it.
let favMov1 = ["Girls Just Want to Have Fun", "Janey Glenn"];
let favMov2 = ["Goonies", "Mikey"];
let favMov3 = ["My Cousin Vinny", "Vinny Gambini"];
let favMov4 = ["Legally Blonde", "Elle Woods"];
let favMov5 = ["Any Given Sunday", "Christina Pagniacci"];

let favoriteMovies = [];
favoriteMovies.push(favMov1, favMov2, favMov3, favMov4, favMov5);

let titles =[];
titles.push(favoriteMovies[0][0], favoriteMovies[1][0], favoriteMovies[2][0], favoriteMovies[3][0], favoriteMovies[4][0]);

alert(titles);

let favLeastFav = [];
favLeastFav.push(favoriteMovies[0][0], favoriteMovies[4][0]);
console.log(favLeastFav);

alert(favoriteMovies.length);



