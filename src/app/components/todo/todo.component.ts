import { Component, Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})



export class TodoComponent {
  localItem: string | null;
  todos: Todo[];

  constructor(){
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos = []
    }
    else{
      this.todos = JSON.parse(this.localItem)
    }
  }

  deleteTodo(todo: Todo){
    console.log(todo)
    let index = this.todos.indexOf(todo)
    // console.log(index)
    this.todos.splice(index, 1)
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
  addTodo(todo: Todo){
    console.log(todo)
    this.todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
  toggleTodoActive(todo:Todo){
    let index = this.todos.indexOf(todo)
    // console.log(index)
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
}
