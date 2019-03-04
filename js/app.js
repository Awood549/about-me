'use strict';

var correctGuess = 0
//Q1 Coding
var userName = prompt('Before we get started, what is your name?');
console.log(userName);
alert('Alright ' + userName + ' my name is Austin, lets have a little Q&A');

alert('Make sure to answer all questions with a yes or no');

function coding() {
  var enjoy = prompt('Do I enjoy coding?');
  console.log(enjoy);

  if (enjoy.toLowerCase() === 'yes') {
    alert('Exactly! Its a wonderful challenge!');
    correctGuess++;
    console.log('Correct Guesses = ' + correctGuess);
  }
  else {
    alert('Nope, I really do enjoy it. What a challenge!');
  }
};
coding();

//Q2 Money
function money() {
  var money = prompt('Okay so review, am I going into the coding field for the money?');
  console.log(money);

  if (money.toLowerCase() === 'no') {
    alert('Trick question, I am also doing it for the money \:P');
  }
  else {
    alert('Yeah, you got me. Im in it for the money too.');
    correctGuess++;
    console.log('Correct Guesses= ' + correctGuess);
  }
};
money();

//Q3 Animals
function animal() {
  var animals = prompt('Do I prefer cats or dogs?');
  console.log(animals);

  if (animals.toLowerCase() === 'dogs') {
    alert('Yeah, thats right but I was supposed to prompt you with a yes or no question. Lets try again.');
    correctGuess++;
  }
  else if (animals.toLowerCase() === 'cats') {
    alert('No, I prefer dogs. but I was supposed to ask a yes or no question so lets try again');
  }
}
animal();

//Q4 Animals pt2
function dog() {
  var dogs = prompt('Do I like dogs?');
  console.log(dogs);

  if (dogs.toLowerCase() === 'yes') {
    alert('Thats right! Great guess!');
    correctGuess++;
    console.log('Correct Guesses= ' + correctGuess);
  }
  else {
    alert('Okay, I definitely  prefer dogs because they are the best.');
  }
}
dog();

//Q5 Video Games
function videogames() {
  var games = prompt('Do I play video games?');
  console.log(games);

  if (games.toLowerCase() === 'yes') {
    alert('Yep! I love playing on my Xbox and laptop. Im especially into Dead By Daylight right now.');
    correctGuess++;
    console.log('Correct Guesses= ' + correctGuess);
  }
  else {
    alert('I do! I\'ve been playing for years!');
  }
}
videogames();

//Q6 Fav food
function food() {
  var food = prompt('Is my favorite food carrots?');
  console.log(food);

  if (food.toLowerCase() === 'yes') {
    alert('Nope, It\'s pretty basic of me but I love pizza. : )');
  }
  else {
    alert('That\'s right! It\'s actually pizza because I\'m basic like that.');
    correctGuess++;
    console.log('Correct Guesses= ' + correctGuess);
  }
}
food();

//Q7 How many dogs have I owned?

function dogsOwned() {
  var badGuess = 0

  while (badGuess < 3) {
    var dogGuess = prompt('How many dogs do you think I\'ve owned ? ');

    if (dogGuess == 30) {
      alert('Yep! I\'ve owned at least 30 dogs');
      break;
    }

    if (dogGuess > 30) {
      alert('Nope! Too high.');
      badGuess++;
    }
    if (dogGuess <= 15) {
      alert('Woah! way too low');
      badGuess++;
    }
    if (dogGuess < 30 && dogGuess > 15 && badGuess === 0) {
      alert('Too low! Try again.');
      badGuess++;
    };
    if (badGuess > 2) {
      alert('Okay, so the answer was 30. Yes I\'ve had a lot of dogs.');
      break;
    }
  }
}
dogsOwned();

//Q8 Places Lived

function placesLived() {
  var places = ['greenwood', 'shoreline', 'mountlake terrace', 'mount lake', 'mount lake terrace'];
  console.log(places);

  var guess = 0
  while (guess < 6) {
    var where = prompt('Where in the greater seattle area have I lived');
    where = where.toLowerCase();
    if (places.includes(where)) {
      guess = 6;
      alert('Yep! I\'ve lived there!');
      correctGuess++;
      break;
    }
    else {
      alert('Nope, ' + userName + ' I haven\'t lived there.');
      guess++;
    }
  }
}
placesLived();


//Results prompts
if (correctGuess === 0) {
  alert(userName + ' have we even met? You got ' + correctGuess + ' of the questions right.');
}

if (correctGuess < 3 && correctGuess > 0) {
  alert('Okay ' + userName + ' so we\'ve probably met, you got ' + correctGuess + ' right.But I bet you can do better next time');
}

if (correctGuess < 6 && correctGuess >= 3) {
  alert('Nice ' + userName + '! I guess you know me pretty well. You got ' + correctGuess + ' right!');
}

if (correctGuess === 6) {
  alert('Wow ' + userName + ', I can\'t believe you got them all right! Besties ? ');
}
console.log('Correct Guesses= ' + correctGuess);