import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { NewTask } from "./new-task/new-task";
import { TaskItem } from "./task-item/task-item";
import { TaskList } from "./task-list/task-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, NewTask, TaskItem, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task3');
}
