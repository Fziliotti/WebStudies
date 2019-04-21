const changeTextFromElement = (element, text) => 
    element.textContent = text;

const message = document.querySelector('#message');
changeTextFromElement(message, 'Welcome');
changeTextFromElement(message, 'Se ya');

// Marque a opção que realiza a partial application do primeiro parâmetro da função:

const changeTextFromElement = (element, text) => 
    element.textContent = text;

const message = document.querySelector('#message');
const changeText = changeTextFromElement.bind(null, message);

changeText('Welcome');
changeText('See ya!');