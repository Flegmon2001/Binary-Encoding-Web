let isTextToBinary = true;

function toBinary(char) {
    return char.charCodeAt(0).toString(2).padStart(8, '0');
}

function fromBinary(binary) {
    return binary.split(":")
        .map(b => String.fromCharCode(parseInt(b, 2)))
        .join("");
}

function convertText() {
    let input = document.getElementById("inputText").value;

    if (isTextToBinary) {
        // TEXT → BINARY
        let words = input.split(" ");

        let result = words.map(word => {
            let letters = word.split("").map(letter => toBinary(letter));
            return letters.join(":");
        });

        document.getElementById("outputText").value = result.join(" / ");

    } else {
        // BINARY → TEXT
        let words = input.split(" / ");

        let result = words.map(word => {
            return fromBinary(word);
        });

        document.getElementById("outputText").value = result.join(" ");
    }
}

function switchMode() {
    isTextToBinary = !isTextToBinary;

    let title = document.getElementById("title");
    let container = document.querySelector(".card");

    // Change title
    title.textContent = isTextToBinary ? "Text → Binary" : "Binary → Text";

    // Swap fields visually
    container.classList.toggle("swap");

    // Swap placeholder text
    let input = document.getElementById("inputText");
    let output = document.getElementById("outputText");

    if (isTextToBinary) {
        input.placeholder = "Enter text...";
        output.placeholder = "Binary output...";
    } else {
        input.placeholder = "Enter binary...";
        output.placeholder = "Text output...";
    }

    // Clear fields (optional but cleaner)
    input.value = "";
    output.value = "";
}
