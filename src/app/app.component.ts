import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Guid } from "guid-typescript";
import { Todo } from "src/models/todo.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppCompenet {
  todos: Todo[] = []

  onSubmit(form: NgForm){
    let todo = this.todos.filter(x=>x.id === id)[0];
    todo.isComplete = true;
  }

  onDelete(id: Guid){
    let todo = this.todos.filter(x=>x.id === id)[0];
    let index = this.todos.indexOf(todo, 0);
    if(index > -1){
      this.todos.splice(index,1);
    }
  }
}