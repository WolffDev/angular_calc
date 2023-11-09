import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorService } from './calculator.service';
import { DisplayComponent } from './calculator/display/display.component';
import { KeyboardComponent } from './calculator/keyboard/keyboard.component';
import { ButtonComponent } from './calculator/keyboard/button/button.component';
import { ColorizeNumberPipe } from '../pipes/colorize-number.pipe';

@NgModule({
  declarations: [
    CalculatorComponent,
    DisplayComponent,
    KeyboardComponent,
    ButtonComponent,
    ColorizeNumberPipe,
  ],
  imports: [CommonModule],
  exports: [CalculatorComponent],
  providers: [CalculatorService],
})
export class CalculatorModule {}
