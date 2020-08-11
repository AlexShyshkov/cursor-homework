"use strict";

const ukraine = { 
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476 
};
const latvia = { 
    tax: 0.25, 
    middleSalary: 1586, 
    vacancies: 3921 
};
const litva = { 
    tax: 0.15, 
    middleSalary: 1509, 
    vacancies: 1114 
};

function getMyTaxes(salary) {
    return `My taxes = ${this.tax * salary}`;
}

function getMiddleTaxes() {
    return `Middle tax = ${this.tax * this.middleSalary}`;
}

function getTotalTaxes() {
    return `Total taxes from IT = ${this.tax * this.middleSalary * this.vacancies}`;
}

console.log(getMyTaxes.call(ukraine, 10000));
console.log(getMyTaxes.call(litva, 10000));
console.log(getMiddleTaxes.call(latvia));
console.log(getTotalTaxes.call(ukraine));
console.log(getTotalTaxes.call(litva));
console.log(getTotalTaxes.call(latvia));