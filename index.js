 var randomNumber1 = Math.floor((Math.random() * 6) + 1);
 var xyz = "dice" + randomNumber1 + ".png";
var yyz = "images/" + xyz;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", yyz);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var yz = "dice" + randomNumber2 + ".png";
var z = "images/" + yz;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", z);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins🍷"
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins🏆"
}
else {
    document.querySelector("h1").innerHTML = "Draw draw✌🏆"
}
