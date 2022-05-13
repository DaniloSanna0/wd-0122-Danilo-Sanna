const APPURL = '../json/users.json'

let tabella = document.querySelector('#utenti')

fetch(APPURL)
.then(res => res.json())
.then(res => {

    console.log(res);

    for(let utente of res){
                
        let tr = document.createElement('tr')

        let tdFakeNome = document.createElement('td')
        tdFakeNome.innerHTML = utente.username

        let tdVeronome = document.createElement('td')
        tdVeronome.innerHTML = utente.firstName

        let tdCognome = document.createElement('td')
        tdCognome.innerHTML = utente.lastName

        let tdSesso = document.createElement('td')
        tdSesso.innerHTML = utente.gender
        
        let tdFoto = document.createElement('td')
        let imgFoto = document.createElement('img')
        imgFoto.src = utente.profileURL
        
        let tdEmail = document.createElement('td')
        tdEmail.innerHTML = utente.email

        tdFoto.append(imgFoto)
        tr.append(tdFakeNome,tdVeronome,tdCognome,tdSesso,tdFoto,tdEmail)

        tabella.append(tr)
    }
})
       
