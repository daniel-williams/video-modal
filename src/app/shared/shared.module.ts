import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VideoModalModule } from './video-modal';

@NgModule({
  imports: [
    CommonModule,
    VideoModalModule,
  ],
  exports: [
    CommonModule,
    VideoModalModule,
    FormsModule,
  ]
})
export class SharedModule {}