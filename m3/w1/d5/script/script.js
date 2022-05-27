"use strict";
class FirtsUser {
    constructor(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutidurata) {
        this.carica -= minutidurata * 0.20;
        this.numeroChiamate++;
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        //valore della variabile di istanza numeroChiamate
        return this.numeroChiamate;
    }
    azzeracChiamate() {
        this.numeroChiamate = 0;
    }
}
let primo = new FirtsUser(20, 0);
primo.ricarica(30);
primo.chiamata(40);
primo.chiamata(10);
// primo.numero404()
// primo.getNumeroChiamate()
// console.log(primo.carica);
// console.log(primo.numeroChiamate);
console.log("primo utente");
console.log("Credito residuo " + primo.numero404() + "€");
console.log("Numero chiamate " + primo.getNumeroChiamate());
class SecondUser {
    constructor(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutidurata) {
        this.carica -= minutidurata * 0.20;
        this.numeroChiamate++;
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        //valore della variabile di istanza numeroChiamate
        return this.numeroChiamate;
    }
    azzeracChiamate() {
        this.numeroChiamate = 0;
    }
}
let secondo = new SecondUser(20, 0);
secondo.ricarica(100);
secondo.chiamata(15);
secondo.chiamata(45);
secondo.chiamata(0);
secondo.chiamata(100);
console.log("secondo utente");
console.log("Credito residuo " + secondo.numero404() + "€");
console.log("Numero chiamate " + secondo.getNumeroChiamate());
class ThirdUser {
    constructor(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutidurata) {
        this.carica -= minutidurata * 0.20;
        this.numeroChiamate++;
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        //valore della variabile di istanza numeroChiamate
        return this.numeroChiamate;
    }
    azzeracChiamate() {
        this.numeroChiamate = 0;
    }
}
let terzo = new ThirdUser(20, 0);
terzo.chiamata(35);
terzo.chiamata(35);
terzo.chiamata(35);
terzo.chiamata(35);
terzo.chiamata(35);
terzo.chiamata(35);
terzo.ricarica(30);
console.log("terzo utente");
console.log("Credito residuo " + terzo.numero404() + "€");
console.log("Numero chiamate " + terzo.getNumeroChiamate());
//# sourceMappingURL=script.js.map