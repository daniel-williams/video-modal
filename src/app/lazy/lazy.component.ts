import { Component } from '@angular/core';

@Component({
  template: `
  <div class='card'>Lazy loaded module</div>
  <div><video-modal></video-modal></div>
  `,
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent {}