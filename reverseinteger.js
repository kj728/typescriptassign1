var enteredNum = 91;
var outputNum = 0;
while (enteredNum != 0) {
    var remainder = enteredNum % 10;
    outputNum = (outputNum * 10) + remainder;
     enteredNum = Math.floor(enteredNum / 10);
}

console.log(outputNum);

// let myNum =-12346
// let myNumString =myNum.toString()
// let myNumArray =myNumString.split('');
// let sign:string =""
// if(myNumArray[0]==='-'||myNumArray[0]==='+'){
//     sign=myNumArray[0]
//     myNumArray=myNumArray.slice(1);
// }
//  let reversedString =sign+myNumArray.reverse().join('')
//  console.log(reversedString)
