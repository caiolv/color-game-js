var numSquares = 6;


var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector("h1");
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');


init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

      reset();
    });
  }
}

function setupSquares(){
  for (var i = 0; i < squares.length; i++) {
    //add click listener
    squares[i].addEventListener("click", function() {
      //grab colors
      var clickedColor = this.style.background;

      //compare colors
      if(clickedColor === pickedColor)
      {
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
        resetButton.textContent = "Play Again?";
      }
      else {
        this.style.background = "#232323";
          messageDisplay.textContent = "Try again";
      }
    });
  }
}

function reset(){
  //update array of colors and squares
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();

  //update contents
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New colors"
  messageDisplay.textContent = "";

  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }

  h1.style.background = "steelblue";

}

resetButton.addEventListener('click', reset);



function changeColors(color){
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = []

  //add num random colors to array
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }

  //return that array
  return arr;
}

function randomColor(){
  //pick a "red", green and blue from 0-255
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";

}
