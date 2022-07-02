"use strict";

// const arr = [1, 2, 3, 4];

// // massivga qo'shish va olib tashlash
// // arr.push(5);

// // console.log(arr);

// // for (let key of arr) {
// //   console.log(key);
// // }

// arr.forEach(function (item, index, arr) {
//   console.log(item);
// } );
function shoh() {
  document.body.style.backgroundColor="red"
}
function back() {
  document.body.style.backgroundColor="white"
}
// function

const number = [2, 10, 15, 17, 20];

number.sort(sortArr);
console.log(number);

function sortArr(a, b) {
  return a-b;
}


 