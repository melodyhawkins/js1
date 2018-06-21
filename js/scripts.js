// // Day 7
// //Try it out #2
// let button = document.querySelector('button');
// let div = document.querySelector('div');
// // const body = document.querySelector('body');
//
// button.addEventListener('click', e =>{
//   e.target.textContent = "Goodbye cats!!";
// });
//
// //console.log(button.textContent);// another way to check text content.
//
// //innerHTML - use textContent instead if you have the choice
//  div.innerHTML = "<p>lorem ipsum dolores cantu!</p>";
//
// //Creating Elements
//
// //.createElement()
// // let element = document.createElement(tagName[, options]);
//
// let newH1 = document.createElement('h1');
// newH1.textContent = "Login Here!!"
// console.log(newH1);
//
// // append child - how you get JS to HTML file. Becomes the last element of our existing HTML
// // body.appendChild(newH1);
//
// //how to add before the body
// // parentelement.insertBefore(new node, reference node)
// newH1.className = "text-center";
// // body.insertBefore(newH1, div);
//
// //.id
// div.id = "red_text";
//
// //.notation - how you connect a method or a property to an object (e.g. method.object)
//
// //classList
// //is itself a method - has multiple arguments you can give it.
// //add a list of classes that are already on the element:
// newH1.classList.add("text-center");
//
// div.addEventListener('click', e =>{
//   div.classList.toggle('text-center');
//   div.classList.replace('blue-background', 'green-background')
// });
// //.toggle is very useful.
// console.log(div.classList.contains('text-center'));
//
// //.setAttribute() - can set the attribute to anything else.
//
// myImg = document.createElement('img');
// //set the src attribute:
// myImg.setAttribute('src', 'https://images.unsplash.com/photo-1506184719731-01e394588102?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6295b9fe1c5af6125d746c763368adbd&auto=format&fit=crop&w=991&q=80');
// //add the image to the page:
// div.appendChild(myImg);
// console.log(myImg)

// Fizz Buzz Test
//check the modulus to determine if it is a multiple of 3 or 5
//createElement - b/c need it to print to the page need an Element
//
let body = document.querySelector('body');

for (let i = 1; i <= 100; i++) {
  let p = document.createElement('p');
  if (i % 3 === 0 && i % 5 === 0) {
    p.textContent = 'FizzBuzz';
  }else if (i % 5 === 0) {
		p.textContent = ('Buzz');
	}else	if (i % 3 === 0) {
		p.textContent = ('Fizz');
	}else {
    p.textContent = i;
  }
  body.appendChild(p);
}
