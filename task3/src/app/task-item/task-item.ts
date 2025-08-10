import { Component, input, inject } from '@angular/core';
import { Task } from '../task.module';
import { DatePipe } from '@angular/common';
import { TaskService } from '../task-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-item',
  standalone: true,
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
  imports: [DatePipe],
})
export class TaskItem {
  constructor(private router: Router) {}

  task = input.required<Task>();
  currentDate: Date = new Date();
  taskService = inject(TaskService);

  get isFuture(): boolean {
    return new Date(this.task().date) > this.currentDate;
  }

  get isToday(): boolean {
    const taskDate = new Date(this.task().date);
    const today = new Date();

    return (
      taskDate.getDate() === today.getDate() &&
      taskDate.getMonth() === today.getMonth() &&
      taskDate.getFullYear() === today.getFullYear()
    );
  }

  get color(): string {
    if (this.isToday) {
      return 'today-task';
    } else if (this.isFuture) {
      return 'future-task';
    } else {
      return 'past-task';
    }
  }

  onDelete() {
    this.taskService.deleteTask(this.task().id);
  }

  onEdit(id: string) {
    this.taskService.setTaskToEdit(this.task());
    this.router.navigate(['/tasks/edit', id]);
  }
}
