//takehome-day5
/*
On your takehome-day5 branch write a program that uses functions to:

1.Take a number and return the square of that number (power of 2).
2.If a non-number argument is passed into the function, alert NaN and prompt for another response
3.In a second function, capitalize the first letter of a string and add a period (.) to the end of the string if it doesn't already end with a period
4.Create a string that will flip the position of the first and second half of a string. For example, the string “abcdef” would be returned as “defabc”. Hint: use substring.
BONUS: If you are bored by all that, write a function that checks if a given string is a palindrome.
*/
//Part 1 & 2  - number is the placeholder/argument
function powerOfTwo(number) {
  if(!isNaN(number)){ //check if not a number
    return number * number;
  } else {
    let answer = powerOfTwo(parseInt(prompt("That wasn't a number!", "What number?", '2')));
    alert(answer);
  }
};

let answer = powerOfTwo(parseInt(prompt("what do you want to square?", '2'))); //calling the function powerOfTwo; to guarantee you get a number wrap in parseInt
alert(answer);

//Part 3 - charat: way to grab an individual character in an index
//Function Definition
 function parseString(string) {
   let parsedLetter = string.charAt(0).toUpperCase();
   let stringArr = string.split('') //change a string into an array
   stringArr.splice(0, 1, parsedLetter);
   string = stringArr.join(''); //join takes an array and combines it back into a string - replaces the first letter with the new uppercase one.
   if(string.charAt(string.length - 1) !== '.') string = string + '.'; // if(string.charAt(string.length - 1) give me the character that is at the last index of this string.
   return string;
 }
//Function call
/*
let answer2 = parseString(prompt("Type something in.", "i Heart cheese."));
alert(answer2);
*/

//Part 4

function reverseHalves(string) {
  let halfIndex = string.length /2;
  let firstHalf = string.substring(0, halfIndex);
  let secondHalf = string.substring(halfIndex, string.length - 1);
  alert(`${secondHalf}${firstHalf}`);

}
//reverseHalves(prompt("give me a sentence", "hello world!"));

