import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';


const TITLE = 'Some Title';

@Injectable()
export class CoreService {

  title: BehaviorSubject<string> = new BehaviorSubject(TITLE);

  getTitle(): Observable<string> {
    return this.title;
  }
}