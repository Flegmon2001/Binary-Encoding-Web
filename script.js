let isTextToBinary = true;

function toBinary(char) {
    return char.charCodeAt(0).toString(2).padStart(8, '0');
}

function fromBinary(binary) {
    return binary.split(":").map(b => String.fromCharCode(parseInt(b,2))).join("");
}

function convertText() {
    let input = document.getElementById("inputText").value;
    let outputField = document.getElementById("outputText");

    if (isTextToBinary) {
        // TEXT → BINARY
        let words = input.split(" ");
        let result = words.map(word => word.split("").map(toBinary).join(":"));
        outputField.value = result.join(" / ");
    } else {
        // BINARY → TEXT
        let words = input.split(" / ");
        let result = words.map(word => fromBinary(word));
        outputField.value = result.join(" ");
    }
}

function switchMode() {
    isTextToBinary = !isTextToBinary;

    // Swap visual order
    document.querySelector(".card").classList.toggle("swap");

    // Update mode label
    document.getElementById("modeLabel").textContent = isTextToBinary ? "Text → Binary" : "Binary → Text";

    // Swap placeholders
    let input = document.getElementById("inputText");
    let output = document.getElementById("outputText");

    if (isTextToBinary) {
        input.placeholder = "Enter text...";
        output.placeholder = "Binary output...";
    } else {
        input.placeholder = "Enter binary...";
        output.placeholder = "Text output...";
    }

    // Clear both fields for clarity
    input.value = "";
    output.value = "";
}
