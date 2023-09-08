import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  scrollY = new BehaviorSubject(0);
  scrollY$ = this.scrollY.asObservable();

  readonly messageSource = new BehaviorSubject('inActive');

  currentMessage = this.messageSource.asObservable();

  changeMessage(message: any): void {
    this.messageSource.next(message);
  }

  updateScrollY(value: number): void {
    this.scrollY.next(value);
  }

  constructor() {}
}
