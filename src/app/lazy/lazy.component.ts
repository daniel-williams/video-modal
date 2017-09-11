import { Component } from '@angular/core';

import { StudyService } from '../shared';


@Component({
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent {
  users: string[];

  constructor(private ss: StudyService) {
    ss.userIds.subscribe(x => this.users = x);
  }
}