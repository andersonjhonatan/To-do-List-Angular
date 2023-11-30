import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeleteAllComponent } from '../delete-all/delete-all.component';
import { InputAddTasksComponent } from '../input-add-tasks/input-add-tasks.component';
import { TaskModel } from '../../pages/interface/model';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DeleteAllComponent,
    InputAddTasksComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  ngOnInit(): void {
    this.sortTasks();
  }
  /* Imagem */
  public logo: string = './assets/bg-task.png';
  public alt: string = 'logo';

  public tasks: TaskModel = {
    task: [
      {
        task: 'Tarefa 1',
        checked: false,
      },
    ],
  };

  public deleteTask(i: number): void {
    this.sortTasks();

    this.tasks.task.splice(i, 1);
  }

  public setTaskEmmit(event: string): void {
    if (event.length > 0) {
      this.tasks.task.push({ task: event, checked: false });
      this.sortTasks();

    }
  }

  public deleteAll(): void {
    const confirm = window.confirm(
      'Tem certeza que deseja deletar todas as tarefas?'
    );

    if (confirm) {
      this.tasks.task = [];
    }
  }

  public onCheckboxChange(index: number): void {
    // Troca o estado do checkbox
    this.tasks.task[index].checked = !this.tasks.task[index].checked;

    // Reordena a lista ao marcar/desmarcar um item
    this.sortTasks();
  }

  private sortTasks(): void {
    this.tasks.task.sort((a, b) =>
      a.checked === b.checked ? 0 : a.checked ? 1 : -1
    );
  }
}
