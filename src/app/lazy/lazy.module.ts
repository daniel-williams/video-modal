import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { SharedModule } from '../shared';

import { LazyComponent } from './lazy.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule,
    SharedModule,
  ],
  declarations: [
    LazyComponent,
  ]
})
export class LazyModule {}