var firstNum = 0;
var secondNum = 1;
var nextNum = 0;
do {
    console.log(nextNum + " ");
    nextNum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = nextNum;
} while (nextNum < 100);
