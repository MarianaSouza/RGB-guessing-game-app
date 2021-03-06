//var numOfSquares keep tracking of the number of squares that will be generated on hard(6) and easy (3) mode
var numOfSquares = 6;

//var colors is an array that contains all colors generated dynamically by the function generateRandomColors
var colors = [];

var pickedColor;

var squares = document.querySelectorAll(".square");

//Message that will be displayed to guide the user
var messageDisplay = document.querySelector("#message");

//Displaying the content of pickedColor on the ID colorDisplay
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

var header = document.querySelector("header");

var resetButton = document.querySelector("#reset");

var modeButtons = document.querySelectorAll(".mode");

init()

function init(){
	//Alternating the modes Easy and Hard
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			//removing the selection of all buttons and adding selected on the active one
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
		//ternary operator
		this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;

		 reset();
		 });

	}

	squareListeners();

	reset();
}

function squareListeners(){
	for(var i = 0; i < squares.length; i++){
		//Adding Click Listeners to Squares
		squares[i].addEventListener("click" , function() {
			//grab color of the square
			var clickedColor = this.style.backgroundColor;
			//and compare color with pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play again?"
				changeColors(clickedColor);
				header.style.backgroundColor = clickedColor;
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset(){
	//reseting background header colors
	header.style.backgroundColor = "#232323";

	//changing the message of the button reset
	resetButton.textContent = "New Colors";

	//cleaning message "Correct" on span
	messageDisplay.textContent = "";

	//generating all new colors
	colors = generateRandomColors(numOfSquares);

	//it picks a new random color from array colors
	pickedColor = pickRandomColor();

	//change color displayed to match picked color
	colorDisplay.textContent = pickedColor;

	//change colors of the squares considering the modes
	 for(var i = 0; i < squares.length; i++){
	 	if(colors[i]){
	 		squares[i].style.display = "block";
	 	 	squares[i].style.backgroundColor = colors[i];
	 	}else{
	 		//from the fourth square, we hide them
	 		squares[i].style.display = "none";
	 	}
	 	
	 }
}

resetButton.addEventListener("click", function() {
	reset();
});


//This function is called when the user guess right 
function changeColors(color){
	//Loop through the squares
	for(var i = 0; i < squares.length; i++){
		//Change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

//This function makes pickedColor to be a random one from array colors
function pickRandomColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//This function generate the amount of RGB code colors for the array colors
//The parameter num determines the number of RGB colors that will be created (3 or 6)
function generateRandomColors(num){
	var arr = [];
	for(i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

//This function generate the RGB color code for the array colors
function randomColor(){
//pick a red from 0-255
var red = Math.floor(Math.random() * 256);
//pick a green from 0-255
var green = Math.floor(Math.random() * 256);
//pick a blue from 0-255
var blue = Math.floor(Math.random() * 256);

var rgb = "rgb(" + red + ", " + blue + ", " + green + ")";

return rgb;
}
