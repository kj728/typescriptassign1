
let sentence:string= "My name is James"

sentence.toLocaleLowerCase()


let vowelCount:number = 0;

for (let i=0; i<sentence.length; i++) {

    let letter = sentence[i]
    if(letter ==='a' || letter ==='e' || letter ==='i' || letter ==='o' || letter ==='u'){
        vowelCount++
    }

}

console.log(vowelCount)