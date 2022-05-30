import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  users:{username:string, name:string, id:number}[] = [];
  userFocus:{username:string, name:string, id:number}|null = null;

  title = 'episodio';
  ciccio = 'Psycho';
  episodi = ['Post-Umano','Benvenuto nella Giungla', 'la causa di tutti i mali','Via Le Sicure', 'stella rossa', 'Solo Umano','Dei e Mostri']
  cambia(n:string){
    this.title = n
    this.episodi.push(this.ciccio)
  }

  
  ngOnInit(){
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(res => {
      this.users = res
    })
  }

  details(id:number){
    this.users.forEach((e, i) => {
      if(e.id === id)
      this.userFocus = e
    })
  }

  elimina(id:number){
    let newArray:{username:string, name:string, id:number}[] = []
    this.users.forEach((e, i) => {
      if(e.id != id)
        newArray.push(e)
    })
    this.users = newArray
  }

  aggiungi(){
    let n:string|null = prompt('Inserire nome')
    let u:string|null = prompt('Inserire username')
    if(n && u){
      let newU = {
        username: u,
        name: n,
        id: this.users.length
      }
      this.users.push(newU)
    }
  }
}
