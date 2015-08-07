var userTotal = 0;
var cpuTotal = 0;


var singleDiGenerator = function() {
    var num = (Math.random()*6);
    if (num < 1) {
        return 1;
    }
    else if (num < 2) {
        return 2;
    }
    else if (num < 3) {
        return 3;
    }
    else if (num < 4) {
        return 4;
    }
    else if (num < 5) {
        return 5;
    }
    else {
        return 6;
    }
}

var scoreCalculator = function(arr) {
    var sortedArr = arr.sort();
    var score = "Please Roll Again!";
    if ((sortedArr[0] == 4) && (sortedArr[1] == 5) && (sortedArr[2] == 6)) {
        score = 14;
    }
    else if ((sortedArr[0] == 6) && (sortedArr[1] == 6) && (sortedArr[2] == 6)) {
        score = 13;
    }
    else if ((sortedArr[0] == 5) && (sortedArr[1] == 5) && (sortedArr[2] == 5)) {
        score = 12;
    }
    else if ((sortedArr[0] == 4) && (sortedArr[1] == 4) && (sortedArr[2] == 4)) {
        score = 11;
    }
    else if ((sortedArr[0] == 3) && (sortedArr[1] == 3) && (sortedArr[2] == 3)) {
        score = 10;
    }
    else if ((sortedArr[0] == 2) && (sortedArr[1] == 2) && (sortedArr[2] == 2)) {
        score = 9;
    }
    else if ((sortedArr[0] == 1) && (sortedArr[1] == 1) && (sortedArr[2] == 1)) {
        score = 8;
    }
    else if ((sortedArr[0] == sortedArr[1]) && (sortedArr[2]== 6)) {
        score = 7;
    }
    else if ((sortedArr[0] == sortedArr[1]) && (sortedArr[2]== 5) || (sortedArr[2] == sortedArr[1]) && (sortedArr[0] == 5)) {
        score = 6;
    }
    else if ((sortedArr[0] == sortedArr[1]) && (sortedArr[2]== 4) || (sortedArr[2] == sortedArr[1]) && (sortedArr[0] == 4)) {
        score = 5;
    }
    else if ((sortedArr[0] == sortedArr[1]) && (sortedArr[2]== 3) || (sortedArr[2] == sortedArr[1]) && (sortedArr[0] == 3)) {
        score = 4;
    }
    else if ((sortedArr[0] == sortedArr[1]) && (sortedArr[2]== 2) || (sortedArr[2] == sortedArr[1]) && (sortedArr[0] == 2)) {
        score = 3;
    }
    else if ((sortedArr[0] == sortedArr[1]) && (sortedArr[2]== 1) || (sortedArr[2] == sortedArr[1]) && (sortedArr[0] == 1)) {
        score = 2;
    }
    else if ((sortedArr[0] == 1) && (sortedArr[1] == 2) && (sortedArr[2] == 3)) {
        score = 1;
    }
    return score;
}

function userRoll() {
    var yourDice = [];

    var userDiOne = singleDiGenerator();
    var userDiTwo = singleDiGenerator();
    var userDiThree = singleDiGenerator();

    yourDice.push(userDiOne);
    yourDice.push(userDiTwo);
    yourDice.push(userDiThree);

    var yourScore = scoreCalculator(yourDice);

    $('#user-score').text(yourScore);

    $('#user-di-one').text(userDiOne);
    $('#user-di-two').text(userDiTwo);
    $('#user-di-three').text(userDiThree);

    return yourScore;

};

function computerRoll() {
    var cpuDice = [];

    var cpuDiOne = singleDiGenerator();
    var cpuDiTwo = singleDiGenerator();
    var cpuDiThree = singleDiGenerator();

    cpuDice.push(cpuDiOne);
    cpuDice.push(cpuDiTwo);
    cpuDice.push(cpuDiThree);


    var cpuScore = scoreCalculator(cpuDice);


    $('#computer-score').text(cpuScore);

    $('#cpu-di-one').text(cpuDiOne);
    $('#cpu-di-two').text(cpuDiTwo);
    $('#cpu-di-three').text(cpuDiThree);

    return cpuScore;
};


function playGame(){
    var cpuScore, userScore;
    // These are temporary variables to be used to determine who had the invalid rolls.
    if (userScore == "Please Roll Again!") {
        userScore = userRoll();
        cpuScore = cpuScore;
    }
    else if (cpuScore == "Please Roll Again!") {
        cpuScore = computerRoll();
        userScore = userScore;
    }
    else {
        userScore = userRoll();
        cpuScore = computerRoll();
    }
    console.log(userScore);
    if (userScore > cpuScore) {
        userTotal++;
        $('#user-total').text(userTotal);
    }
    if (userScore < cpuScore) {
        cpuTotal++;
        $('#cpu-total').text(cpuTotal);
    }
}

$('#user-total').text(userTotal);
$('#cpu-total').text(cpuTotal);



$(document).ready(function(){

    $('#game-start-button').on("click", playGame);

});

// console.log(yourDice);
// console.log(yourScore);
// console.log(cpuDice);
// console.log(cpuScore);
