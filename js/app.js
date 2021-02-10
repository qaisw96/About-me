'use strict';

let Q1 = 'Is my age is 24 ? ' ;
let Q2 = 'Is my favourite color blue ? ' ;
let Q3 = 'Am I Introvert ? ' ;
let Q4 = 'So what About my favourite website? Is it Instgram ? ' ;
let Q5 = 'Finally if you can guess what my favourite food? is it Pizza ? ' ;
let Q6 = 'try to guess my favourite number' ;
let Q7 = 'try to guess one of my top movies, To be more specific; i love Sci-Fi Movies ' ;
let userName = prompt('may you tell me your name ?');
alert('welcome ' + userName + ' to my website, please click Ok to do a simple quiz') ;
alert('The first five questions is a yes or no question, so you have to answer with y/n or yes/no') ;
let age = prompt(Q1) ;
let score= 0;
questOne();
function questOne() {
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
}
let color = prompt(Q2) ;
questTwo();
function questTwo() {
  if (color.toLocaleLowerCase() === 'n' || color.toLocaleLowerCase() === 'no' ) {
    //console.log("correct");
    score = score + 1;
    alert('correct') ;
  } else {
    alert('False');
  }
}
let socially = prompt(Q3) ;
questThree();
function questThree() {
  if (socially.toLocaleLowerCase() === 'y' || socially.toLocaleLowerCase() === 'yes' ) {
    //console.log("correct");
    score = score + 1;
    alert('correct') ;
  } else {
    alert('False');
  }
}
let website = prompt(Q4);
questFour();
function questFour() {
  if (website.toLocaleLowerCase() === 'n' || website.toLocaleLowerCase() === 'no' ) {
    //console.log("correct");
    score = score + 1;
    alert('correct') ;
  } else {
    alert('False');
  }
}
let food = prompt(Q5) ;
questFive();
function questFive() {
  if (food.toLocaleLowerCase() === 'n' || food.toLocaleLowerCase() === 'no' ) {
    //console.log("correct");
    score = score + 1;
    alert('correct') ;
  } else {
    alert('False') ;
  }
}
let attempts=4;
let userInput=prompt(Q6);
questSix();
function questSix() {
  myloop: while(attempts){
    for (let i= 0;i<4;i++){
      attempts-=1;
      if (userInput === '9'){
      //console.log("correct");
        score = score + 1;
        alert('correct answer!');
        break myloop;
      }
      userInput=prompt('please try again you have : '+attempts+' remaining!');
    }
    if (!attempts){
      alert ('The correct answer is 9');
    }

  }
}
let movieInput = prompt(Q7);
let movieList=['lucy','limitless','soul','upsidedown'];
let chances=6;
questSeven();
function questSeven() {
  mygame: while(chances){
    for (let i= 0;i<6;i++){
      chances-=1;
      if (movieInput.toLowerCase() === movieList[0] || movieInput.toLowerCase() === movieList[1]|| movieInput.toLowerCase() === movieList[2]||movieInput.toLowerCase() === movieList[3]) {

        alert('correct answer!');
        //console.log("correct");
        score = score + 1;
        break mygame;
      }else{
        movieInput=prompt('please try again you have : '+chances+' remaining!');
      }
    }
    if (!chances){
      alert('The correct answers is one of These : ' + ' Lucy, Upsidedown, Soul, Limitless');
    }
  }
}
prompt('your score is : ' + score + ' out of 7 ,' + ' hope you had fun ' );















