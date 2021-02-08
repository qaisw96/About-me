'use strict';

let Q1 = 'Is my age is 24 ? ' ;
let Q2 = 'Is my favourite color blue ? ' ;
let Q3 = 'Am I Introvert ? ' ;
let Q4 = 'So what About my favourite website? Is it Instgram ? ' ;
let Q5 = 'Finally if you can guess what my favourite food? is it Pizza ? ' ;


let userName = prompt('may you tell me your name ?');
alert('welcome ' + userName + ' to my website, please click Ok to do a simple quiz') ;
alert('it is a yes or no quiz, so you have to answer with y/n or yes/no') ;


let age = prompt(Q1) ;
if (age.toLocaleLowerCase() === 'y' || age.toLocaleLowerCase() === 'yes'  ) {
//console.log("correct");
  alert('correct') ;
} else {
  alert('False');
}
let color = prompt(Q2) ;
if (color.toLocaleLowerCase() === 'n' || color.toLocaleLowerCase() === 'no' ) {
//console.log("correct");
  alert('correct') ;
} else {
  alert('False');
}
let socially = prompt(Q3) ;
if (socially.toLocaleLowerCase() === 'y' || socially.toLocaleLowerCase() === 'yes'  ) {
//console.log("correct");
  alert('correct') ;
} else {
alert('False');
}
let website = prompt(Q4)
if (website.toLocaleLowerCase() === 'n' || website.toLocaleLowerCase() === 'no' ) {
//console.log("correct");
  alert('correct') ;
} else {
  alert('False');
}
let food = prompt(Q5) ;
if (food.toLocaleLowerCase() === 'n' || food.toLocaleLowerCase() === 'no' ) {
//console.log("correct");
  alert('correct') ;
} else {
  alert('False');
}

alert (userName + ', I hope have a fun in my website, you can read more about me if you want by click Ok ');

