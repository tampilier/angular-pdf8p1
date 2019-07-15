import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CoreService implements OnInit, OnDestroy {
    eventStates: Subject<any>;
    items = [];

    constructor()
    {
      this.eventStates = new Subject();
    }

    ngOnInit()
    {
      console.log('Service ngOnInit');
      this
        .eventStates
        .subscribe(items => {
          this.items = items;
          console.log('subscribe: ',items);
        });
    }

    ngOnDestroy()
    {
      console.log('Service ngOnDestroy');
      this.eventStates.next();
      this.eventStates.complete();
    }

    push(data)
    {
      this.eventStates.subscribe(x => console.log(x));
    }
}
