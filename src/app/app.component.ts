import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <site-styles></site-styles>
  <site-nav></site-nav>
  <router-outlet></router-outlet>
  <div><video-modal></video-modal></div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class App {}