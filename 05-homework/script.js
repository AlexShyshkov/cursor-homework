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

console.log(getRandomArray(10, 2, 55));
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));