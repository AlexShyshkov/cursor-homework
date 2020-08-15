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

    recoverStudent() {
        if(this._isDismissed == true) {
            this._isDismissed = false;
            console.log(`${this.fullName} recovered`);
        } else {
            console.log(`${this.fullName} is not dismissed`);
        }
    }
}

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);

        this._scholarship = 0;
    }

    getScholarship(sum) {
        if(this.getAverageMark() >= 4.0 && !this._isDismissed) {
            this._scholarship = sum;
            console.log(`${this.fullName} received ${this._scholarship} scholarhip`);
        } else {
            console.log("Study better!");
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
console.log(vitya.recoverStudent());
console.log(vitya.marks);
console.log(vitya.marks = 5);
console.log(vitya.recoverStudent());

let luke = new BudgetStudent("PTU", 1, "Luke Skyworker");
console.log(luke);
console.log(luke.getInfo());
console.log(luke.marks);
console.log(luke.getAverageMark());
luke.getScholarship(1400);