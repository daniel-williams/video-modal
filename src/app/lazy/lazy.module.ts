import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { VideoModalModule } from '../video-modal';

import { LazyComponent } from './lazy.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule,
    VideoModalModule,
  ],
  declarations: [
    LazyComponent,
  ]
})
export class LazyModule {}