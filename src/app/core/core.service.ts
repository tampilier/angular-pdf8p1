import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CoreService {
    private eventStates: Subject<any>;

    constructor()
    {
      this.eventStates = new Subject();
    }

    get()
    {
      return this.eventStates.asObservable();
    }

    push(message: string)
    {
      this.eventStates.next({ text: message });
    }
}
