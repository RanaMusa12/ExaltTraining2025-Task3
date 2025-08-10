import { Injectable, signal } from '@angular/core';
import { Task } from './task.module';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  AllTasks = signal<Task[]>([]);

  addTask(task: Task) {
    this.AllTasks.update((tasks) => [...tasks, task]);
    console.log('Task added:', this.AllTasks());
  }
  deleteTask(taskId: string) {
    this.AllTasks.update((tasks) => tasks.filter((task) => task.id !== taskId));
    console.log('Task deleted:', taskId);
  }


  private taskToEdit?: Task;

  getTaskById(id: string): Task | undefined {
    return this.AllTasks().find((t) => t.id === id);
  }

  setTaskToEdit(task: Task) {
    this.taskToEdit = task;
  }

  getTaskToEdit(): Task | undefined {
    return this.taskToEdit;
  }

  updateTask(id: string, updatedTask: Task) {
    const index = this.AllTasks().findIndex((t) => t.id === id);
    if (index !== -1) {
      this.AllTasks()[index] = updatedTask;
    }
  }
}
