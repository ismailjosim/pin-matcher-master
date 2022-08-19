// ==========> Select Element
const btnGenerate = document.querySelector('#generate_btn');
const generateInput = document.querySelector('#pin-input');
const calculator = document.querySelector('#calculator');
const submitBox = document.querySelector('#submit-box');
const submitButton = document.querySelector('#submit-btn');

const rightMessage = document.querySelector('#message-right');
const wrongMessage = document.querySelector('#message-wrong');

const actionLeft = document.querySelector('#left-action');

// random Number generate
const randomNumberGenerate = function () {
    const number = Math.round(Math.random() * 10000);
    const pinStr = number + '';
    if (pinStr.length === 4) {
        return number;
    } else {
        return randomNumberGenerate();
    }
};

// var seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
// console.log(seq);

// generate button
btnGenerate.addEventListener('click', function () {
    const getPin = randomNumberGenerate();
    generateInput.value = getPin;
});


// pin submit function
calculator.addEventListener('click', function (event) {
    const number = event.target.innerText;
    const previousNumber = submitBox.value;
    if (isNaN(number)) {
        if (number === "C") {
            submitBox.value = '';
        } else if (number === "<") {
            const digits = previousNumber.split('');// split all the input number as an array [1, 2, 3, 4]
            digits.pop(); // Remove Last item
            const remainDigits = digits.join(''); // Join the rest number using empty str.
            submitBox.value = remainDigits; // set the submit box to remaining remainDigits
        }
    } else {
        const newNumber = previousNumber + number;
        submitBox.value = newNumber;

    }
});

submitButton.addEventListener('click', function () {
    const generateBoxPin = generateInput.value;
    const submitBoxPin = submitBox.value;

    if (generateBoxPin === submitBoxPin) {
        rightMessage.style.display = 'block';
        generateInput.value = '';
        submitBox.value = '';
        wrongMessage.style.display = 'none';

    } else {
        wrongMessage.style.display = 'block';
        generateInput.value = '';
        submitBox.value = '';
        rightMessage.style.display = 'none';
        // const lifeLeft = actionLeft.innerText;

    }
});
