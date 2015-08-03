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

var yourDice = [];
var cpuDice = [];

var userDiOne = singleDiGenerator();
var userDiTwo = singleDiGenerator();
var userDiThree = singleDiGenerator();
var cpuDiOne = singleDiGenerator();
var cpuDiTwo = singleDiGenerator();
var cpuDiThree = singleDiGenerator();

yourDice.push(userDiOne);
yourDice.push(userDiTwo);
yourDice.push(userDiThree);
cpuDice.push(cpuDiOne);
cpuDice.push(cpuDiTwo);
cpuDice.push(cpuDiThree);


var scoreCalculator = function(arr) {
    var sortedArr = arr.sort();
    var score = 27;
    if ((sortedArr[0] == 4) && (sortedArr[1] == 5) && (sortedArr[2] == 6)) {
        score = 13;
    }
    else if ((sortedArr[0] == 6) && (sortedArr[1] == 6) && (sortedArr[2] == 6)) {
        score = 12;
    }
    else if ((sortedArr[0] == 5) && (sortedArr[1] == 5) && (sortedArr[2] == 5)) {
        score = 11;
    }
    else if ((sortedArr[0] == 4) && (sortedArr[1] == 4) && (sortedArr[2] == 4)) {
        score = 10;
    }
    else if ((sortedArr[0] == 3) && (sortedArr[1] == 3) && (sortedArr[2] == 3)) {
        score = 9;
    }
    else if ((sortedArr[0] == 2) && (sortedArr[1] == 2) && (sortedArr[2] == 2)) {
        score = 8;
    }
    else if ((sortedArr[0] == 2) && (sortedArr[1] == 2) && (sortedArr[2] == 2)) {
        score = 8;
    }
    else if ((sortedArr[0] == 1) && (sortedArr[1] == 1) && (sortedArr[2] == 1)) {
        score = 7;
    }
    else if ((sortedArr[0] == sortedArr[1]) && (sortedArr[2]== 6)) {
        score = 6;
    }
    else if ((sortedArr[0] == sortedArr[1]) && (sortedArr[2]== 5) || (sortedArr[2] == sortedArr[1]) && (sortedArr[0] == 5)) {
        score = 5;
    }
    else if ((sortedArr[0] == sortedArr[1]) && (sortedArr[2]== 4) || (sortedArr[2] == sortedArr[1]) && (sortedArr[0] == 4)) {
        score = 4;
    }
    else if ((sortedArr[0] == sortedArr[1]) && (sortedArr[2]== 3) || (sortedArr[2] == sortedArr[1]) && (sortedArr[0] == 3)) {
        score = 3;
    }
    else if ((sortedArr[0] == sortedArr[1]) && (sortedArr[2]== 2) || (sortedArr[2] == sortedArr[1]) && (sortedArr[0] == 2)) {
        score = 2;
    }
    else if ((sortedArr[0] == sortedArr[1]) && (sortedArr[2]== 1) || (sortedArr[2] == sortedArr[1]) && (sortedArr[0] == 1)) {
        score = 1;
    }
    else if ((sortedArr[0] == 1) && (sortedArr[1] == 2) && (sortedArr[2] == 3)) {
        score = 0;
    }
    return score;
}

var yourScore = scoreCalculator(yourDice);
var cpuScore = scoreCalculator(cpuDice);

console.log(yourDice);
console.log(yourScore);
console.log(cpuDice);
console.log(cpuScore);
