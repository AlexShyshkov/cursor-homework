"use strict";

function getRandomArray(length, min, max) {
    let newArr = [];
    for (let i = 0; i < length; i++) {
        newArr.push(Math.floor(Math.random() * (max - min) + min));
    }
    return newArr;
}

/*function getModa(...numbers) {

}*/

function getAverage(...numbers) {
    return numbers.filter(number => Number.isInteger(number))
                    .reduce((total, number) => {
                        return total + number;
                    }, 0) / numbers.length;
}

function filterEvenNumbers(...numbers) {
    return numbers.filter(numbers => numbers % 2 !==0);
}

console.log(getRandomArray(10, 2, 55));
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log(filterEvenNumbers(1, 2, 3, 4, 5));