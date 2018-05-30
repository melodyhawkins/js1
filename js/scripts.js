

// Takehome Day3
// Prompts your user for their name.
// Next, ask the user's favorite color. (Provide the user with the basic 10 colors as options i.e. red, orange, yellow, green, blue, pink, purple, black, white, and grey).
// Depending on the color, write 9 different responses for the possible answers. Include the user's name in the response message.
let firstName = prompt("What is your first name?");
let favoriteColor = prompt("What is your favorite color from the following list?", "red,"+ ' ' + "orange," + ' ' + "yellow,"+' ' + "green,"+ ' ' + "blue,"+ ' ' + "pink,"+ ' ' + "purple,"+ ' ' + "black,"+ ' ' + "white,"+ ' ' + "grey");
switch (favoriteColor) {
  case 'white':
    alert(firstName + ' '+ 'your choice is very bright.');
    break;
  case 'black':
    alert(firstName + ' '+ 'your choice is very bold.');
    break;
  case 'grey':
    alert(firstName + ' '+ 'your choice is very bland.');
    break;
  case 'pink':
    alert(firstName + ' '+ 'you have excellent taste in colors!');
    break;
  case 'red':
    alert(firstName + ' '+ 'you must like strawberries.');
    break;
  case 'orange':
    alert(firstName + ' '+ 'you must like halos.');
    break;
  case 'yellow':
    alert(firstName + ' '+ 'you must like bananas.');
    break;
  case 'purple':
    alert(firstName + ' '+ 'you must like grapes.');
    break;
  case 'green':
    alert(firstName + ' '+ 'you must like trees.');
    break;
  case 'blue':
    alert(firstName + ' '+ 'you must like the sea.');
    break;
  case '':
      alert(firstName + ' '+ 'please pick a color.');
      break;
  default:

}
