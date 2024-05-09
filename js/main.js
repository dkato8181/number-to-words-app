const MIN = 0;
const MAX = 999_999_999_999_999;

const buttonConvert = document.getElementById("convert");
const pWords = document.getElementById("words");
const inputNumber = document.getElementById("number");

buttonConvert.addEventListener("click", convertListener);

function convertListener(e) {
    const number = parseInt(inputNumber.value);
    let words;
    let isValid = false;

    pWords.classList.remove()

    if (isNaN(number)) {
        words = 'value is not a number';
    }
    else if (number < MIN || number > MAX) {
        words = 'number not yet supported';
    }
    else {
        isValid = true;
        words = convert(number);
    }

    if (!isValid) {
        pWords.classList.add('text-invalid');
    }

    pWords.innerHTML = words;
}