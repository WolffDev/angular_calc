import { Component, HostListener } from '@angular/core';
import { KeyPressService } from './services/key-press.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-calculator';

  constructor(private keyPressService: KeyPressService) {}

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    this.keyPressService.emitKeyEvent(event);
  }
}

/**
 * <Wrapper>
 * <Display> positive numbers in green and negative numbers in red. Show the result of the calculation
 * <Button> 2 color variants and 3 shapes
 * Service that handles the calculations
 * Observable that emits the result of the calculation
 * Observable that listen to the button clicks and sends it to the service
 * Keyboard support for numbers and calculations
 *
 * BONUS:
 * - dark mode
 * - history of the calculations
 * - able to clear the history
 * - able to delete left
 */
