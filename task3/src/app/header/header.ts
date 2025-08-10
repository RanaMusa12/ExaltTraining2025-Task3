import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  changeTitle() {
    const Pagetitle = document.querySelector('#title');
    Pagetitle!.textContent = 'Events';

    const newEventBtn = document.querySelector('#newEventBtn');
    newEventBtn?.classList.remove('hidden');
  }
  changeTitle2() {
    const Pagetitle = document.querySelector('#title');
    Pagetitle!.textContent = 'Create a new Event';

    const newEventBtn = document.querySelector('#newEventBtn');
    newEventBtn?.classList.add('hidden');
  }
}
