function encodeText() {
    let inputText = document.getElementById('inputText').value;
    let encodedText = inputText.replace(/[a-zA-Z]/g, function(c) {
        return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
    document.getElementById('outputText').value = encodedText;
}

function decodeText() {
    let inputText = document.getElementById('inputText').value;
    let decodedText = inputText.replace(/[a-zA-Z]/g, function(c) {
        return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
    document.getElementById('outputText').value = decodedText;
}