//Part 5
function isPalindrome(string) {
  let reversed = string.split('').reverse().join('')
//chain the method = immediately call after another method, feed the result into the next method. Turn into an array using split. Reverse only works on arrays. Join only works on arrays - revere takes array and returns it flip backwards. Need to know what they consume and what they return.
/*
.split('') // returns an array
.reverse() // only works on an array
.join('') //only works on an array

  return string === reversed ? true : false;
}
=======
// Day 5 -Functions
// So far we have written code in the global scope, for the most part, functions allow you to take a piece of code that you can pass around. Place in {} - it is an entire block of code that you can execute on any type of data that you want. Take a piece of code, set it aside and call it as many times as you want.
// Rules: They can (optional) take in data (input); they can (optional) feed data back to you (output); console.log is a function. One of the hallmarks of a function is parentheses.
// Examples:
// console.log("Hello World!");
// array.pop(); //- function takes in zero arguments and return value is the member of the array value you removed.
// before you start your final project you should data frame your project. what methods, how to use them, when called, when user going to get involved, etc. Always have a plan.
// Anonymous and Name functions
// functions are what lets you make your code dynamic
// functions are a JS keyword - b/c expects a certain thing to be true when it sees function.
// Example, we want to take a string and capitalize the first letter in each word of the string:
// function capitalCase(string) { //function definition. //the arguments located in the () in a function defintion have no value until you call the function.
  // return string.toUpperCase(); //nothing has been called yet. reutrn value of capitalCase
// };
// function capitalCase(string) {
//    let words = string.split(' '); //split lets you take any character and split it into separate arrays.
//    words.forEach(word => {
//       let letters = word.split('');
//       let capped = letters[0].toUpperCase() //word is the indivdual loop we are on in our forEach loop; we can use indexOf
//       letters.splice(0, 1, capped);
//    });
//    return words.join(' '); //join that array back together by a space - join takes an array and puts it back into a string.
// };

// let newString = capitalCase("peter piper"); //function call - this is where (string) gets defined.
// console.log(newString);

// function(stuff) { //Anonymous function -  most likely part of a call-back or part of something else. Does not have a name, still follows all the rules.
  // console.log(stuff)
// };

// function expression takes an Anonymous expression and assigns it to a variable. hoisting only works with function declarations NOT function expressions.

// let capsName = capitalCase('captain america');

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

function lifetimeCalculator(age, dailyUse) {
  if(!isNaN(age) && !isNaN(dailyUse)) {  //is age a number
    const death = 80;
    return (death - age) * (dailyUse * 365);
  } else { //if you get anything other than numbers, call the function at lines 93 & 94
    userAge = prompt('how old are you?', '41');
    userUse = prompt("How much do you use every day?");
    lifetimeCalculator(parseInt(userAge), parseInt(userUse)); // recalling the same function. A function can be passed to another function and can be referenced inside of itself.
  }
}; //the above is the function declaration. we have not called the lifetime calculator. because we need a function call on line 102.

let userAge = prompt('how old are you?', '41');
let userUse = prompt("How much do you use every day?", '1');

let usage = lifetimeCalculator(parseInt(userAge), parseInt(userUse)); //answers from prompts at lines 99 & 100

alert(`You will need ${usage} to last until you're 80.`);

// TAKEHOME - DAY4
// On a takehome-day4 branch of your JS repository, write a program that:
//
// Creates an array of things you need or want to do this weekend by collecting three todos from the user.
// Using a for loop, change the items in the array by adding days they should be completed by to each index.
// Hint: which data type is best suited for your todo items?
// Using a while loop, find the task that will take the longest and log it to the console.
// Using a do while loop, add the string 'done' to all the tasks other than the one that will take the longest
// Finally, alert all the tasks that are marked done in the todo array.

// let wknd1 = prompt("What do you want to do this weekend?", "go to the lake");
// let wknd2 = prompt("what do you want to do this weekend?", "organize my closet");
// let wknd3 = prompt("what do you want to do this weekend?", "have a pool party");
//
// let toDo1 = ["go to the lake"];
// let toDo2 = ["organize my closet"];
// let toDo3 = ["have a pool party"];
//
// // let toDos = [];
// // toDos.push(toDo1, toDo2, toDo3);
//
// let days = ["5", "6", "7"];
// let toDos = [[toDo2, days[0], [toDo1, days[1], [toDo3, days[2]]]]];
//
// for (let i = 0; i < toDos.length; i++){
//   toDos[i] = [[toDo2, +' '+ days[0]], [toDo1, + ' '+ days[1]],  [toDo3, +' '+ days[2]]];
//   console.log (toDos[i]);
// }
//
// let i = 0;
//   while (i < toDos.length) {.
//   console.log(toDos[i]);
//   i++;
// }
//  console.log(i);
//
// let newString = ["Done"];
// do {
//   if(i === 0) toDos[i].push(newString);
//   i++;
// }while(i < toDos.length);
// console.log(toDos);

// data modeling - look at the problem and figure out in your head how you are going to solve that problem.

// RYEKER'S VERSION
// 1. (1) make an array; (2) gather them from the user; (3) make the requests specific from the userAge
// 2. (1)use the date object to find out the date wanted done by or (2) the number of days to do it - easier
// 3.
// 4.
// 5.
let todos = [];
let todo1 = [prompt("what do you want to do first?", "Eat")];
let todo2 = [prompt("what do you want to do second?", "Eat")];
let todo3 = [prompt("what do you want to do third?", "Eat")];
// why make each an array? because easier to attach to them.
// take your todos array and put together:
todos.push(todo1, todo2, todo3);

// Step 2
for(let i=0; i<todos.length; i++) {
  let timeline = prompt(`How many days will it take to get ${todos[i][0]} done?`, "2");

  timeline = !isNaN(parseInt(timeline)) ?   //ternaries - changing the value of what timeline was before. Will either be true or false.
  parseInt(timeline) : 2; //if false force it to be 2.

  todos[i].unshift(timeline); // use unshift to force
  }

  // console.log(todos, 'after adding time it will take');

  todos.sort();
  console.log(todos, "after sort");

  // step 3
  let longest = todos[0];
  let j = 0;
  while(j < todos.length) {
    console.log(todos[j][0])
    if(todos[j][0] > longest[0]) longest = todos[j];
    //valid inline statement
    // longest = todos[j][0] > longest[0] ? longest =
    // todos[j] : longest = longest; //ternary version
    // console.log(todos[j][1]);
    j++
  }
  console.log(longest);
//Step 4
  longest.push('this'); // this is just a placeholder
let z = 0;
do {
  if(todos[z][todos[z].length-1] !=="this") { // if the last member of the array is not "this"/the longest then "done" will be added.
    todos[z].push("done");
  }
  z++
}while(z < todos.length)

let doneItems = [];
todos.forEach(todo => {
    if(todo[todo.length - 1] === 'done')
    doneItems.push(todo);
  }
);

alert(doneItems);

//Day 5 Continued
//METHOD vs. FUNCTION
// NOT ALL FUNCTIONS ARE METHODS BUT ALL METHODS ARE FUNCTIONS
// There is a basic, but important difference
//
// A function is a piece of code that is called by name. It can be passed data to operate on (i.e. the parameters) and can optionally return data (the return value). All data that is passed to a function is explicitly passed.
// A method is a piece of code that is called by a name that is associated with an object. In most respects it is identical to a function except for two key differences:
// A method is implicitly passed the object on which it was called.
// A method is able to operate on data that is contained within the class (remembering that an object is an instance of a class - the class is the definition, the object is an instance of that data).
// We will cover this more in-depth in a future class, but for now, remember the difference.

// console is always attached to log; - console is an object - log is a function;
  // log(console,""); //same as console.log("");
// array is always attached to forEach - array is an object - forEach is a function;
  // forEach is implicity consuming the array it is attached to
  ["hello", "world"].forEach(arr =>{
    console.log(arr);
// break it down:
    // function forEach(arr, fn) {
    //   for(let i = 0; i < arr.length; i++){
    //     fn(arr[i]);
    // }
  // }
// string is always attached to toUpperCase - string is an object - toUpperCase is a function;
function toUpperCase(string {
  //return the uppercase of string
})

let myUpperCasedString = toUpperCase("hello world");

// always going to be attached to something with a period.
// method is always going to be attached to an object with a period and always have parentheses = obj.method()

