import { Component, OnDestroy, OnInit } from '@angular/core';
import { CalculatorService } from '../../calculator.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit, OnDestroy {
  calculationSequence: string = '';
  calculationResult: string = '';

  private calculationSubscription!: Subscription;
  private calculationResultSubscription!: Subscription;
  constructor(public calcService: CalculatorService) {}

  ngOnInit(): void {
    this.calculationSubscription = this.calcService.calculation$.subscribe(
      (calculation) => {
        this.calculationSequence = calculation.join('');
      }
    );

    this.calculationResultSubscription =
      this.calcService.calculationResult$.subscribe((result) => {
        this.calculationResult = result;
      });
  }

  ngOnDestroy(): void {
    this.calculationSubscription.unsubscribe;
    this.calculationResultSubscription.unsubscribe();
  }
}
