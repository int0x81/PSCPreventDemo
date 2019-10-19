import { Component, OnInit, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { MLModel } from 'src/app/models/mlmodel';
import { GlobalEventService } from 'src/app/services/implementations/globalevent.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ml-model-card',
  templateUrl: './ml-model-card.component.html',
  styleUrls: ['./ml-model-card.component.css']
})
export class MlModelCardComponent implements OnInit, OnDestroy {
  @Input() mlModel: MLModel;

  displayDescription: string = "";

  private routerSubscription: Subscription;

  constructor(private globalEventService: GlobalEventService, private router: Router) {}

  ngOnInit() {

    this.displayDescription = this.mlModel.description; //workaround since 'this.displayDescription is used as attribute value'

    this.globalEventService.nextModelSubject.subscribe((model) => {
      if(model.name != this.mlModel.name)
        this.mlModel.selected = false;
    });

    this.router.events.subscribe(() => {
      if(this.router.url.slice(1) == this.mlModel.name.toLowerCase())
        this.mlModel.selected = true;
      else
        this.mlModel.selected = false;
    });
  }

  selectModel() {
    this.globalEventService.nextModelSubject.next(this.mlModel);
    this.router.navigate(["/" + this.mlModel.name.toLowerCase()]);
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
