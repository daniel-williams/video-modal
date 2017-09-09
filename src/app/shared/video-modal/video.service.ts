import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';


const TEST_VIDEO_URL = 'test-video.mp4';

@Injectable()
export class VideoService {

  url: BehaviorSubject<string> = new BehaviorSubject(TEST_VIDEO_URL);

  getNextVideo(): Observable<string> {
    return this.url;
  }
}