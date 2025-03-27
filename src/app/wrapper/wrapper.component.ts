import { Component } from '@angular/core';
import { FormComponent } from "../form/form.component";


@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css'
})
export class WrapperComponent {todos: string[] = []; 

  addTodo(newTodo: string) {
    console.log('New Todo:', newTodo); 
    this.todos.push(newTodo); 
  }
}


