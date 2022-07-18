let text = document.querySelector("textarea");

document.getElementById("upper-case").addEventListener("click", function () {
    text.value = text.value.toUpperCase();
});

document.getElementById("lower-case").addEventListener("click", function () {
    text.value = text.value.toLowerCase();
});

document.getElementById("proper-case").addEventListener("click", function () {
    let words = text.value.toLowerCase().trim().split(' ');
    let temp = "";
    for( let w of words){
        temp += capitalize(w) + ' ';
    }
    text.value = temp.substring(0, temp.length-1);
});

document.getElementById("sentence-case").addEventListener("click", function () {
    let sentences = text.value.toLowerCase().split('. ');
    let modifiedSentences = [];
    for (let sentence of sentences) {
        let modifiedSentence = sentence.charAt(0).toUpperCase().concat(sentence.slice(1));
        modifiedSentences.push(modifiedSentence);
    }
    text.value = modifiedSentences.join('. ');
})
 function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

}


let element5 = document.getElementById("save-text-file");
element5.addEventListener("click", function() {
    download("text.txt", document.querySelector("textarea").value);
})

let capitalize = function (string){
    return string.charAt(0).toUpperCase() + string.substring(1);
}

let btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    this.classList.add("active");
});