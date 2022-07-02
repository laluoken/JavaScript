"use strict";

const person = {
  name: 'samar' ,
  lastName: 'badriddinov',
  age: 19,
  wishes: [],
  language: function() {},
  mother: {
    name: 'name',
  },
};

const obj = {
  name: "div",
  width: 400,
  height: 400,
  colors: {
    border: 'crimson',
    bg: "coral",
  },
};

//console.log(obj);
//delete obj.name;
//console.log(obj);

for (let key of obj) {
  console.log(`Property ${key} value ${obj[key]}`);
}