//Older Methods
let body = document.getElementsByTagName('body'); // give back an array
console.log(body[0]);

let classes = document.getElementsByClassName("my-header"); // give back an array
console.log(classes[0]);

let id = document.getElementById("my-paragraph");
console.log(id);

//Newer Methods
//querySelector - will only ever return you an array with one element
let tag = document.querySelector('body')
console.log(tag);

// let myClass = document.querySelector('.my-header');
// console.log(myClass);

let myId = document.querySelector('#my-paragraph');
console.log(myId);

//querySelectorAll - will give you and array with all of the elements that match the query you are selecting

let tags = document.querySelectorAll('body');
console.log(tags);

//Try It Out #1

function queryDom(methodName, element){
  switch(methodName.toLowerCase){
    case 'getelementsbytagname':
      document.getElementsByTagName(element);
      break;
    case 'queryselector':
      document.querySelector(`.${element}`);
      break;
    default:
      break;
  }
}

//EVENT LISTENER
/*
When a user clicks on something, JavaScript will automatically run a function for us.
The first thing you need is a DOM node for the user to listen to.
*/
// let myClass = document.querySelector('.my-header');
// // myClass.addEventListener(
//   'click', //first argument = a string
//   e => { //second argument = a call back function (fat arrow function) - called a callback function is b/c most programming languages are asynchronous languages - possiblity of executing out of order. e is a placeholder. e stands for "event". it represents the event you just did, the "click".
//     console.log(e.target, 'this is the event');
//     alert('you clicked on me!!!');
// });
// console.log('heelo world');

//Day 6 continued
//Keyboard events - used with forms
//Try it out #1
let myButton = document.querySelector('button');
let div = document.querySelector('div');
let h1 = document.querySelector ('h1');

myButton.addEventListener('click', e=> {
     alert('you clicked on me!!!');
   });

div.addEventListener('mouseenter', e=>{
  e.target.style.backgroundColor = "#e40007"
  console.log(e)
});

h1.addEventListener('mouseleave', e=>{
  e.target.style.color = "#00ffff"

});
