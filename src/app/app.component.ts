import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo_List';
  name = 'dev';
  constructor(){


    // setTimeout(()=>{
    //   this.title = "new Todo List";
    //   this.name = "Mukesh"
    // }, 3000)
  }
}
