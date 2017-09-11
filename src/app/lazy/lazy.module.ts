import { NgModule } from '@angular/core';

import { LazyRoutingModule } from './lazy-routing.module';
import { SharedModule } from '../shared';

import { LazyComponent } from './lazy.component';


@NgModule({
  imports: [
    LazyRoutingModule,
    SharedModule,
  ],
  declarations: [
    LazyComponent,
  ]
})
export class LazyModule {}