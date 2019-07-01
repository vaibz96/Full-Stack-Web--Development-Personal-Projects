function diceGame(){
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var leftDiceNum = "./images/dice" + randomNumber1 + ".png";

  var rightDiceNum = "./images/dice" + randomNumber2 + ".png";

  document.querySelector(".img1").setAttribute('src', leftDiceNum);
  document.querySelector(".img2").setAttribute('src', rightDiceNum);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
diceGame();
