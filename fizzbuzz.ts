let num: number =0

do{

    console.log(num)

    if(num%3==0){
        console.log("Fizz", num);
    }


    if(num%5==0){
        console.log("Buzz",num);
    }
    
    if (num % 3 == 0 && num % 5 == 0) {
        console.log("FizzBuzz", num);
    }

   
    num++
}while(num<101);