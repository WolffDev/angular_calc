import { Injectable } from '@angular/core';
import { Observable, Subject, interval } from 'rxjs';
import { debounceTime, filter, tap } from 'rxjs/operators';

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
    const allowedKeys = [
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
      'Enter',
      'Escape',
    ];
    return allowedKeys.includes(key);
  }

  emitKeyEvent(event: KeyboardEvent): void {
    this.keyEventSubject.next(event);
  }
}
