import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';


export const studyData = {
  "2198596A": {},
  "2198596AA": {},
  "2198596AB": {},
  "2198596AC": {},
  "2198596AD": {},
};


@Injectable()
export class StudyService {

  _userIds: BehaviorSubject<string[]>;

  constructor() {
    this._userIds = new BehaviorSubject(Object.keys(studyData));
  }

  get userIds(): Observable<string[]> {
    return this._userIds;
  }
}