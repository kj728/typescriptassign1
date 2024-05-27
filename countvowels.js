var sentence = "My name is James";
sentence.toLocaleLowerCase();
var vowelCount = 0;
for (var i = 0; i < sentence.length; i++) {
    var letter = sentence[i];
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        vowelCount++;
    }
}
console.log(vowelCount);
