'use strict';

const oilPrice = 15.678, 
    gasPrice = 123.965, 
    goldPrice = 90.2345,
    shoppingBudget = 500;

const maxPrice = Math.max(oilPrice, gasPrice, goldPrice);
const minPrice = Math.min(oilPrice, gasPrice, goldPrice);

const totalPrice = oilPrice + gasPrice + goldPrice;
const roundPricesSum = Math.floor(oilPrice) + Math.floor(gasPrice) + Math.floor(goldPrice);
const roundToHundredPricesSum = Math.round(totalPrice / 100) * 100;
const isEvenTotalPrice = (roundPricesSum % 2 === 0) ? true : false;
const restAfterShoping = shoppingBudget - totalPrice;
const averagePrice = (totalPrice / 3).toFixed(2);
const clientDiscount = Math.ceil(Math.random()*100);

const priceWithDiscount = (totalPrice - totalPrice*(clientDiscount / 100)).toFixed(2); 
const clearProfit = ((totalPrice / 2 ) - totalPrice*(clientDiscount / 100)).toFixed(2);

const infoString = `Max price is ${maxPrice};\nMin price is ${minPrice}\nTotal price is ${totalPrice}\nPrice after rounding is ${roundPricesSum}\nPrice after rounding to hundreds is ${roundToHundredPricesSum}\nIs total price is even - ${isEvenTotalPrice}\nRest of money if you'll pay 500 - ${restAfterShoping}\nAverage price ${averagePrice}\nClient discount is ${clientDiscount}\nPrice with discount is ${priceWithDiscount}\nYour clear profit ${clearProfit}`;
console.log(infoString);