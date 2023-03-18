import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'angular-100days';
  user = {
    name: 'Sam',
    age: 25,
  };
  isDanger = false
  isWarning = false
  listUser = [
    {
      name: 'A',
    },
    {
      name: 'B',
    },
    {
      name: 'C',
    },
    {
      name: 'D',
    },
    {
      name: 'E',
    },
    {
      name: 'F',
    },
  ];
}
