function aggiungiNumero(bottone){

    let numero = bottone.innerHTML;

    let display = document.querySelector('#display')

    display.value += numero
}

function risultato(){
    let display = document.querySelector('#display');
    
    let totale = eval(display.value)

    display.value = totale
}

function moltiplicazione(){ let display = document.querySelector('#display'); display.value += '*'}

function cancella(){ let display = document.querySelector('#display'); display.value = ''}

const audio = new Audio('https://www.soundjay.com/buttons/beep-01a.mp3')
const button = document.querySelector('button')

button.addEventListener('click', (e) => {
  audio.play()
})