const sentences = "Duis at tellus et ex bibendum pellentesque sed in nibh. Sed aliquet, diam id mollis facilisis, massa metus accumsan elit, at mattis magna.";
function result(sentences) {
    const myArray = sentences.split(" ");
    const count = myArray.length;
    return count;
}
console.log(result(sentences))

