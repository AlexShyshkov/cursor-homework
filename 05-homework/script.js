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

function getMedian(...numbers) {
    let arr = numbers.sort((a, b) => a - b);
    if(arr.length % 2) {
        return arr[Math.floor(arr.length / 2)];
    } else {
        return (arr[arr.length /2] + arr[arr.length / 2 - 1]) / 2;
    }
}

function filterEvenNumbers(...numbers) {
    return numbers.filter(numbers => numbers % 2 !==0);
}

function countPositiveNumbers(...numbers) {
    return numbers.filter(numbers => numbers > 0).length;
}

function getDivideByFive(...numbers) {
    return numbers.filter(numbers => numbers %5 == 0);
}

console.log(getRandomArray(10, 2, 55));
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log(filterEvenNumbers(1, 2, 3, 4, 5));
console.log(countPositiveNumbers(1, -3, 5, 6, -36));
console.log(getDivideByFive(25, 5, 2, 9));