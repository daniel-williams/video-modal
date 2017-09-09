import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { VideoModalComponent } from './video-modal.component';


const routes: Route[] = [
  {
    path: '',
    component: VideoModalComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class VideoModalRoutingModule {}