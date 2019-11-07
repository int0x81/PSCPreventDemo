import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { CrassusMock } from '../../services/crassus.service.mock';
import { CrassusServiceDefinition } from '../../services/crassus.service.def';
import { CrassusResult } from '../../models/crassusresult';
import { Subscription } from 'rxjs';
import { CrassusService } from '../../services/crassus.service';

@Component({
  selector: 'app-status-icon',
  templateUrl: './status-icon.component.html',
  styleUrls: ['./status-icon.component.css']
})
export class StatusIconComponent implements OnInit, OnDestroy {
  
  private crassusService: CrassusServiceDefinition;
  private nextPredictionSubscription: Subscription;

  selectedCrassusResult: CrassusResult | null = null;

  constructor(crassusServiceImpl: CrassusMock) {
    this.crassusService = crassusServiceImpl;
    this.selectedCrassusResult = crassusServiceImpl.getCurrentCrassultResult();
    this.nextPredictionSubscription = this.crassusService.nextPredictionSubject.subscribe((value) => this.selectedCrassusResult = value);

  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.nextPredictionSubscription.unsubscribe();
  }
}
