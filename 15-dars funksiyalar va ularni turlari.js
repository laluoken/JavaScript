"use strict"
// function declaration

returnNumber();

function  returnNumber() {
  console.log(19);
}

// function expression
const funcExpr = function() {
  console.log(19);
}
funcExpr();

//array function
const arrayFunction = (c, d) => c + d;

const plus = arrayFunction(10, 19);
console.log(plus);