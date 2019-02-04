'use strict'
var correctGuess = 0
//Q1 Coding
var userName= prompt("Before we get started, what is your name?");
console.log(userName);
  alert("Alright " + userName + " my name is Austin, let's have a little Q&A");

alert("Make sure to answer all questions with a yes or no");

function coding() {var enjoy = prompt("Do I enjoy coding?");
console.log(enjoy);

if (enjoy.toLowerCase() == "yes") {
  alert("Exactly! It's a wonderful challenge!");
  correctGuess++
  console.log("Correct Guesses= " + correctGuess);
}
else {
  alert("Nope, I really do enjoy it. What a challenge!")
}
}
coding();

//Q2 Money
function money() {var money = prompt("Okay so review, am I going into the coding field for the money?");
console.log(money);

if (money.toLowerCase() === "no") {
  alert("Trick question, I'm also doing it for the money \:P");
}
else {
  alert("Yeah, you got me. I'm in it for the money too.");
  correctGuess++
  console.log("Correct Guesses= " + correctGuess);
}
}
money();

//Q3 Animals
function animals () {var animals = prompt("Do I prefer cats or dogs?");
console.log(animals);

if (animals.toLowerCase() === "dogs") {
  alert("Yeah, thats right but I was supposed to prompt you with a yes or no question. Let's try again.");
  correctGuess++
  console.log("Correct Guesses= " + correctGuess);
}

if (animals.toLowerCase() === "cats") {
  alert("No, I prefer dogs. but I was supposed to ask a yes or no question so let's try again");
}
}
animals();

//Q4 Animals pt2
function dog() {var dogs = prompt("Do I like dogs?");
console.log(dogs);

if (dogs.toLowerCase() === "yes") {
  alert("Thats right! Great guess!");
  correctGuess++
  console.log("Correct Guesses= " + correctGuess);
}
else {
  alert("Okay, I definitely  prefer dogs because they're the best.");
}
}
dog();

//Q5 Video Games
function videogames(){var games = prompt("Do I play video games?");
console.log(games);

if (games.toLowerCase() === "yes") {
  alert("Yep! I love playing on my Xbox and laptop. I'm especially into Dead By Daylight right now.");
  correctGuess++
  console.log("Correct Guesses= " + correctGuess);
}
else {
  alert("I do! I've been playing for years!");
}
}
videogames();

//Q6 Fav food
function food() {var food = prompt("Is my favorite food carrots?");
console.log(food);

if (food.toLowerCase() === "yes") {
  alert("Nope, It's pretty basic of me but I love pizza. :)");
}
  else {
  alert("That's right! It's actually pizza because I'm basic like that.");
  correctGuess++
  console.log("Correct Guesses= " + correctGuess);
}
}
food();

//Q7 How many dogs have I owned?

<<<<<<< HEAD
function dogsOwned() {
  var badGuess = 0

  while(dogGuess !== "30"){
    if(dogGuess !== "30"){
    var dogGuess = prompt("How many dogs do you think I've owned?");
    }
    if(dogGuess > "30"){
      alert("Nope! Too high.");
    }
    if(dogGuess <= '15'){
      alert("Woah! way too low");
    }
    if(dogGuess < "30" && dogGuess > "15" && badGuess === "0"){
      alert("Too low! Try again.");
    }
    if(dogGuess <"30" && dogGuess > "15" && badGuess >"0"){
      alert("Nope, still too low.");
    }
    if(dogGuess === "30"){
      alert("Yep! I've owned at least 30 dogs");
      correctGuess++;
    }   
    if(badGuess === "3"){
      var dogGuess = "30"
      alert("Okay, so the answer was 30. Yes I've had a lot of dogs.");
    }
    badGuess++;
  }
}
dogsOwned();

//Q8 Places Lived

function placesLived(){var places = ["greenwood", "shoreline", "mountlake terrece", "mount lake", "mount lake terrece"];
console.log(places);

var guess = 0
while(guess < 6){
  var where = prompt("Where in the greater seattle area have I lived");
  where = where.toLowerCase();
  if(places.includes(where)){
    guess = 6
    alert("Yep! I've lived there!");
    correctGuess++;
    break;
=======
function dogsOwned() {var badGuess = 0

while(dogGuess !== "30"){
  if(dogGuess !== "30"){
  var dogGuess = prompt("How many dogs do you think I've owned?");
  }
  else if(dogGuess > "30"){
    alert("Nope! Too high.");
  }
  else if(dogGuess <= '15'){
    alert("Woah! way too low");
  }
  else if(dogGuess < "30" && dogGuess > "15" && badGuess === "0"){
    alert("Too low! Try again.");
  }
  else if(dogGuess <"30" && dogGuess > "15" && badGuess >"0"){
    alert("Nope, still too low.");
  }
  else if(dogGuess === "30"){
    alert("Yep! I've owned at least 30 dogs");
  }   
  else(badGuess === "3"); {
    var dogGuess = "30"
    alert("Okay, so the answer was 30. Yes I've had a lot of dogs.");
>>>>>>> 96517fcf89bedf71f3d98baf7bb626147424125a
  }
    else{
      alert("Nope, " + userName + " I haven't lived there.");
      guess++;
    }
}
}
<<<<<<< HEAD
placesLived();
=======
}
dogsOwned();
>>>>>>> 96517fcf89bedf71f3d98baf7bb626147424125a


//Results prompts
if(correctGuess === 0){
  alert(userName + " have we even met? You got " + correctGuess + " of the questions right.");
}

if(correctGuess < 3 && correctGuess > 0){
  alert("Okay " + userName + " so we've probably met, you got " + correctGuess + " right. But I bet you can do better next time")
}

if(correctGuess < 6 && correctGuess >= 3){
  alert("Nice " + userName + "! I guess you know me pretty well. You got " + correctGuess + " right!")
}

if(correctGuess === 6){
  alert("Wow " + userName + ", I can't believe you got them all right! Besties?")
}
console.log("Correct Guesses= " + correctGuess);