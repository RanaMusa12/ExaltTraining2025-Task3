import { Component, signal, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task.module';
import { TaskService } from '../task-service';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule, RouterLink],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask implements OnInit {
  title: string = '';
  description: string = '';
  date: Date = new Date();
  id: string = '';
  taskServise = inject(TaskService);

  constructor(
    private route: ActivatedRoute,
    private taskService2: TaskService,
    private router: Router
  ) {}
  taskService = inject(TaskService);
  tasks = this.taskService.AllTasks();
  isEditMode = false;
  editedTaskId: string | null = null;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const addbutton = document.querySelector('#addButton');

    if (id) {
      this.isEditMode = true;
      this.editedTaskId = id;

      const task = this.taskService2.getTaskToEdit();

      if (task) {
        this.title = task.title;
        this.description = task.description;
        this.date = task.date;

        if (addbutton) {
          addbutton.textContent = 'Save';
        }
      }
    }
  }

  onAdd() {
    const message = document.querySelector('#message');
    if (this.title && this.description && this.date) {
      const newTask: Task = {
        title: this.title,
        description: this.description,
        date: this.date,
        id: Math.random().toString(),
      };

      if (this.isEditMode && this.editedTaskId) {
        this.taskService.updateTask(this.editedTaskId, {
          id: this.editedTaskId,
          title: newTask.title,
          description: newTask.description,
          date: newTask.date,
        });
        this.router.navigate(['/tasks/all']);
        console.log(newTask.date);
      } else {
        const addbutton = document.querySelector('#addButton');
        if (addbutton) {
        }
        this.taskServise.addTask(newTask);
      }

      // Reset form fields
      this.title = '';
      this.description = '';
      this.date = new Date();

      message!.textContent = 'Task added successfully!';
      message!.classList.add('visible');
      setTimeout(() => {
        message!.classList.remove('visible');
        message!.classList.add('hidden');
      }, 2000);
    } else {
      message!.textContent = 'Fill all fields!';
      message!.classList.add('visible');
    }
  }

  changeTitle() {
    const Pagetitle = document.querySelector('#title');
    Pagetitle!.textContent = 'Events';

    const newEventBtn = document.querySelector('#newEventBtn');
    newEventBtn?.classList.remove('hidden');
  }
}
