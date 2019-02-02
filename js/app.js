'use strict'
var correctGuess = 0
//Q1 Coding
var userName= prompt("Before we get started, what is your name?");
console.log(userName);
  alert("Alright " + userName + " my name is Austin, let's have a little Q&A");

prompt("Make sure to answer all questions with a yes or no");

var enjoy = prompt("Do I enjoy coding?");
console.log(enjoy);

if (enjoy.toLowerCase() == "yes") {
  alert("Exactly! It's a wonderful challenge!");
  correctGuess++
  console.log("Correct Guesses= " + correctGuess);
}
else {
  alert("Nope, I really do enjoy it. What a challenge!")
}

//Q2 Money
var money = prompt("Okay so review, am I going into the coding field for the money?");
console.log(money);

if (money.toLowerCase() === "no") {
  alert("Trick question, I'm also doing it for the money \:P");
}
else {
  alert("Yeah, you got me. I'm in it for the money too.");
  correctGuess++
  console.log("Correct Guesses= " + correctGuess);
}

//Q3 Animals
var animals = prompt("Do I prefer cats or dogs?");
console.log(animals);

if (animals.toLowerCase() === "dogs") {
  alert("Yeah, thats right but I was supposed to prompt you with a yes or no question. Let's try again.");
  correctGuess++
  console.log("Correct Guesses= " + correctGuess);
}

if (animals.toLowerCase() === "cats") {
  alert("No, I prefer dogs. but I was supposed to ask a yes or no question so let's try again");
}

//Q4 Animals pt2
var dogs = prompt("Do I like dogs?");
console.log(dogs);

if (dogs.toLowerCase() === "yes") {
  alert("Thats right! Great guess!");
  correctGuess++
  console.log("Correct Guesses= " + correctGuess);
}
else {
  alert("Okay, I definitely  prefer dogs because they're the best.");
}

//Q5 Video Games
var games = prompt("Do I play video games?");
console.log(games);

if (games.toLowerCase() === "yes") {
  alert("Yep! I love playing on my Xbox and laptop. I'm especially into Dead By Daylight right now.");
  correctGuess++
  console.log("Correct Guesses= " + correctGuess);
}
else {
  alert("I do! I've been playing for years!");
}

//Q6 Fav food
var food = prompt("Is my favorite food carrots?");
console.log(food);

if (food.toLowerCase() === "yes") {
  alert("Nope, It's pretty basic of me but I love pizza. :)");
}
else {
  alert("That's right! It's actually pizza because I'm basic like that.");
  correctGuess++
  console.log("Correct Guesses= " + correctGuess);
}

var age = prompt("how old am I?");
console.log(age);

//Q7 How many dogs have I owned?

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
  }   
  if(badGuess === "3"){
    var dogGuess = "30"
    alert("Okay, so the answer was 30. Yes I've had a lot of dogs.");
  }
  badGuess++
}


//Results prompts
if(correctGuess === 0){
  alert(userName + " have we even met? You got " + correctGuess + "of the questions right.");
}

if(correctGuess < 3 && correctGuess > 0){
  alert("Okay " + userName + " so we've probably met, you got " + correctGuess + "right. But I bet you can do better next time")
}

if(correctGuess < 6 && correctGuess >= 3){
  alert("Nice " + userName + "! I guess you know me pretty well. You got " + correctGuess + " right!")
}

if(correctGuess === 6){
  alert("Wow" + userName + ", I can't believe you got them all right! Besties?")
}
console.log("Correct Guesses= " + correctGuess);