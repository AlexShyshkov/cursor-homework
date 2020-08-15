"use strict";

class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this._marks = [5, 4, 4, 5];
    }

    getInfo() {
        return `Student of ${this.course} course ${this.university}, ${this.fullName}`;
    }

    get marks() {
        return this._marks;
    }

    set marks(newMark) {
        return this.marks.push(newMark);
    }

    getAverageMark() {
        return this.marks.reduce((accumulator, value) => accumulator + value) / this._marks.length
                         .toFixed(2);
    }
}

let vitya = new Student("Oxford", 2, " Vitya Alvarez");
console.log(vitya);
console.log(vitya.getInfo());
console.log(vitya.marks);
console.log(vitya.marks = 5);
console.log(vitya.marks);
console.log(vitya.getAverageMark());