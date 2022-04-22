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

let [persona1, persona2, persona3, persona4] = persone
console.log(persona3);

let vero = persone.splice(2,1)
console.log(vero);

let nomeEliminato = persone.pop()
console.log(persone)
persone.push("dario")
console.log(persone)

var lunghezza = persone.length

console.log(lunghezza);
function dad(tra){
    return lunghezza * 3
}
console.log(dad);

let festa = [3,6,9,7,4]

let x = 2

function mediainvitati(){
    console.log(([3] + [6] + [9] + [7]+ [4])/festa.length);
    return ([3] + [6] + [9] + [7]+ [4]/festa.length)
}
mediainvitati()


let n = [3,4,7,9]

function dispari(x) {
    if(x%2 == 0) {
        return false
    }
    return true
}
function disparix(){
    if (n[0]%2 == 0){
        console.log("false");
    }
}