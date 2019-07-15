import { Component, OnInit, Renderer2 } from '@angular/core';
import { CoreService } from './core/core.service';

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
  items = [];

  constructor(
    private _service: CoreService,
    myRenderer: Renderer2
  ){
  }

  ngOnInit(): void
  {
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

  public update(item)
  {
    this.items.push(item);
    this.myRenderer.update();
    /*this.items.push('AA'+this.items.length);
    console.log('List: ',this.items);*/
  }
}
