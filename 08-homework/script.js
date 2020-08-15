"use strict";

class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;

        this._marks = [5, 4, 4, 5];
        this._isDismissed;
    }

    getInfo() {
        return `Student of ${this.course} course ${this.university}, ${this.fullName}`;
    }

    get marks() {
        if(!this._isDismissed) {
            return this._marks;
        } else {
            return null;
        }        
    }

    set marks(newMark) {
        if(!this._isDismissed) {
            return this.marks.push(newMark);
        }
    }

    getAverageMark() {
        return this.marks.reduce((accumulator, value) => accumulator + value) / this._marks.length
                         .toFixed(2);
    }

    dismissStudent() {
        if (this._isDismissed == true) {
            console.log(`${this.fullName} has alredy dismissed!`);            
        } else {            
            this._isDismissed = true;
            console.log(`${this.fullName} dismissed`);
        }
    }
}

let vitya = new Student("Oxford", 2, " Vitya Alvarez");
console.log(vitya);
console.log(vitya.getInfo());
console.log(vitya.marks);
console.log(vitya.marks = 5);
console.log(vitya.marks);
console.log(vitya.getAverageMark());
console.log(vitya.dismissStudent());
console.log(vitya.dismissStudent());
console.log(vitya._isDismissed);
console.log(vitya.marks);
console.log(vitya.marks = 5);
console.log(vitya.marks);
