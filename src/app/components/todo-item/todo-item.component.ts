import { NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from "node:events"

import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  
  @Input() i: number; 
  @Input() todo: Todo; // 'todo' is defined as an input property
  @Output() todoDlt: EventEmitter<Todo> = new EventEmitter()
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter()


  constructor(){
    this.i = 0;

    this.todo  = {

      title: "title",
      subtitle: "subtitle",
      description: 'description',
      active: true
    }
  }
  onClick(todo: Todo){
    this.todoDlt.emit(todo);
  
  }
  onActive(todo: Todo) {
    this.todoCheckBox.emit(todo)
  }
  
}
