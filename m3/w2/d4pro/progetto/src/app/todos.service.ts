import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  array:Todo[] = []

  newU:Todo|undefined = undefined;
  i:number=0;
  id!: number;

  constructor() { 
    
  }

  elimina(id:number){
    this.array.forEach((e, i) => {
      if(e.id != id)
        this.array.splice(id)
    })
  }

  aggiungi(testo:string){
       this.newU= {
        title: testo,
        id: this.array.length,
        completed: false
      }
      
    this.array.push(this.newU)
    // console.log(this.array);
    return (this.array)
  //   return new Promise((succ, err)=>{
  //     setTimeout(()=>
  //       succ(this.newU)
  //     ,2000)
  //   })
  // }


}}
