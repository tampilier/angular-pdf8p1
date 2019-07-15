import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoreService } from './core/core.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sub-app',
  template: `
  <ul>
    <li *ngFor="let item of items let i=index;">
      {{item.text}}:{{i}}
    </li>
  </ul>
  `,
  providers: [CoreService]
})
export class SubComponent implements OnInit, OnDestroy {
  items: any[] = [];
  subscription: Subscription;

  constructor(
    private _service: CoreService
  ){
    this.subscription = this._service.get().subscribe(message => {
      console.log('subscribe: ',message);
      this.items.push(message);
      console.log('subscribe2: ',this.items);
    });
  }

  ngOnInit(): void
  {
    /*this.items = 
      this
        ._service
        .get();*/
    /*this
      ._service
      .eventStates
      .subscribe(([data]) => {
          console.log('Subscriber B:', data);
      });
    console.log('ngOnInit');*/
  }

  /*ngDoCheck()
  {
    console.log('ngDoCheck: ',this.items);
  }*/

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }
}
