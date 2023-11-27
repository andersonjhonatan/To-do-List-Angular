import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-add-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-add-tasks.component.html',
  styleUrl: './input-add-tasks.component.css'
})
export class InputAddTasksComponent {

  /* Input */
  public placeholder: string = "Digite sua nova task aqui";

}
