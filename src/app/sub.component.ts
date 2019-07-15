import { Component, OnInit } from '@angular/core';
import { CoreService } from './core/core.service';

@Component({
  selector: 'sub-app',
  template: `
  <ul>
    <li *ngFor="let item of items.text let i=index;">
      {{item}}:{{i}}
    </li>
  </ul>
  `,
  providers: [CoreService]
})
export class SubComponent implements OnInit {
  items;

  constructor(
    private _service: CoreService
  ){
  }

  ngOnInit(): void
  {
    this.items = 
    this
      ._service
      .get();
    /*this
      ._service
      .eventStates
      .subscribe(([data]) => {
          console.log('Subscriber B:', data);
      });
    console.log('ngOnInit');*/
  }

  ngDoCheck()
  {
    console.log('ngDoCheck: ',arguments);
  }
}
