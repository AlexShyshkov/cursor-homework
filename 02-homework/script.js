'use strict';

let firstNumber = +prompt('Enter first numder', ''),
    secondNumber = +prompt('Enter second number', ''),
    result = 0;

if(!isNaN(firstNumber) && !isNaN(secondNumber)) {
    if(confirm('Do you want to skip the pair numbers?')){
        for(let i = firstNumber; i <= secondNumber; i++){
            if(i % 2 == 0) {
                continue;
            }
            result += i;
        }        
    } else {
        for(let i = firstNumber; i <= secondNumber; i++){
            result += i;
        }
    }
    console.log(`Result is ${result}`);
} else {
    alert('Incorrect data type. Try again');
}