'use strict';

let oilPrice = 15.678, 
    gasPrice = 123.965, 
    goldPrice = 90.2345,
    shoppingBudget = 500;

let maxPrice = Math.max(oilPrice, gasPrice, goldPrice);
let minPrice = Math.min(oilPrice, gasPrice, goldPrice);

let totalPrice = oilPrice + gasPrice + goldPrice;
let roundPricesSum = Math.floor(oilPrice) + Math.floor(gasPrice) + Math.floor(goldPrice);
let roundToHundredPricesSum = Math.round(totalPrice / 100) * 100;
let isEvenTotalPrice = (roundPricesSum % 2 === 0) ? true : false;
let restAfterShoping = shoppingBudget - totalPrice;
let averagePrice = (totalPrice / 3).toFixed(2);
let clientDiscount = Math.ceil(Math.random()*100);

let priceWithDiscount = (totalPrice - totalPrice*(clientDiscount / 100)).toFixed(2); 
let clearProfit = ((totalPrice / 2 ) - totalPrice*(clientDiscount / 100)).toFixed(2);

let infoString = `Max price is ${maxPrice};\nMin price is ${minPrice}\nTotal price is ${totalPrice}\nPrice after rounding is ${roundPricesSum}\nPrice after rounding to hundreds is ${roundToHundredPricesSum}\nIs total price is even - ${isEvenTotalPrice}\nRest of money if you'll pay 500 - ${restAfterShoping}\nAverage price ${averagePrice}\nClient discount is ${clientDiscount}\nPrice with discount is ${priceWithDiscount}\nYour clear profit ${clearProfit}`;
console.log(infoString);