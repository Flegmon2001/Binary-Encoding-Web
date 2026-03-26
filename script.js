function toBinary(char) {
    return char.charCodeAt(0).toString(2).padStart(8, '0');
}

function convertText() {
    let input = document.getElementById("inputText").value;

    let words = input.split(" ");

    let result = words.map(word => {
        let letters = word.split("").map(letter => toBinary(letter));
        return letters.join(":");
    });

    document.getElementById("outputText").value = result.join(" / ");
}
