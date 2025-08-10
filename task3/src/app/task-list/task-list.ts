import { Component, inject } from '@angular/core';
import { TaskService } from '../task-service';
import { TaskItem } from '../task-item/task-item';

@Component({
  selector: 'app-task-list',
  imports: [TaskItem],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  taskService = inject(TaskService);
  tasks = this.taskService.AllTasks;
}
