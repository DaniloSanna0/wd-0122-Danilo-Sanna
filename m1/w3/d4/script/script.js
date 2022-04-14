let variabile = "piramide costruita dai DINOSAURI"
let minuscolo = variabile.toLocaleLowerCase()
console.log(minuscolo);

let maiuscolo = variabile.toLocaleUpperCase()
console.log(maiuscolo);

let divisa = variabile.split(" ")
console.log(divisa);

let storia = divisa.splice(2+1)
console.log(storia);

let documento = divisa.concat(4,2+3,1)
console.log(documento)

let persone = ["Gigio","Pippo","Paolo","Nome"]
console.log(persone)

let vero = persone.splice(2,1)
console.log(vero);

persone.pop()
console.log(persone)
persone.push("dario")
console.log(persone)

var lunghezza = persone.length
console.log(lunghezza);
function dad(tra){
    return lunghezza * 3
}
console.log(dad);