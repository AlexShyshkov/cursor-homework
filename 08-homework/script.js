"use strict";

class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
    }

    getInfo() {
        return `Student of ${this.course} course ${this.university}, ${this.fullName}`;
    }
}

let vitya = new Student("Oxford", 2, " Vitya Alvarez");
console.log(vitya);
console.log(vitya.getInfo());