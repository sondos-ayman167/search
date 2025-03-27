import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  
  @Input() todos: { text: string; completed: boolean }[] = [];
  @Output() deleteTask = new EventEmitter<any>();
  @Output() toggleTask = new EventEmitter<any>();

  removeTask(index: any) {
    this.deleteTask.emit(index);
  }

  markComplete(index: any) {
    this.toggleTask.emit(index);
  }
}



