"use strict";

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function swapStudentsOrder(arr, from, to) {
    arr[from] = arr.splice(to, 1, arr[from])[0];
}

swapStudentsOrder(students, 1, 2);
//console.log(students);

function getPairs(arr) {
    let studentPairs = [];
    for (let i = 0; i < arr.length; i+=2) {
        studentPairs.push(new Array(arr[i], arr[i+1]));
    }
    return studentPairs;
}

const pairs = getPairs(students);

console.log(pairs);