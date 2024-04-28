


let result1 = document.getElementById("numberDisplay1");
let result2 = document.getElementById("numberDisplay2");
let generateButton = document.getElementById("numberGenerator");

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}

generateButton.onclick = function () {
    result1.src = "Images/dice" + generateRandomNumber(1, 6) + ".png";
    result2.src = "Images/dice" + generateRandomNumber(1, 6) + ".png";
}

