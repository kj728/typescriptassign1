let inputsentence:string = "my name is james"

let sentenceArray:Array<string> = inputsentence.split(" ");

let outputsentence:string =""
for(let word in sentenceArray){
    let firstword:string =sentenceArray[word].charAt(0).toLocaleUpperCase()
    let otherwords:string =sentenceArray[word].slice(1).toLowerCase()
    
    outputsentence += firstword + otherwords + " ";
   
}
 console.log(outputsentence);

