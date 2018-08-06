
//var colors is an array that contains all colors generated dynamically by the function generateRandomColors
var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColor();
//Displaying the content of pickedColor on the ID colorDisplay
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

var header = document.querySelector("header");
//Message that will be displayed to guide the user
var messageDisplay = document.querySelector("#message");

for(var i = 0; i < squares.length; i++){
	//Addding Initial Color to Squares
	squares[i].style.backgroundColor = colors[i];

	//Adding Click Listeners to Squares
	squares[i].addEventListener("click" , function() {
		//grab color of the square
		var clickedColor = (this.style.backgroundColor);
		//and compare color with pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			header.style.backgroundColor = clickedColor;
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

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