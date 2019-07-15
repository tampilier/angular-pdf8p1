import { Subject, Observable } from 'rxjs';

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
