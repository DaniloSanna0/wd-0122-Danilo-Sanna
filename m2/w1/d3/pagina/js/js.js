function tito(){
       document.getElementById('tito').style.fontSize = '100px'
}
function pic(){
       document.getElementById('tito').style.fontSize = '10px'
}
function col(){
       document.getElementById('tito').style.color = 'red'
}
function bold(){
       document.getElementById('tito').style.fontWeight = '100'
}

// impegni

let lista = document.querySelectorAll('li');

for (var i = 0; i < lista.length; i++) {

    lista[i].addEventListener('mouseover', function() {
        this.classList.add('selezione');
    });

    lista[i].addEventListener('mouseout', function() {
        this.classList.remove('selezione');
    });

    lista[i].addEventListener('click', function() {
        this.classList.toggle('fatto');
    });
}
