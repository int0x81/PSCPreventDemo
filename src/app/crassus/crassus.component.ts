import { Component, OnInit, OnDestroy } from '@angular/core';
import { DarkModeService } from '../services/implementations/darkmode.service';
import { Subscription, Observable } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-crassus',
  templateUrl: './crassus.component.html',
  styleUrls: ['./crassus.component.css']
})
export class CrassusComponent implements OnInit, OnDestroy {

  private readonly breakPoint: number = 1065;
  private layoutChanges: Observable<BreakpointState>;
  private layoutChangesSubcription: Subscription;
  smDevice: boolean = false;

  darkMode: boolean;
  private darkModeSubscription: Subscription;

  constructor(darkModeService: DarkModeService, breakpointObserver: BreakpointObserver) {

    this.darkModeSubscription = darkModeService.darkModeSubject.subscribe(() => this.darkMode = !this.darkMode);

    this.darkMode = darkModeService.getDarkModeState();

    this.smDevice = breakpointObserver.isMatched('(max-width: ' + this.breakPoint.toString() + 'px)');
    this.layoutChanges = breakpointObserver.observe('(max-width: ' + this.breakPoint.toString() + 'px)');
  }

  ngOnInit() {
    this.layoutChangesSubcription =  this.layoutChanges.subscribe(result => this.smDevice = result.matches);
  }

  ngOnDestroy() {
    this.layoutChangesSubcription.unsubscribe();
    this.darkModeSubscription.unsubscribe();
  }
}