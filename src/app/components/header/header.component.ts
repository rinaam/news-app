import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
export type headerLinksT = {
  to: string;
  title: string;
};
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() headerLinks: headerLinksT;
  constructor(private router: Router) {}

  onSearch(e: KeyboardEvent): void {
    this.router.navigate(['search', (e.target as HTMLInputElement).value]);
  }
}
