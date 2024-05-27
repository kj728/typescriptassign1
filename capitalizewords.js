var inputsentence = "my name is james";
var sentenceArray = inputsentence.split(" ");
var outputsentence = "";
for (var word in sentenceArray) {
    var firstword = sentenceArray[word].charAt(0).toLocaleUpperCase();
    var otherwords = sentenceArray[word].slice(1).toLowerCase();
    outputsentence += firstword + otherwords + " ";
}
console.log(outputsentence);
