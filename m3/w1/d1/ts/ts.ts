
let g1:any = document.querySelector("#giocatore1");
let g2:any = document.querySelector("#giocatore2");
let b:any = document.querySelector("#vai");

// let form:any = document.querySelector('form')
// form.addEventListener('click', function(e){
    //     e.preventDefault()
    // })
    
    b.addEventListener('click',function(){
        let x = g1.value
        let y = g2.value
        vincitore(x,y)
    })

    function vincitore(g1:number,g2:number){
    var e:any = document.querySelector("#math");
    e.innerHTML = Math.round(Math.random()*10);
    if(g1 == e.innerHTML){
        alert("Giocatore1 ci hai azzeccato!!");
    }else{
        var scarto1 = Math.abs(e.innerHTML - g1);
    }
    if(g2 == e.innerHTML){
        alert("Giocatore2 ci hai azzeccato!!");
    }else{
        var scarto2 = Math.abs(e.innerHTML - g2);

    }if(scarto1! < scarto2!){
        alert("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più il numero era " + e.innerHTML);
    }
    else{
        alert("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più il numero era " + e.innerHTML);
    }
}