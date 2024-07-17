document.getElementById('encrypt-btn').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    const encryptedText = encryptText(inputText);
    document.getElementById('output-text').value = encryptedText;
    document.getElementById('input-text').value = '';
});

document.getElementById('decrypt-btn').addEventListener('click', () => {
    const inputText = document.getElementById('output-text').value;
    const decryptedText = decryptText(inputText);
    document.getElementById('output-text').value = decryptedText;
    document.getElementById('input-text').value = ''; // Limpar o campo de entrada
});

document.getElementById('copy-btn').addEventListener('click', () => {
    const outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
});

function encryptText(text) {
    let modifiedText = text;

    // Verificar se a primeira letra é igual à letra criptografada
    const firstLetter = text.charAt(0);
    const encryptedFirstLetter = getEncryption(firstLetter);

    if (text.startsWith(encryptedFirstLetter)) {
        modifiedText = 'x' + text.slice(1); // Adicionar 'x' para modificar a primeira letra
    }

    // Realizar as substituições de acordo com as chaves de criptografia
    modifiedText = modifiedText.replace(/e/g, 'enter')
                               .replace(/i/g, 'imes')
                               .replace(/a/g, 'ai')
                               .replace(/o/g, 'ober')
                               .replace(/u/g, 'ufat');

    return modifiedText;
}

function decryptText(text) {
    let decryptedText = text;

    // Realizar as substituições reversas para descriptografar
    decryptedText = decryptedText.replace(/enter/g, 'e')
                                 .replace(/imes/g, 'i')
                                 .replace(/ai/g, 'a')
                                 .replace(/ober/g, 'o')
                                 .replace(/ufat/g, 'u');

    // Verificar se o texto foi criptografado com a modificação da primeira letra
    if (text.startsWith('x')) {
        decryptedText = 'L' + decryptedText.slice(1); // Adicionar 'L' para modificar a primeira letra
    }

    return decryptedText;
}

function getEncryption(letter) {
    switch (letter) {
        case 'e':
            return 'enter';
        case 'i':
            return 'imes';
        case 'a':
            return 'ai';
        case 'o':
            return 'ober';
        case 'u':
            return 'ufat';
        default:
            return '';
    }
}
