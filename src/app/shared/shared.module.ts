import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VideoModalModule } from './video-modal';
import { StudyService } from './study.service';


@NgModule({
  imports: [
    CommonModule,
    VideoModalModule,
  ],
  exports: [
    CommonModule,
    VideoModalModule,
    FormsModule,
  ],
  providers: [
    StudyService,
  ]
})
export class SharedModule {}