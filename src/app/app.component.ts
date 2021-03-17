import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'news-app';
  headerLinks = [
    {
      to: 'home',
      title: 'Home',
    },
    {
      to: 'sources',
      title: 'Sources',
    },
  ];
}
