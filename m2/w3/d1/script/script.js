function aggiungi() {
    //leggere i dati
    //creare l'utente
    let utente = new Utente(document.querySelector("#nome").value, document.querySelector("#cognome").value,
        document.querySelector("#nascita").value)
    // document.getElementsByClassName("test")[0].value
    // console.log(utente);
    //inserire utetnte nella tabella
    utente.aggiungiAllaPagina()
}

let bottone = document.querySelector("button")
bottone.addEventListener('click',() => {
    aggiungi()
 })

// let utente = {
//     nome: "Marco",
//     cognome: "Rossi",
//     nascita: new Date("1990/05/04")
// }
class Utente {
    constructor(n, c, dn) {
        this.nome = n
        this.cognome = c
        this.nascita = new Date(dn)
        console.log("Oggetto costruito")
    }

    getFullName() {
        return this.nome + " " + this.cognome
    }

    getEta() {
        let oggi = new Date()
        oggi = oggi.getFullYear()
        return oggi - this.nascita.getFullYear()
    }

    aggiungiAllaPagina() {
        let row = document.createElement("div")
        row.classList.add("row")
        let colNome = document.createElement("div")
        colNome.classList.add("col")
        let colEta = document.createElement("div")
        colEta.classList.add("col")

        colNome.innerText = this.getFullName()
        colEta.innerText = this.getEta()

        row.append(colNome, colEta)

        document.querySelector("#table").append(row);
    }
}



















// let testo = document.querySelector('.text')
// let bottone = document.querySelector('#button')
// let lista = document.querySelector('#lista')

// bottone.addEventListener('click',function(){

//     let div = document.createElement('div')
//     div.innerHTML = testo.value

//    lista.append(div);

//    testo.value = ''

// })