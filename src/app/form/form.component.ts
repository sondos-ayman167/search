import { Component, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
 standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  todoText: string= '';

  @Output() todoAdded = new EventEmitter<string>();

  onSubmit() {
    if (this.todoText.trim()) {
      this.todoAdded.emit(this.todoText);
      this.todoText = '';
    }
  }
}
