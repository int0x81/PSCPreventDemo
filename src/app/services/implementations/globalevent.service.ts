import { Subject } from 'rxjs';
import { MLModel } from 'src/app/models/MLmodel';

export class GlobalEventService {

    public nextModelSubject: Subject<MLModel> = new Subject<MLModel>();
    public toggleSidebarSubject: Subject<void> = new Subject<void>();
    public hideStartupInfoSubject: Subject<void> = new Subject<void>(); 
}