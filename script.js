document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const encryptButton = document.querySelector('.encrypt-button');
    const decryptButton = document.querySelector('.decrypt-button');
    const copyButton = document.querySelector('.copy-button');

    encryptButton.addEventListener('click', function() {
        const text = inputText.value;
        const encryptedText = encrypt(text);
        outputText.value = encryptedText;
        inputText.value = ''; // Limpar o campo de entrada após a criptografia
    });

    decryptButton.addEventListener('click', function() {
        const text = outputText.value;
        const decryptedText = decrypt(text);
        outputText.value = decryptedText;
    });

    copyButton.addEventListener('click', function() {
        outputText.select();
        outputText.setSelectionRange(0, 99999); /* Para dispositivos móveis */
        document.execCommand('copy');
        alert('Texto copiado para a área de transferência!');
    });

    function encrypt(text) {
        return text.split('').map((char, index) => {
            if (char >= 'a' && char <= 'z') {
                // Encrypt lowercase letters
                const encryptedChar = String.fromCharCode((char.charCodeAt(0) - 97 + index) % 26 + 97);
                return encryptedChar.toUpperCase(); // Convert to uppercase
            } else if (char >= 'A' && char <= 'Z') {
                // Encrypt uppercase letters
                const encryptedChar = String.fromCharCode((char.charCodeAt(0) - 65 + index) % 26 + 65);
                return encryptedChar.toLowerCase(); // Convert to lowercase
            } else {
                // Preserve non-alphabetic characters
                return char;
            }
        }).join('');
    }

    function decrypt(text) {
        return text.split('').map((char, index) => {
            if (char >= 'a' && char <= 'z') {
                // Decrypt lowercase letters
                const decryptedChar = String.fromCharCode((char.charCodeAt(0) - 97 - index + 26) % 26 + 97);
                return decryptedChar.toUpperCase(); // Convert to uppercase
            } else if (char >= 'A' && char <= 'Z') {
                // Decrypt uppercase letters
                const decryptedChar = String.fromCharCode((char.charCodeAt(0) - 65 - index + 26) % 26 + 65);
                return decryptedChar.toLowerCase(); // Convert to lowercase
            } else {
                // Preserve non-alphabetic characters
                return char;
            }
        }).join('');
    }
});
