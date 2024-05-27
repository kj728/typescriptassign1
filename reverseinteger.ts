let enteredNum: number = 500
let outputNum: number = 0

while (enteredNum != 0) {
    let remainder = enteredNum % 10

    outputNum = (outputNum * 10) + remainder
    enteredNum = Math.floor(enteredNum / 10)
}

console.log(outputNum)




