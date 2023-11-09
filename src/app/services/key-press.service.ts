import { Injectable } from '@angular/core';
import { Observable, Subject, interval } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class KeyPressService {
  private keyEventSubject: Subject<KeyboardEvent> = new Subject();
  private keyEventObservable: Observable<KeyboardEvent> = this.keyEventSubject
    .asObservable()
    .pipe(filter((event) => this.allowedKey(event.key)));

  public get keyEvent$(): Observable<KeyboardEvent> {
    return this.keyEventObservable;
  }

  private allowedKey(key: string): boolean {
    return this.allowedKeys.includes(key);
  }

  emitKeyEvent(event: KeyboardEvent): void {
    this.keyEventSubject.next(event);
  }

  get allowedKeys(): string[] {
    return [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '+',
      '-',
      '*',
      '/',
      '=',
      ',',
      'Enter',
      'Escape',
      'Backspace',
    ];
  }
}
