'use strict';

let firstNumber = +prompt('Enter first numder', ''),
    secondNumber = +prompt('Enter second number', ''),
    isSkipPairNumbers = confirm('Do you want to skip the pair numbers?'),
    result = 0;

if(!isNaN(firstNumber) && !isNaN(secondNumber)) {
    for(let i = firstNumber; i <= secondNumber; i++){
        if(i % 2 == 0 && isSkipPairNumbers === true) {
            continue;
        }
        result += i;
    }        

    console.log(`Result is ${result}`);
} else {
    alert('Incorrect data type. Try again');
}