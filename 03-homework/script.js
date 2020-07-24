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

document.writeln(`Функція №1: ${getMaxDigit(123845)}`);