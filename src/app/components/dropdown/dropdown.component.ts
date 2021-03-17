import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() options: string[] = [];
  @Input() title: string = '';
  @Input() selectedValue: string = '';
  @Output() handleChange = new EventEmitter<any>();

  onChange(): void {
    this.handleChange.emit(this.selectedValue);
  }
}
