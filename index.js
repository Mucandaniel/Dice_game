// =============== Constructor Function ==================

function Randomizer(variation) {

  this.variation = Math.floor(Math.random() * variation) + 1;

  this.winner = function(random1, random2) {
    if (random1.variation > random2.variation) {
        document.querySelector("h1").innerHTML = "PLAYER 1 WINS 💥";

        var sound = new Audio("sounds/crash.mp3");
        sound.play();
    }
     else if (random1.variation < random2.variation) {
        document.querySelector("h1").innerHTML = "PLAYER 2 WINS ⭐️";


       var sound = new Audio("sounds/crash.mp3");
       sound.play();
    }
    else {
        document.querySelector("h1").innerHTML = "DRAW 🏳️";
    }
  }

  this.keySwitch = function(key) {

    switch (key) {

      case " ":
        var random1 = new Randomizer(6);
        random1.variation;
        var dice1_Random = document.querySelector(".dice1").setAttribute("src", "images/dice" + random1.variation + ".jpg");

        var random2 = new Randomizer(6);
        random2.variation;
        var dice2_Random = document.querySelector(".dice2").setAttribute("src", "images/dice" + random2.variation + ".jpg");

        var random = new Randomizer(6);
        var sound = new Audio("sounds/tom-" + random.variation + ".mp3");
        sound.play();

        var winner = new Randomizer(6);
        winner.winner(random1, random2);

        break;
    }
  }
}


// ===================== Event Listeners ==============================

document.querySelector("button").addEventListener("click", function() {

  var random1 = new Randomizer(6);
  random1.variation;
  var dice1_Random = document.querySelector(".dice1").setAttribute("src", "images/dice" + random1.variation + ".jpg");

  var random2 = new Randomizer(6);
  random2.variation;
  var dice2_Random = document.querySelector(".dice2").setAttribute("src", "images/dice" + random2.variation + ".jpg");

  var random = new Randomizer(6);
  var sound = new Audio("sounds/tom-" + random.variation + ".mp3");
  sound.play();

  var winner = new Randomizer(6);
  winner.winner(random1, random2);


});


document.addEventListener("keydown", function(event) {

  var pressButton = new Randomizer(6);
  pressButton.keySwitch(event.key);

});
