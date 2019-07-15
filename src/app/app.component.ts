import { Component } from '@angular/core';
import { CoreService } from './core/core.service';

@Component({
  selector: 'my-app',
  template: ` 
  <div align="center">
    <input type="button" (click)="run();" value="Click me" />
  </div>
  <div>
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: [ './app.component.css' ],
  providers: [CoreService]
})
export class AppComponent  {

  constructor(
    private _service: CoreService
  ){}

  run()
  {
    this
      ._service
      .push('ddd');
  }
}
