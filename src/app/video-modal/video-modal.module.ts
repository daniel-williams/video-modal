import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoModalRoutingModule } from './video-modal-routing.module';
import { DemoComponent } from './demo.component';
import { VideoModalComponent } from './video-modal.component';


@NgModule({
  imports: [
    VideoModalRoutingModule,
  ],
  declarations: [
    DemoComponent,
    VideoModalComponent,
  ],
  exports: [
    VideoModalComponent
  ]
})
export class VideoModalModule {}