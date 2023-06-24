
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
})

$(".btn").click(function () {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

//explaination
//The code you provided appears to be a JavaScript code for a Simon game implementation using jQuery. It sets up the necessary variables and event handlers to handle user input and game logic.
/*
Here's a breakdown of what the code does:

1. It defines an array `buttonColours` with four colors: red, blue, green, and yellow.
2. It initializes empty arrays `gamePattern` and `userClickedPattern` to store the game's pattern and the user's clicked pattern, respectively.
3. It sets a variable `started` to `false` and a variable `level` to `0` to keep track of the game's state.
4. It attaches a keypress event listener to the `document`. When a key is pressed, if the game hasn't started (`!started`), it sets the level title and starts the next sequence by calling the `nextSequence()` function. It then sets `started` to `true`.
5. It attaches a click event listener to elements with the class "btn". When a button is clicked, it gets the `id` attribute of the clicked button (representing the chosen color), adds it to the `userClickedPattern` array, plays a sound associated with the color, and animates the button press. Then, it calls the `checkAnswer()` function, passing the index of the current level.
6. The `checkAnswer()` function compares the user's clicked pattern with the game's pattern at the current level. If they match and the user has completed the entire pattern, it waits for 1 second and calls `nextSequence()` to start the next level. Otherwise, if the patterns don't match, it plays a "wrong" sound, adds a "game-over" class to the body for styling, updates the level title, removes the "game-over" class after 200 milliseconds, and calls the `startOver()` function to reset the game.
7. The `nextSequence()` function prepares for the next level by resetting the user's clicked pattern, incrementing the level, updating the level title, generating a random number to select a color from the `buttonColours` array, adding the chosen color to the `gamePattern` array, fading in and out the selected color button, and playing the associated sound.
8. The `animatePress()` function adds a "pressed" class to the button to animate the button press effect. It removes the "pressed" class after 100 milliseconds using `setTimeout()`.
9. The `playSound()` function creates an `Audio` object and plays the corresponding sound file based on the provided `name` argument.
10. The `startOver()` function resets the game by setting the level to 0, clearing the game pattern, and setting `started` to `false`.

Overall, this code sets up the basic functionality of a Simon game, where the game generates a sequence of colors that the user needs to repeat by clicking the buttons in the correct order. If the user makes a mistake, the game ends, and they can restart by pressing any key.*/