"use strict";

const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4, 10, 10],
        algorithms: [3, 3, 3, 4, 4, 4, 5, 5, 5],
        data_science: [5, 5, 3, 4, 5, 5, 5, 8]
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
    let marksOnSubjectsList = Object.values(student.subjects),
        totalMarksList = [],
        averageMark = 0;

    for(let i = 0; i < marksOnSubjectsList.length; i++) {
        totalMarksList = totalMarksList.concat(marksOnSubjectsList[i]);
    }
    averageMark = totalMarksList.reduce((a, b) => a + b) / totalMarksList.length;
    return averageMark.toFixed(2);
}

function getStudentInfo(student) {
    let studentInfo = {
        course: student.course,
        name: student.name,
        averageMark: getAverageMark(student)
    };
    return JSON.stringify(studentInfo);
}

function getStudentsNames(group) {
    return group.map(studentName => studentName.name).sort();
}

function getBestStudent(group) {
    let bestStudent = null,
        maxAverageMark = 0;

    for(let i = 0; i < group.length; i++) {
        if(maxAverageMark < getAverageMark(group[i])) {
            maxAverageMark = getAverageMark(group[i]);
            bestStudent = group[i].name;
        }
    }

    return bestStudent;
}

console.log(getSubjects(students[0]));
console.log(getAverageMark(students[0]));
console.log(getStudentInfo(students[0]));
console.log(getStudentsNames(students));
console.log(getBestStudent(students));