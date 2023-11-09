import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonData } from '../keyboard.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Output() clicked = new EventEmitter<ButtonData>();
  @Input() label = '';
  @Input() value: string | number = '';
  @Input() color: string = '';
  @Input() layout = '';
  @Input() action? = '';

  handleClick(): void {
    this.clicked.emit({ value: this.value, action: this.action });
  }
}
