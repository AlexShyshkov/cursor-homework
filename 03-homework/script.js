'use strict';

function getMaxDigit(number) {
    let arr = number.toString().split('');
    
    let maxDigit = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > maxDigit) {
            maxDigit = arr[i];
        }
    }
    
    return maxDigit;
}

function getPow(value, power) {
    let result = value;
    for (let i = 1; i < power; i++) {
        result *= value;        
    }

    return result;
}

function nameFormatingTool(name) {
    let formatedName = name.toLowerCase();
    return formatedName.charAt(0).toUpperCase() + formatedName.substring(1);
}

function getNettoSalary(payment, tax=19.5) {
    return payment - (payment / 100 * tax);
}

function getRandomDigit(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function countLetter(letter, text) {
    let result = 0;
    text = text.toLowerCase();
    for(let i = 0; i < text.length; i++) {
        if(text[i] == letter) {
            result++;
        }
    }
    return result;
}

function convertCurrency(sum) {
    let convertedSum = null;
    if(sum.includes("$")) {
        convertedSum = (parseInt(sum) * 27.85) + "UAH";
    } else if(sum.toUpperCase().includes("UAH")) {
        convertedSum = (parseInt(sum) / 27.95).toFixed(2) + "$";
    }
    return convertedSum;
}

function getRandomPassword(symbols = 8) {
    let password = [];
    for(let i = 0; i < symbols; i++) {
        password.push(Math.round(Math.random() * 9));
    }
    return password.join('');
}

function deleteLetters(letter, text) {
    let newText = text.toLowerCase().split('');
    for(let i = 0; i < newText.length; i++) {
        if(newText[i] == letter.toLowerCase()){
            newText.splice(i, 1);
        }
    }
    return newText.join('');
}

function isPalyndrom(text) {
    let isPalyndrom = false;
    let reversedText = text.toLowerCase().split('').reverse().join('');
    if(reversedText === text){
        isPalyndrom = true;
    }
    return isPalyndrom;
}

function deleteDuplicateLetter(text) {
    text.toLowerCase().split('');
    let newText = "";
    for(let i = 0; i < text.length; i++){
        if(text.indexOf(text[i]) === text.lastIndexOf(text[i])){
            newText += text[i];
        }
    }
    return newText;
}

document.writeln(`
    Функція №1: ${getMaxDigit(123845)}<br>
    Функція №2: ${getPow(3, 3)}<br>
    Функція №3: ${nameFormatingTool("vAsYA")}<br>
    Функція №4: ${getNettoSalary(1000)}<br>
    Функція №5: ${getRandomDigit(10, 30)}<br>
    Функція №6: ${countLetter("b", "Blablablacar")}<br>
    Функція №7: ${convertCurrency("1000uah")}<br>
    Функція №8: ${getRandomPassword(10)}<br>
    Функція №9: ${deleteLetters("v", "kjdhjfddbfefvsjd vbj dvdfg ssdvbdhv")}<br>
    Функція №10: ${isPalyndrom("madam")}<br>
    Функція №11: ${deleteDuplicateLetter("abrakadabra")}<br>
`);