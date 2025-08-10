import { Routes } from '@angular/router';
import { NewTask } from './new-task/new-task';
import { TaskList } from './task-list/task-list';

export const routes: Routes = [
  {
    path: '',
    component: NewTask,
  },

  {
    path: 'tasks/all',
    component: TaskList,
  },
  {
    path: 'tasks/new',
    component: NewTask,
  },
  {
    path: 'tasks/edit/:id',
    component: NewTask,
  },
];
