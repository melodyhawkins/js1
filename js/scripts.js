// Day 4 Class Notes
let inside = true;
if(inside){
  console.log('i am inside')
}else{
  console.log('i am not inside')
}
//Ternaries
//condition ? expression1 : expression2

let example2 = inside? "I am inside" : 'i am not inside'
//console.log(example2)

// let number = 10
// let num = (number > 20) ? "number is greater than 20" : "number is less than 20"
// console.log((number > 20) ? "number is greater than 20" : "number is less than 20")

// let number = 15;
// console.log(number > 10 ? "number is greater" : "number is less than")

let name = false;
let email = true;
//
// if(name){
//   console.log("I have name")
// }
// else if (email) {
//   console.log("I have email")
// }
// else{
//   console.log("i have none")
// }

// as a Ternary
name ? "i have name" : email ? "i have email" : "i have none"
console.log(name ? "i have name" : email ? "i have email" : "i have none")

let imAmHUngry = true;
let money = 5;
// Ternaries [only use when either one can be one or the other (if else statements - otherwise use switch statements)]
let hungry = imAmHUngry ? ((money >10)? "i am hungry and i have more than 10" : "i am hungry and i have less than 10") :
             ((money> 10)? "i am not hungry and i have more than 10" : "i am not hungry and i have less than 10")

console.log(hungry);
// if (imAmHUngry){
//   if (money > 10){
//       'i am hungry and i have more than 10'
//  }
// }else {
//   if (money >10){
//     'i am not hungry and i have more than 10'
//   }
//   else {
//     'i am not hungry and i have less than 10'
//   }
// }
let IamWearingYellow = false
// IamWearingYellow ? "yes i am wearing yellow" : "no i am not";

let number = 23;
let num = (number = 23 && IamWearingYellow) ? "number = 23 and yellow" : "number not 23 and not yellow"
console.log(num); //do not have to write out number because defined entire declaration as "num"

// Arrays
// They are a really good way of saving data. If you have a website and you are building a online store for a client. your job would be to get all the data conntected to the products from the backend sent to you in an array and you would look in that array for a picture, price, title, description for every product and display it on the screen. way of transporting and accessing data. Array type object [evrything in JS is an object]
// [] (most basic form of an array) Arrays give you access to length - tells you how many things are in an array, kind of like a string, gives you the count of the things inside. It index - a numerical reference that gives you a reference to a thing inside of an array - known as zero indexed (0 is always the first number in an array). the way to access - name the data (variable); can have an array inside of an array, can have a boolean inside of an array. The length of the array is still how many members are in the array.
// let arr = ["javascript", 100, {}, [], true];
// console.log(arr[4]);
// console.log(arr.length);

// Try it out #1
let arr = ['The Post', 21, true, 1994];
// console.log(arr.length);

// console.log(Array.isArray(arr));
// console.log(arr);
// arr.push("Pizza");
// console.log(arr); //added pizza to the end of the array.
// control flow: check whether it is an array first and then if it is move forward and if not then make it one.
// push - method attached to the array object.
// unshift - add at beginning of the array

// console.log(arr);
// // arr.unshift("Pizza");
// const removed = arr.pop();
// console.log(arr); //added pizza to the end of the array.
//
// let first = arr.shift();//remove the first item in the array AND returns the returned item to you as your variable 'first'
// console.log(arr, first);
// console.log(arr[arr.length-1]); // access/how to find the last number/index in the array
// console.log(arr[arr.length-2]); //access/how to find the second to last number/index in the array

// Pop -can pop something off the end of an Array - ONLY FOR THE LAST ITEM
// Splice - allows you optionally to do multiple things at the same time. It has multiple different arguments that it can take. The information in square brackets inside parentheses are optional. Parameters = arguments => thing you are putting inside the parentheses. To use splice in its most basic way we can use one parameter:
// arr.splice(2);//one argument will remove that index and everything after.
console.log(arr, 'before');
let removedItems = arr.splice(2, 1, false, "Rocky"); // 1 is how many things you want to delete [the delete count]. with 2 arguments you start removing items at the first argument (index) and then remove only the number of items you passed in as the second argument (delete count). Should remove 1 thing, remove that one thing with "false" and then follow it up with the additional objects.
console.log(arr, "this is the result of splice");
console.log(removedItems);

// Slice = basically just makes a copy. does not do anything to the original at all.
// indexOf = use this to find where it is in the index and then to slice it out of the array. Will only give you the FIRST index.
console.log(arr.indexOf("The Post"));
// lastIndexOf = only gives you the LAST index.
// reverse = reshuffles the array so the first becomes the last, etc.
arr.reverse();
console.log(arr);

// Multi-dimensional arrays - arrays within Arrays- how can we access a certain member inside of an array?
const products = [["blanket", [12.99, 10.99], "The best blanket around."], ['rattle', 4.99, "It rattles man..."], ['diapers', 12.99, 'They catch the doo doo']];
alert(products[0][1][1]);

// Try it out #2
// In your scripts.js file, create 5 arrays, each with one of your top 5 movies' title and the main character's name
// Add all of these arrays to a final array named favoriteMovies
// Create an array with just the titles of your favorite movies and alert it

let favMov1 = ["Girls Just Want to Have Fun", "Sarah Jessica Parker"];
let favMov2 = ["The Notebook", "Ryan Gosling"];
let favMov3 = ["Wall Street", "Charlie Sheen"];
let favMov4 = ["Legally Blonde", "Reese Witherspoon"];
let favMov5 = ["Any Given Sunday", "Cameron Diaz"];

let favoriteMovies = [];
favoriteMovies.push(favMov1, favMov2, favMov3, favMov4, favMov4, favMov5);

let titles =[];
titles.push(favoriteMovies[0][0], favoriteMovies[1][0], favoriteMovies[2][0], favoriteMovies[3][0], favoriteMovies[4][0], favoriteMovies[5][0]);

alert(titles);
