var randomvar1 = Math.floor(Math.random() * 6) + 1; //generate random var between 1 and 6
var randomvar2 = Math.floor(Math.random() * 6) + 1; 

var randomDiceImagePlayer1 = "./images/dice"+ randomvar1 +".png"; //images/dice1.png - images/dice6.png
var randomDiceImagePlayer2 = "./images/dice"+ randomvar2 +".png"; 

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImagePlayer1);  //changeing player 1 dice
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImagePlayer2);  //changeing player 1 dice

if (randomvar1 === randomvar2) {
    document.querySelector("h1").textContent = "Draw!";
} else if (randomvar1 > randomvar2) {
    document.querySelector("h1").textContent = "🏁 Player1 Wins!";
} else {
    document.querySelector("h1").textContent = "Player2 Wins! 🏁";
}