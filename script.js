let isTextToBinary = true;

function getSeparator(char) {
    if (/[a-zA-Z]/.test(char)) return ":";
    if (/[0-9]/.test(char)) return "(";
    return ";";
}

function toBinary(char) {
    return char.charCodeAt(0).toString(2).padStart(8, '0');
}

function fromBinary(binary) {
    return String.fromCharCode(parseInt(binary, 2));
}

function textToBinary(text) {
    let words = text.split(" ");
    return words.map(word => {
        let result = "";
        for (let i = 0; i < word.length; i++) {
            result += toBinary(word[i]);
            if (i < word.length - 1) {
                result += getSeparator(word[i]);
            }
        }
        return result;
    }).join(" / ");
}

function binaryToText(binaryInput) {
    let words = binaryInput.split(" / ");
    return words.map(word => {
        let chars = [];
        let current = "";

        for (let c of word) {
            if (c === ":" || c === ";" || c === "(") {
                if (current) chars.push(fromBinary(current));
                current = "";
            } else {
                current += c;
            }
        }
        if (current) chars.push(fromBinary(current));

        return chars.join("");
    }).join(" ");
}

function convertText() {
    let input = document.getElementById("inputText").value;
    let output = document.getElementById("outputText");

    output.value = isTextToBinary
        ? textToBinary(input)
        : binaryToText(input);
}

function switchMode() {
    isTextToBinary = !isTextToBinary;

    document.getElementById("modeLabel").textContent =
        isTextToBinary ? "Text → Binary" : "Binary → Text";

    document.getElementById("infoBox").textContent =
        isTextToBinary
        ? "Letters: ':' | Symbols: ';' | Numbers: '(' | Words: '/'"
        : "Use ':' for letters, ';' for symbols, '(' for numbers, '/' for words";

    let input = document.getElementById("inputText");
    let output = document.getElementById("outputText");

    input.placeholder = isTextToBinary ? "Enter text..." : "Enter binary...";
    output.placeholder = isTextToBinary ? "Binary output..." : "Text output...";

    input.value = "";
    output.value = "";
}
