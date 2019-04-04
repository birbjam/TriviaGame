
// Declaring global variables.
var score = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;
var time = 30;


// Waits for the start button to be pressed.
    document.getElementById("startBtn").addEventListener("click", startGame);
//When the start button is pressed, the div containing the questions appears in one second.
    function startGame() {
        setTimeout(function () { document.getElementById("questions").className="show"; }, 1000);

    };


//Listens for a click on the submit button.
    document.getElementById("submit").addEventListener("click", endGame);

//Shows the score screen after one second of clicking submit and displays the score.
    function endGame() {
        setTimeout(function () { document.getElementById("score").className="show"; }, 1000);
        document.getElementById("score").innerHTML("Game Over!\nYou got " + score + "/5 correct!");
    };




// Testing a random timeout function.
//    setTimeout(function () {
//      alert("Done"); }, 30000);

// Trying to select everything with the class 'radio'.
//let answers = document.querySelectorAll('radio');

//Loop that looks for a certain data type.
//for (let answer of answers) {
    //answer.addEventListener('click', function() {
        //var correct = this.dataset.type
    //}
//)};


//document.getElementById("#timer").innerHTML("Time Left: " + time + "seconds");
