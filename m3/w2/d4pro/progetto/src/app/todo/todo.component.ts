import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../todo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})



export class TodoComponent implements OnInit {

  
  // newU:Todo|undefined = undefined;

  todoa:Todo = {
    id : 0,
    title : '',
    completed : false
  }

  arrey1:Todo[] = [];

  constructor(private todo: TodosService) {

   }
  
  ngOnInit(): void {
   

  }
  
  add(){
    this.arrey1 = this.todo.aggiungi(this.todoa.title)
    // console.log(this.todoa.title);
    
  }

  remove(){
    this.todo.elimina(this.todoa.id)
  }
  
}