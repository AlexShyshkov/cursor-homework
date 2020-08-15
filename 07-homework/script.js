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
    return this.tax * salary;
}

function getMiddleTaxes() {
    return this.tax * this.middleSalary;
}

function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}

function getMySalary(country) {
    const salaryObj = {};
    let salary = Math.round(Math.random()*(2000-1500+1)) + 1500,
        profit = salary - getMyTaxes.call(country, salary);

    salaryObj.salary = salary;
    salaryObj.tax = getMyTaxes.call(country, salary);
    salaryObj.profit = profit;
    
    console.log(salaryObj);
   
    setTimeout(getMySalary, 10000, country);
}

console.log(getMyTaxes.call(ukraine, 10000));
console.log(getMyTaxes.call(litva, 10000));
console.log(getMiddleTaxes.call(latvia));
console.log(getTotalTaxes.call(ukraine));
console.log(getTotalTaxes.call(litva));
console.log(getTotalTaxes.call(latvia));

setTimeout(getMySalary, 10000, litva);