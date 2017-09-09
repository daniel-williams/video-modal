import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoModalComponent } from './video-modal.component';
import { VideoService } from './video.service';


@NgModule({
  imports: [
  ],
  declarations: [
    VideoModalComponent,
  ],
  exports: [
    VideoModalComponent
  ],
  providers: [
    VideoService
  ]
})
export class VideoModalModule {}