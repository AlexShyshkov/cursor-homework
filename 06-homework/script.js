"use strict";

const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

function getSubjects(student) {
    return Object.keys(student.subjects)
                 .map(subject => subject.charAt(0).toUpperCase() + subject.substring(1).replace("_", " "));
}

function getAverageMark(student) {
    let marksOnSubjectsList = Object.values(student.subjects);
    let totalMarksList = [];
    let averageMark = 0;

    for(let i = 0; i < marksOnSubjectsList.length; i++) {
        totalMarksList = totalMarksList.concat(marksOnSubjectsList[i]);
    }
    averageMark = totalMarksList.reduce((a, b) => a + b) / totalMarksList.length;
    return averageMark.toFixed(2);
}

console.log(getSubjects(students[0]));
console.log(getAverageMark(students[0]));