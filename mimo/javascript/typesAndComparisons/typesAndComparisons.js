/*
const userPassword = "283746";
const savedPassword = "283746";
const isPasswordCorrect = userPassword === savedPassword;
console.log("Access granted: " + isPasswordCorrect);

const age = 23;
let ageCheck = age >= 21;
console.log("Of Legal Drinking Age: " + ageCheck);

const budget = 23;
const price = 80;
const hasEnoughMoney = price <= budget;
console.log("I have enough money:");
console.log(hasEnoughMoney);
*/

let price = 2.50;
let campers = 15;
let taxRate = 0.08;
let budget = 40;
let total = ((price * campers) * taxRate) + (price * campers);
let totalExceedsBudget = total > budget;
let taxApplied = total > price * campers;
console.log(price);
console.log(campers);
console.log(taxRate);
console.log(total);
console.log("Total Exceeds Budget? " + totalExceedsBudget);
console.log("Tax Applied? " + taxApplied);