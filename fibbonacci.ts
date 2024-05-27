
let firstNum: number = 0
let secondNum: number = 1;
let nextNum: number =0


do{
    console.log(nextNum+" ");
    nextNum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = nextNum;

}while(nextNum<100)
