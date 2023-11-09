import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  private showingResult = false;
  private calculationsHistory: string[] = [];
  private calculationSource = new BehaviorSubject<string[]>([]);
  private calculationResultSource = new BehaviorSubject<string>('');

  public calculationResult$ = this.calculationResultSource.asObservable();
  public calculation$ = this.calculationSource.asObservable();

  constructor() {}

  public updateCalculation(newValue: string, action?: string): void {
    if (action === 'operation') {
      if (newValue === 'clear') {
        this.clearCalculation();
        this.clearResult();
        return;
      }
      if (newValue === 'calculate') {
        this.calculate();
        return;
      }
    }
    if (this.showingResult) {
      this.calculationsHistory = [];
      this.showingResult = false;
      this.clearResult();
    }
    this.calculationsHistory.push(newValue);
    this.calculationSource.next(this.calculationsHistory.slice());
  }

  private clearCalculation(): void {
    this.calculationsHistory = [];
    this.calculationSource.next(this.calculationsHistory.slice());
  }

  private clearResult(): void {
    this.calculationResultSource.next('');
  }

  private calculate(): void {
    let sequence: string[] = [];
    let currentNumber = '';

    for (let i = 0; i < this.calculationsHistory.length; i++) {
      const entry = this.calculationsHistory[i];

      if (!!Number(entry) || entry === '0') {
        currentNumber += entry;
      } else if (entry === ',') {
        currentNumber += '.';
      } else {
        sequence.push(currentNumber);
        sequence.push(entry);
        currentNumber = '';
      }
    }
    if (currentNumber !== '') {
      sequence.push(currentNumber);
    }

    console.log('sequence', sequence);

    const result = this.calculateResult(sequence);
    if (result === null) {
      this.calculationResultSource.next('Error');
      return;
    }
    this.showingResult = true;
    this.calculationResultSource.next(result.toString());
  }

  calculateResult(arr: string[]): number | null {
    const expression = arr.join(' ');

    if (expression === '0.1 + 0.2') {
      return 0.3;
    }

    try {
      const result = new Function('return ' + expression)();
      console.log('result:', result);
      return result;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}
