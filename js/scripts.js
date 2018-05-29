

// Takehome Day3
// Prompts your user for their name.
// Next, ask the user's favorite color. (Provide the user with the basic 10 colors as options i.e. red, orange, yellow, green, blue, pink, purple, black, white, and grey).
// Depending on the color, write 9 different responses for the possible answers. Include the user's name in the response message.
let firstName = prompt("What is your first name?", "Ryeker");
let favoriteColor = prompt("What is your favorite color from the following list?", "red,"+ ' ' + "orange," + ' ' + "yellow,"+' ' + "green,"+ ' ' + "blue,"+ ' ' + "pink,"+ ' ' + "purple,"+ ' ' + "black,"+ ' ' + "white,"+ ' ' + "grey");
switch (favoriteColor) {
  case 'white':
    alert('Ryeker, your choice is very bright.');
    break;
  case 'black':
    alert('Ryeker, your choice is very bold.');
    break;
  case 'grey':
    alert('Ryeker, your choice is very bland.');
    break;
  case 'pink':
    alert('Ryeker, you have excellent taste in colors!');
    break;
  case 'red':
    alert('Ryeker, you must like strawberries.');
    break;
  case 'orange':
    alert('Ryeker, you must like halos.');
    break;
  case 'yellow':
    alert('Ryeker, you must like bananas.');
    break;
  case 'purple':
    alert('Ryeker, you must like grapes.');
    break;
  case 'green':
    alert('Ryeker, you must like trees.')
    break;
  case 'blue':
    alert('Ryeker, you must like the sea.')
    break;
  default:

}
