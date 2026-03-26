function toBinary(char) {
    return char.charCodeAt(0).toString(2).padStart(8, '0');
}

function convertText() {
    let input = document.getElementById("inputText").value;

    // Split into words
    let words = input.split(" ");

    let result = words.map(word => {
        // Convert each letter in word
        let letters = word.split("").map(letter => toBinary(letter));
        return letters.join(":");
    });

    // Join words with "/"
    document.getElementById("outputText").value = result.join(" / ");
}
