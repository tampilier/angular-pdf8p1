import { Component, Injectable, OnInit } from '@angular/core';
import { CoreService } from './core/core.service';

@Injectable()
@Component({
  selector: 'sub-app',
  template: `
  <ul>
    <li *ngFor="let item of items let i=index;">
      {{item}}:{{i}}
    </li>
  </ul>
  `,
  providers: [CoreService]
})
export class SubComponent implements OnInit {
  //_service: CoreService;
  items;

  constructor(
    private _service: CoreService
  ){
    //this._service = _service;
    this.items = ['a123'];
    console.log('constructor');
  }

  ngOnInit(): void
  {
    this
      ._service
      .eventStates
      .subscribe(([data]) => {
          console.log('Subscriber B:', data);
      });
    console.log('ngOnInit');
  }

  public push()
  {
    this.items.push('AA'+this.items.length);
    console.log('List: ',this.items);
  }

  public getInstance()
  {
    return this;
  }
}
