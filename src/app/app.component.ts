import { Component } from '@angular/core';
import { SubComponent } from './sub.component';
import { CoreService } from './core/core.service';

@Component({
  selector: 'my-app',
  template: ` 
  <div align="center">
    <input type="button" (click)="run();" value="Click me" />
  </div>
  <div>
    <sub-app></sub-app>
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: [ './app.component.css' ],
  providers: [CoreService, SubComponent]
})
export class AppComponent  {

  constructor(
    private _service: CoreService,
    private _subComponent: SubComponent
  ){}

  run()
  {
    //this.sub.push();
    console.log('AS1');

    this
      ._service
      .push('ddd');
  }
}
