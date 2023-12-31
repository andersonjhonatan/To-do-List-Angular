import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { MainComponent } from '../../components/main/main.component';
import { InputAddTasksComponent } from '../../components/input-add-tasks/input-add-tasks.component';
import { DeleteAllComponent } from '../../components/delete-all/delete-all.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MainComponent,
    InputAddTasksComponent,
    DeleteAllComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {


}
