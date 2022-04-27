function start() {

    let budget = 1000
    let spesa = 0

    while (budget > 0) {

        let prezzi = Math.round(Math.random() * 100);

        if (prezzi <= budget){

           spesa += 1
           budget -= prezzi
           document.getElementById('budget').innerHTML += '<p> Ammontare della spesa: € ' + prezzi + '<br>Nuovo budget aggiornato: € ' + budget + '<p>';
        }

        if (budget < 200) {
            document.getElementById('messaggio2').innerHTML = 'hai meno di 200€. Ora basta sei povero';
            break;
        }

    }
    
    document.getElementById('budget').innerHTML += '<p>Hai acquistato: ' + spesa + ' oggetti </p>';
}