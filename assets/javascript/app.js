window.onload = function() {

// Declaring global variables.
var score = 0;
var time = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;
var count = 0;

// Waits for the start button to be pressed.
    document.getElementById("startBtn").addEventListener("click", startGame);
//When the start button is pressed, the div containing the questions appears in one second.
    function startGame() {
        setTimeout(function () { document.getElementById("questions").className="show"; }, 1000);
    };



let answers = document.querySelectorAll('radio');

for (let answer of answers) {
    answer.addEventListener('click', function() {
        var correct = this.dataset.type
    }
)};


//document.getElementById("#timer").innerHTML("Time Left: " + time + "seconds");

//document.getElementById("#score").innerHTML = "You got " + score + "/5 correct!";

}