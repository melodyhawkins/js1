// Day 5 -Functions
// So far we have written code in the global scope, for the most part, functions allow you to take a piece of code that you can pass around. Place in {} - it is an entire block of code that you can execute on any type of data that you want. Take a piece of code, set it aside and call it as many times as you want.
// Rules: They can (optional) take in data (input); they can (optional) feed data back to you (output); console.log is a function. One of the hallmarks of a function is parentheses.
// Examples:
console.log("Hello World!");
// array.pop(); //- function takes in zero arguments and return value is the member of the array value you removed.
// before you start your final project you should data frame your project. what methods, how to use them, when called, when user going to get involved, etc. Always have a plan.
// Anonymous and Name functions
// functions are what lets you make your code dynamic
// functions are a JS keyword - b/c expects a certain thing to be true when it sees function.
// Example, we want to take a string and capitalize the first letter in each word of the string:
// function capitalCase(string) { //function definition. //the arguments located in the () in a function defintion have no value until you call the function.
  // return string.toUpperCase(); //nothing has been called yet. reutrn value of capitalCase
// };
function capitalCase(string) {
   let words = string.split(' '); //split lets you take any character and split it into separate arrays.
   words.forEach(word => {
      let letters = word.split('');
      let capped = letters[0].toUpperCase() //word is the indivdual loop we are on in our forEach loop; we can use indexOf
      letters.splice(0, 1, capped);
   });
   return words.join(' '); //join that array back together by a space - join takes an array and puts it back into a string.
};

// let newString = capitalCase("peter piper"); //function call - this is where (string) gets defined.
// console.log(newString);

// function(stuff) { //Anonymous function -  most likely part of a call-back or part of something else. Does not have a name, still follows all the rules.
  // console.log(stuff)
// };

// function expression takes an Anonymous expression and assigns it to a variable. hoisting only works with function declarations NOT function expressions.

let capsName = capitalCase('captain america');

// myCoolFunction("cheese");

// function myCoolFunction(stuff) {
  // console.log(stuff)
// };

// Arrow Functions - new to ES6 -learn about in class.
// let myCoolFunction = () => { // SIMPLEST fat arrow function
//   console.log(stuff)
// };
// let myCoolFunction = (stuff) => { //fat arrow function
//   console.log(stuff)
// };
// // IF FAT ARROW FUNCTION ONLY TAKES ONE ARGUMENT CAN WRITE WITHOUT parentheses:
// let myCoolFunction = stuff => { // 1 argument fat arrow function
//   console.log(stuff)
// };
//
// let myCoolFunction = (stuff, things, etc) => { // multiple argument fat arrow function
//   console.log(stuff)
// };

// The order of the arguments in functions matters.

// function divide(arg1, arg2) {
//   return arg2/arg1;
// }
// Try it out #1
// On your day5 branch, write a function that calculates a dog's age. It should:
// Accept 1 argument (age of the dog in years).
// Return the age of the dog using the conversion rate of 1 year to 7 "dog" years.
// Alert the answer.
// function ageDog(years) {
//   return years * 7;
// };
//
// alert(ageDog(parseInt(prompt("How old is your dog in years?", "3"))));

// Now, write a function that tells you what a "lifetime supply" will be for any product. It should:
//
// Accept 2 arguments (age of person now, amount of product per day).
// Calculate the supply needed for the rest of the user's life, based on a constant max age of 80.
// Alert the answer in this format: "You will need x to last you until you're y.
// BONUS: write it to accept a dynamic max age.

// // let
// if(!isNaN(years)){
//   return years * 7;
// } else {
//   ageDog(parseInt(prompt("How old is your dog in years?", "3"))));
// }

// function lifetimeCalculator(age, dailyUse) {
//   if(!isNaN(age) && !isNaN(dailyUse)) {
//     const death = 80;
//     return (death - age) * (dailyUse * 365);
//   } else {
//     userAge = prompt('how old are you?', '41');
//     userUse = prompt("How much do you use every day?");
//     lifetimeCalculator(parseInt(userAge), parseInt(userUse));
//   }
// };
//
// let userAge = prompt('how old are you?', '41');
// let userUse = prompt("How much do you use every day?", '1');
//
// let usage = lifetimeCalculator(parseInt(userAge), parseInt(userUse));
//
// alert(`You will need ${usage} to last until you're 80.`);
