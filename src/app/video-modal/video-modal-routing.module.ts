import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { DemoComponent } from './demo.component';
import { VideoModalComponent } from './video-modal.component';


const routes: Route[] = [
  {
    path: '',
    component: DemoComponent
    // component: VideoModalComponent
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