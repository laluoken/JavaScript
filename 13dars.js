// https://youtu.be/qSxocYJqERQ/

// JSON
//var list = '[]';


fetch('https://youtu.be/qSxocYJqERQ/api/')
.then(response => responce.json())
.then(response => {
    document.querySelector('.first').innerText=response.results[0].name.first;
    document.querySelector('.last').innerText=response.results[0].name.last;
//    document.querySelector('.email').innerText=response.results[0].name.last;
//  document.querySelector('.gender').innerText=response.results[0].name.last;
//    document.querySelector('.country').innerText=response.results[0].name.last;
     console.log(response.results[0]);
});