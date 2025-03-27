import { Component } from '@angular/core';
import { WrapperComponent } from './wrapper/wrapper.component';
// import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}



// import { Component } from '@angular/core';
// import { TodoWrapperComponent } from './todo-wrapper/todo-wrapper.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   template: '<app-todo-wrapper></app-todo-wrapper>',
//   imports: [TodoWrapperComponent]
// })
// export class AppComponent {}
