//  string's functions - строковые функции

// 1) trim - удаляет пустые места в начале и в конце текста
let func = " String's function ";
console.log(func.trim() + "удалить пустые ячейки");//сокрашенный
// 2) toUpperCase - делает текст крупнее & toLowerCase - делает текст меньше
let capitalize = "first Class";
console.log(capitalize.toUpperCase());//делает текст крупнее
console.log(capitalize.toLowerCase());//делает текст меньше
// 3) slice - показывает промежуток с начала до конца [such as --> from ... to ...]
let silk = "I'm from USA"
console.log(silk.slice(8));
console.log(silk.slice(-9).trim().toUpperCase());
console.log(silk.slice(3,7).toLowerCase());//from "I" to "fro"
// 4) charAt - тип, роль, образ в (somthing or classes in HTML)
let char = " character at second index "
console.log(char.charAt(3));
