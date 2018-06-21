let passwordInput = document.forms.login.password;
console.log();
let emailInput = document.forms.login.email;
let myPTag = document.querySelector("#data_binding");
let submit = document.forms.login.submitBtn;

emailInput.addEventListener("keyup", e =>{
  myPTag.textContent = e.target.value;
});

submit.addEventListener("click", e => {
  if(passwordInput.value === "" || emailInput.value === ""){
    e.preventDefault();
  }
})

let user = {
  name: "Caliah",
  password: 12345,
  status: "active"
};

let guest = {
  name: "Guest",
  password: undefined,
  status: "inactive"
}

let newScope = {
  name: "Peter Piper",
  password: "bag o peppers",
  instrument: "Pipes",
  myFunction: logMyName
}

newScope.myFunction("Fly away");//IMPLICIT, only works when your custom function attaches to the scope using a keyword (any keyword works)...more functional approach than explicit because you are not forcing the change...use explicit when need to change something really quickly and/or once

// function logMyName () { //definition
//   console.log(this.name, this.password);
// }
function logMyName (greeting, ado) { //definition
  console.log(this.name, this.password);
  alert(`${greeting}, ${this.name}!`);
}

logMyName.call(user, "Hello", "Deuces"); //call site (global scope)
logMyName.call(guest, "Sign up", "Come back again"); //call used for singular arguements

// logMyName.apply(user, ["Hello", "Deuces"]); //apply used for arrays

//this equals Window unless you change this or use fat arrows.. You can change "this" by using call or apply.. the first argument always replaces this

// let classScore = 90;
//
// const scopeOne = {
//   classScore: 75,
//   scopeTwo: {
//     classScore: 50
//   }
// };
//
// console.log(classScore);
// console.log(scopeOne.classScore);
// console.log(scopeOne.scopeTwo.classScore);

let classScore = 90; //different way of doing example above

{
  let classScore = 75;
  console.log(classScore, "first scope");
  {
    let classScore = 50;
    console.log(classScore, "second scope");
  }
};

console.log(classScore, "global scope");
