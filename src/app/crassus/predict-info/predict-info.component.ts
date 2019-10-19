import { Component, OnInit, OnDestroy } from '@angular/core';
import { CountUpOptions } from 'countup.js';
import { GlobalEventService } from 'src/app/services/implementations/globalevent.service';
import { Subscription, Observable } from 'rxjs';
import { DarkModeService } from 'src/app/services/implementations/darkmode.service';
import { BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { CrassusMock } from '../services/crassus.service.mock';
import { CrassusServiceDefinition } from '../services/crassus.service.def';
import { CrassusService } from '../services/crassus.service';
import { CrassusResult } from '../models/crassusresult';

@Component({
  selector: 'app-predict-info',
  templateUrl: './predict-info.component.html',
  styleUrls: ['./predict-info.component.css']
})
export class PredictInfoComponent implements OnInit, OnDestroy {
  
  private readonly breakPoint: number = 1065;

  private layoutChanges: Observable<BreakpointState>;
  private layoutChangesSubcription: Subscription;
  smDevice: boolean = false;
  
  darkMode: boolean;
  
  crassusService: CrassusServiceDefinition;

  crassusPrediction: CrassusResult | null = null;

  countUpOptions: CountUpOptions = {
    decimalPlaces: 2,
    duration: 1,
  }

  nextPredictionsubscription: Subscription;
  darkModeSubscription: Subscription;

  constructor(private darkModeService: DarkModeService, breakpointObserver: BreakpointObserver, crassusServiceImpl: CrassusMock) {

    this.darkMode = this.darkModeService.getDarkModeState();

    this.darkModeSubscription = this.darkModeService.darkModeSubject.subscribe(() => this.darkMode = !this.darkMode);

    this.crassusService = crassusServiceImpl;

    this.smDevice = breakpointObserver.isMatched('(max-width: ' + this.breakPoint.toString() + 'px)');
    this.layoutChanges = breakpointObserver.observe('(max-width: ' + this.breakPoint.toString() + 'px)')
   }

  ngOnInit() {

    this.nextPredictionsubscription = this.crassusService.nextPredictionSubject.subscribe((value) => this.crassusPrediction = value);

    this.layoutChangesSubcription =  this.layoutChanges.subscribe(result => this.smDevice = result.matches);
  }

  ngOnDestroy(): void {
    
    this.nextPredictionsubscription.unsubscribe();
    this.darkModeSubscription.unsubscribe();
    this.layoutChangesSubcription.unsubscribe();
  }
}