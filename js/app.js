'use strict';

let Q1 = 'Is my age is 24 ? ' ;
let Q2 = 'Is my favourite color blue ? ' ;
let Q3 = 'Am I Introvert ? ' ;
let Q4 = 'So what About my favourite website? Is it Instgram ? ' ;
let Q5 = 'Finally if you can guess what my favourite food? is it Pizza ? ' ;
let Q6 = 'try to guess my favourite number'
let Q7 = "try to guess top movie"

let userName = prompt('may you tell me your name ?');
alert('welcome ' + userName + ' to my website, please click Ok to do a simple quiz') ;
alert('it is a yes or no quiz, so you have to answer with y/n or yes/no') ;

let score= 0;

let age = prompt(Q1) ;
if (age.toLocaleLowerCase() === 'y' || age.toLocaleLowerCase() === 'yes' ) {
//console.log("correct");
score = score + 1;
  alert('correct') ;
} else if (age.toLocaleLowerCase() === 'n' || age.toLocaleLowerCase() === 'no') {
  alert('False');
}
else {
  age = prompt(Q1) ;
}


let color = prompt(Q2) ;
if (color.toLocaleLowerCase() === 'n' || color.toLocaleLowerCase() === 'no' ) {
//console.log("correct");
score = score + 1;
  alert('correct') ;
} else {
  alert('False');
}
let socially = prompt(Q3) ;
if (socially.toLocaleLowerCase() === 'y' || socially.toLocaleLowerCase() === 'yes' ) {
//console.log("correct");
score = score + 1;
  alert('correct') ;
} else {
alert('False');
}
let website = prompt(Q4)
if (website.toLocaleLowerCase() === 'n' || website.toLocaleLowerCase() === 'no' ) {
//console.log("correct");
score = score + 1;
  alert('correct') ;
} else {
  alert('False');
}
let food = prompt(Q5) ;
if (food.toLocaleLowerCase() === 'n' || food.toLocaleLowerCase() === 'no' ) {
//console.log("correct");
score = score + 1;
  alert('correct') ;
} else {
  alert('False') ; 
}





let attempts=4;
let userInput=prompt(Q6);
while(attempts){
  for (let i= 0;i<4;i++){
    if (userInput === '9'){
      //console.log("correct");
      score = score + 1;
      alert('correct answer!');
      correct=true;
      break;
    }
    attempts-=1;
    userInput=prompt('please try again you have : '+attempts+' remaining!');
  }
  if (!attempts){ 
    alert ('The correct answer is 9');
}

}



let movieInput = prompt(Q7);
let movieList=['Lucy','Limitless','Soul','Upsidedown'];
let chances=6;
while(chances){
  for (let i= 0;i<6;i++){
    if (movieInput === movieList[0] || movieInput === movieList[1] || movieInput === movieList[2] || movieInput === movieList[3] ) {

      alert('correct answer!');
      //console.log("correct");
      score = score + 1;
      correct=true;
      break;
    }
    chances-=1;
    userInput=prompt('please try again you have : '+chances+' remaining!');
  }
  if (!chances){
    alert('The correct answers is one of These : ' + ' Titanic, Captin America, Thor, Interstellar');
}

}


prompt('your score is : ' + score + ' out of 7 ,' + ' hope you had fun ' );















