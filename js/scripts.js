// Day 3
// const name ="Melody"; // truthy or true
// const age = null; //falsey or false

// if (name || age) {
  // alert('one exists');
// }
// Josh's Notes
//THE LOGICAL OPERATORS
// Logical AND ( && ) // Both have to be ture
 // let name = "joshua";
 // let age = 18;

 // if(name && age){
   // alert('both exist');
 // }

// Logical OR ( || ) // One or the other must be true //js will stop on the the first true one
 // let name = "joshua";
 // let age = 18;

 // if(name || age){
   // alert('both exist');
 // }
// Logical NOT ( ! ) //Checks if it is false if so its true
 // let name = "";
 // let age = 18;

 // if(!name){
   // alert('one exist');
 // }

 // if(!name && age){
   // alert('both exist');
 // }
// Truthy https://developer.mozilla.org/en-US/docs/Glossary/truthy //In JavaScript, a truthy value is a value that is considered  true when evaluated in a Boolean context
// Falsy https://developer.mozilla.org/en-US/docs/Glossary/falsy //A falsy value is a value that translates to false when evaluated in a Boolean context.
 // let name = ""; //Falsy
 // let age = 18; //Truthy

 // if(name || age){  //Truthy
    // alert('both exist');
  // }
// let name = '';
// let age = 32;

// if(!name && age){
  // alert('one exists');
// }
// comparison operators //Loose equal ( == ) //Strict equal ( === )
   const age = 18;//number
   const stringAge = '18';//string
//End Josh's notes
   if(age == stringAge) {
     // alert('they\'re the same!');
   }
// if you forget and do this, you are setting, not checking:
if(numAge = stringAge) {
  // alert('they\'re the same!');
}
// True
if(numAge !== stringAge) {
  // alert('they\'re the same!');
}
// false
if(numAge != stringAge) {
  // alert('they\'re the same!')
}

let objectOne = {
  name: "Melody"
};

let objectTwo = {
  name: "Melody"
};

// alert(objectOne == objectTwo); //ALWAYS FALSE - TWO OBJECTS WILL NEVER BE EQUAL TO EACHOTHER
// turns out to be false. JS saves everything that it has, except for objects, by reference. With an object, JS carves out a piece of memory, calls it object, and creates a pointer and stores it there, so two objects are never equal to eachother ever because they are never saved in the same place. two objects with the exact same value are saved in different places in memory so will never see two objects as equal to eachother.
// if(numAge > stringAge.length) {
  // alert('whaaaaaaaat?');
// }

// var myString = 'melody, maui, happy';
// var objectString= new String ('melody, maui, happy');

// if(myString <= objectString){
  // alert('they\'re the same');
// }

// incremenet
let limit = 12;
console.log(limit);
limit++; //same as limit = limit + 1;
console.log(limit);
limit + 1;
console.log(limit);
limit += 7; //same as limit = limit + 7;
console.log(limit);
const upperlimit = 23;

// NaN - not a number - value that something can be if it is not a number. Example:
// let myNumber = "Ted";
// console.log(myNumber++);

// Way to check if something is NaN
// let myNumber = "cheese";

// isNaN(myNumber);

// console.log(isNaN(myNumber++)); //true

// let myNumber = 77;
// console.log(!isNaN(myNumber++)); //true b/c 77 is not not a number

// let myNumber = 77;
// myNumber = parseInt(myNumber;)
// console.log(!isNaN(myNumber++)); //true b/c 77 is not not a number

// let userAnswerFn = prompt("What is your first number?" , '10');
// let userAnswerSn = prompt("What is your second number?", '10');
// userAnswerFn = parseInt(userAnswerFn);
// userAnswerSn = parseInt(userAnswerSn);
// alert(userAnswerFn + userAnswerSn);

// let numOne =  parseInt(prompt('Give me a number' , '10'));
// let numTwo = parseInt(prompt('Give me a number', '10'));
// alert(numOne + numTwo);

// if else statements
// if(numOne > numTwo) {
  // alert("Your first number is bigger than your second number");
// } else if(numOne === numTwo) {
  // alert("They're the same!");
// }else if(numOne < numTwo){
  // alert("Number one is smaller than number Two!!")
// }else {
  // alert('Something went wrong...');
// }

// if(numOne > numTwo) {
  // alert('yay');
// }else{
  // alert('booo');
// }

// Switch Statements : basically the same concept as an if else, but a little bit cleaner and may want to use over it in some conditions.
// try to use as few "if else" statements as possible, use switch statements instead.
let firstName = prompt ("what is your first name?", "Tom");
switch (firstName) {
  case 'tom':
    alert("Hello Tom!");
    break; //have to include this otherwise JS will continue to evaluate code.
  case 'john':
  case 'harry':
  case 'peter':
    alert('Your name is very common.');
    break;
  default:
    alert('I have never heard that name before.');
    break;
}

let firstName = prompt ("what is your first name?", "Tom");
switch (firstName.toLowerCase()) { //it will always be a lowercase value that comes back.
  case 'tom':
    alert("Hello Tom!");
    break; //have to include this otherwise JS will continue to evaluate code.
  case 'john':
  case 'harry':
  case 'peter':
    alert('Your name is very common.');
    break;
  default:
    alert('I have never heard that name before.');
    break;
}
// Day One
var myName = "Melody";
let birthday = new Date('10.6.76');
const myGoal = "to learn JavaScript so I can become a front-end developer for Bitwise Industries, Inc.";
console.log(myName, birthday, myGoal);
console.log(Date.UTC(birthday));
let chores = ['feed the dog', 'try not to kill the cat', 34, [1, 4, 5]];
alert(chores);
let userAnswer = prompt ("Did you brush your teeth today?", "Yes");
console.log(userAnswer);

// Day Two
let favoriteMovie = "Gone With the Wind";
let favoriteFood = "tacos";
console.log(favoriteMovie, favoriteFood);
const yearMovieCameOut = new Date(1936);
const ingredients = ['corn tortillas', 'carne asada', 'cilantro', 'onions', 'cabbage', 'lime', 'green salsa'];
console.log(yearMovieCameOut, ingredients);
alert(favoriteFood + ingredients);
confirm(favoriteMovie, yearMovieCameOut);
console.log(myName);
