var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomGradientGenerator")


function displayBackground() {
     body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
     css.textContent = body.style.background + ";";
}

function setGradient() {
     displayBackground();
}

function getRandomColor() {
     var randomColorNumber = Math.floor(Math.random()*16777215).toString(16);
     var numOfZeros = 0;
     var randomColorString = "#";
     for(var i = randomColorNumber.length; i < 6; i++){
          randomColorString += "0";
     }
     randomColorString += randomColorNumber;
     return randomColorString;
}

button.addEventListener("click", function() {
     var newColor1 = getRandomColor();
     var newColor2 = getRandomColor();
     color1.value = newColor1;
     color2.value = newColor2;
     displayBackground();
     
});

displayBackground();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);