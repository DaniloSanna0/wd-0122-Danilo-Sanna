var a = 3 
var b = 5
var c = a + b 
document.write(c + c - b +3*a)

const PASSWORD ='OWNFH48008RWHFW'
console.log(PASSWORD);
console.log('%c log colorato','color:red;font-size:30px');
document.write("rosso")
// PASSWORD = r33rwdfw error
var x = 1;
{
    console.log(x);
}

let y = 2;
{
    console.log(y);
}


{
    var x2 = 1;
    console.log(x2);
}
console.log(x2);//essendo che var ignora il block scope la variabile è raggiungibile

{
    let y2 = 2;//questa è una variabile locale, che appartiene al blocco
    console.log(y2);
}
// console.log(y2);  errore: y2 non è definita
function scriviSaluto(){
    var s = 'HI';
    document.write(s)
    return s;
}

console.log(scriviSaluto());

scriviSaluto();
let testo = '4';
document.write("<br>")
document.write(testo + a)
document.write("<br>")
document.write(testo * a)