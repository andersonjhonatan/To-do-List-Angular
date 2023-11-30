import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-add-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-add-tasks.component.html',
  styleUrl: './input-add-tasks.component.css',
})
export class InputAddTasksComponent {
  /* Input */
  public placeholder: string = 'Digite sua nova task aqui';

  @Output() public newTaskEmmitter = new EventEmitter();

  public newTask: string = '';

  public addTask(): void {
    this.newTaskEmmitter.emit(this.newTask);
    this.newTask = '';
  }
}
