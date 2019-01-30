'use strict'

var enjoy = prompt("Do I enjoy coding?");
console.log(enjoy);


if (enjoy.toLowerCase() === "yes"){
  alert("Exactly! It's a wonderful challenge!");
}
  else{
    alert("Okay, good guess but I really do. I even started taking courses to learn it..."); 
}

var money = prompt("Okay so review, am I going into the coding field for the money?");
console.log(money);

if(money.toLowerCase() === "no"){
  alert("Trick question, I'm also doing it for the money \:P");
}

if(money.toLowerCase() === "yes"){
  alert("Yeah, you got me. I'm in it for the money too.");
}
