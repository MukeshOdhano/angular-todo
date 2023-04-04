import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter()
  title:string;
  subtitle: string;
  description: string;
  active: Boolean;

  
  constructor(){
    this.title = ""
    this.subtitle = ""
    this.description = ""
    this.active= true
  }

  
  onSubmit(){
     const todo = {
      title: this.title,
      subtitle: this.subtitle,
      description: this.description,
      active: true
    }
    this.todoAdd.emit(todo)
  }

}

