import { Component } from '@angular/core';

import { VideoService } from '../shared/video-modal';


@Component({
  template: `
  <div class='card'>
    <div>Lazy loaded module</div>
    <video-modal>{{url}}</video-modal>
  </div>
  `,
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent {
  url: string = 'default';
  test: string = 'test';

  constructor(private videoSerivce: VideoService) {
    videoSerivce.getNextVideo().subscribe(x => this.url = x);
  }
}