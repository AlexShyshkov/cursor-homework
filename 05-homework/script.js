"use strict";

function getRandomArray(length, min, max) {
    let newArr = [];
    for (let i = 0; i < length; i++) {
        newArr.push(Math.floor(Math.random() * (max - min) + min));
    }
    return newArr;
}

/*function getModa(...numbers) {
    let num = numbers.filter(number => Number.isInteger(number));
    let count = 0;
    let max = num[0];
    for (let i = 0; i < num.length; i++) {
        if(max < num[i]) {
            max = num[i];
        }        
    }
    for (let i = 0; i < num.length; i++){
        if(num[i] == max) {
            count++;
        }
    }
    return count;
}*/

function getAverage(...numbers) {
    return numbers.filter(number => Number.isInteger(number))
                    .reduce((total, number) => {
                        return total + number;
                    }, 0) / numbers.length;
}

function getMedian(...numbers) {
    let arr = numbers.sort((a, b) => a - b);
    if(arr.length % 2 != 0) {
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

let censoredWords = ["shit", "fuck"];

function replaceBadWords(text, censored) {
    return text.split(" ")
                .map(modifiedWord => {
                    for(let i = 0; i < censored.length; i++) {
                        if(modifiedWord.toLowerCase().includes(censored[i])) {
                            return modifiedWord.replace(censored[i], "*".repeat(censored[i].length));
                        }
                    }
                    return modifiedWord;
                })
                .join(" ");
}

function divideByThree(word) {
    if(word.length <=3) {
        return word.toLowerCase();
    } else {
        let subStrings = [];
        for(let i = 0; i < word.length; i += 3) {
            subStrings.push(
                word.toLowerCase()
                    .split(" ")
                    .join("")
                    .substr(i, 3)
                );
        }
        return subStrings;
    }
}

console.log(getRandomArray(10, 2, 55));
//console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log(filterEvenNumbers(1, 2, 3, 4, 5));
console.log(countPositiveNumbers(1, -3, 5, 6, -36));
console.log(getDivideByFive(25, 5, 2, 9));
console.log(replaceBadWords("Are you fucking kidding?", censoredWords));
console.log(divideByThree("Commander"));