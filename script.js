let isTextToBinary = true;

// Detect type of character
function getSeparator(char) {
    if (/[a-zA-Z]/.test(char)) return ":";  // letters
    if (/[0-9]/.test(char)) return "(";    // numbers
    return ";";                             // symbols
}

// Convert character to binary
function toBinary(char) {
    return char.charCodeAt(0).toString(2).padStart(8, '0');
}

// Convert binary string back to character
function fromBinary(binary) {
    return String.fromCharCode(parseInt(binary, 2));
}

// Convert entire text to binary with separators
function textToBinary(text) {
    let words = text.split(" ");
    let result = words.map(word => {
        let letters = word.split("").map(char => toBinary(char));
        let separated = "";
        for (let i = 0; i < word.length; i++) {
            separated += letters[i];
            if (i < word.length - 1) {
                separated += getSeparator(word[i]);
            }
        }
        return separated;
    });
    return result.join(" / ");
}

// Convert binary string with separators back to text
function binaryToText(binaryInput) {
    let words = binaryInput.split(" / ");
    let result = words.map(word => {
        let letters = [];
        let current = "";
        for (let i = 0; i < word.length; i++) {
            let c = word[i];
            // separator characters
            if (c === ":" || c === ";" || c === "(") {
                if (current !== "") letters.push(fromBinary(current));
                current = "";
            } else {
                current += c;
            }
        }
        if (current !== "") letters.push(fromBinary(current));
        return letters.join("");
    });
    return result.join(" ");
}

// Main convert function
function convertText() {
    let input = document.getElementById("inputText").value;
    let outputField = document.getElementById("outputText");

    if (isTextToBinary) {
        outputField.value = textToBinary(input);
    } else {
        outputField.value = binaryToText(input);
    }
}

// Switch mode
function switchMode() {
    isTextToBinary = !isTextToBinary;

    let card = document.querySelector(".card");
    card.classList.toggle("swap");

    let modeLabel = document.getElementById("modeLabel");
    modeLabel.textContent = isTextToBinary ? "Text → Binary" : "Binary → Text";

    let input = document.getElementById("inputText");
    let output = document.getElementById("outputText");

    if (isTextToBinary) {
        input.placeholder = "Enter text...";
        output.placeholder = "Binary output...";
    } else {
        input.placeholder = "Enter binary...";
        output.placeholder = "Text output...";
    }

    input.value = "";
    output.value = "";
}
