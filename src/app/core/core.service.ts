import { BehaviorSubject } from 'rxjs';

export class CoreService {
    eventStates: BehaviorSubject<any>;

    constructor()
    {
      this.eventStates = new BehaviorSubject([]);
    }
}