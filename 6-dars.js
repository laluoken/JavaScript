// function - функция (для разделения кодов);
function className(aClass = 'aClass ',bClass = 15){
  console.log('number and string' + aClass + bClass);
};
className();//обязательно
// return - повторяет в начало информации (тут начало тег --> some(20);)
function some(song){
  if(song < 10){
    return "It's  if  "
  }else{
    return "It's  else"
  }
} 
some(20);
let here = some(15);
console.log(here);