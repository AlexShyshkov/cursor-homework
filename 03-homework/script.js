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

document.writeln(`
    Функція №1: ${getMaxDigit(123845)}<br>
    Функція №2: ${getPow(3, 3)}<br>
    Функція №3: ${nameFormatingTool("vAsYA")}<br>
    Функція №4: ${getNettoSalary(1000)}<br>
    Функція №5: ${getRandomDigit(10, 30)}<br>
    Функція №6: ${countLetter("b", "Blablablacar")}<br>
`);