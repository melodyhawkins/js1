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
