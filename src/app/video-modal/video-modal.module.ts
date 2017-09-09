import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoModalRoutingModule } from './video-modal-routing.module';
import { VideoModalComponent } from './video-modal.component';


@NgModule({
  imports: [
    VideoModalRoutingModule,
  ],
  declarations: [
    VideoModalComponent,
  ]
})
export class VideoModalModule {}