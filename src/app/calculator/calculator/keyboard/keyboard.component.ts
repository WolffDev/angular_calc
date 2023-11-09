import { Component, OnDestroy } from '@angular/core';
import { CalculatorService } from '../../calculator.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css'],
})
export class KeyboardComponent implements OnDestroy {
  buttons: Array<KeyboardButton[]> = [
    [
      { label: '7', value: 7, color: 'orange', layout: 'round' },
      { label: '8', value: 8, color: 'orange', layout: 'round' },
      { label: '9', value: 9, color: 'orange', layout: 'round' },
      {
        label: 'C',
        value: 'clear',
        action: 'operation',
        color: 'grey',
        layout: 'rect',
      },
    ],
    [
      { label: '4', value: 4, color: 'orange', layout: 'round' },
      { label: '5', value: 5, color: 'orange', layout: 'round' },
      { label: '6', value: 6, color: 'orange', layout: 'round' },
      {
        label: '/',
        value: '/',
        action: 'operation',
        color: 'grey',
        layout: 'rect',
      },
    ],
    [
      { label: '1', value: 1, color: 'orange', layout: 'round' },
      { label: '2', value: 2, color: 'orange', layout: 'round' },
      { label: '3', value: 3, color: 'orange', layout: 'round' },
      {
        label: '×',
        value: '*',
        action: 'operation',
        color: 'grey',
        layout: 'rect',
      },
    ],
    [
      { label: '0', value: 0, color: 'orange', layout: 'big' },
      { label: ',', value: ',', color: 'orange', layout: 'big' },
      {
        label: '-',
        value: '-',
        action: 'operation',
        color: 'grey',
        layout: 'rect',
      },
    ],
    [
      {
        label: '=',
        value: 'calculate',
        action: 'operation',
        color: 'grey',
        layout: 'long',
      },
      {
        label: '+',
        value: '+',
        action: 'operation',
        color: 'grey',
        layout: 'rect',
      },
    ],
  ];

  constructor(private calculatorService: CalculatorService) {}

  ngOnDestroy(): void {
    this.calculatorService.unsubscribeKeyEvent();
  }

  public handleClick(evetData: ButtonData): void {
    const { value, action } = evetData;
    this.calculatorService.updateCalculation(value.toString(), action);
  }
}

interface KeyboardButton {
  label: string;
  value: string | number;
  color: string;
  layout: string;
  action?: string;
}

export interface ButtonData {
  value: string | number;
  action?: string;
}
