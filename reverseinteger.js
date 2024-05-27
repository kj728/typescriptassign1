var enteredNum = 91;
var outputNum = 0;
while (enteredNum != 0) {
    var remainder = enteredNum % 10;
    outputNum = (outputNum * 10) + remainder;
     enteredNum = Math.floor(enteredNum / 10);
}

console.log(outputNum);

