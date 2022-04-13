function calcolaAnni(compleanno) {
    return 2022 - compleanno;
}

let compleanno = 22
document.write(compleanno)

compleanno => 2022 - compleanno

function enter(){
let ingresso = (anni <18) ? 'ingresso vietato':'ingresso permesso';
}
let anni = 8
nonsocomesifa = () => console.log("tre")

function miaFunzione() {
    console.log('hello world');
}
miaFunzione();

const pensionamento = (compleanno, nome) => {
    const eta = 2022 - compleanno;
    const anniPensione = 65 - eta;
    //return anniPensione;
    return `${nome} va in pensione tra ${anniPensione} anni`;
}
console.log(pensionamento(1998,'Pinco'));

const calcolaSpesa = function(conto) {
    return conto >= 50 && conto <= 300 ? conto * 0.15 : conto * 0.2;
}

console.log(calcolaSpesa(320));