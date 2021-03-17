import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title: string = '';
  @Input() author: string = '';
  @Input() source: string = '';
  @Input() published: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
}
