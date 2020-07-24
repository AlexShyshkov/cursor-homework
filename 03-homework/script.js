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

document.writeln(`
    Функція №1: ${getMaxDigit(123845)}<br>
    Функція №2: ${getPow(3, 3)}<br>
    Функція №3: ${nameFormatingTool("vAsYA")}<br>
`);