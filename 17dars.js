
var belgilar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?><":}{?!@#$';

function parolBer(){
    var i=0;
    var parol='';

    while(i < 8){
        var son = parseInt(Math.random() * belgilar.length);
        console.log(son, belgilar[son]);
        parol += belgilar[son];
        i++;
    }

    document.querySelector ('input').value = parol;




}   