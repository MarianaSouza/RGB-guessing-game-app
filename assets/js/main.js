var colors = [
 "rgb(255, 0, 0)",
 "rgb(255, 255, 0)",
 "rgb(0, 255, 0)",
 "rgb(0, 255, 255)",
 "rgb(0, 0, 255)",
 "rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColor();
//Displaying the content of pickedColor on the ID colorDisplay
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
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