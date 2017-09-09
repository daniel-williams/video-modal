import { Component } from '@angular/core';

@Component({
  template: `
  <video-modal></video-modal>
  `,
  styles: [`
  :host {
    margin: 0 auto;
    padding: 50px;
  }
  `],
  host: {
    class: 'card'
  }
})
export class DemoComponent {}