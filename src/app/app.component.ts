import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout'
import { Observable, Subscription } from 'rxjs';
import { DarkModeService } from './services/implementations/darkmode.service';
import { GlobalEventService } from './services/implementations/globalevent.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StartupInfoModalComponent } from './startup-info-modal/startup-info-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

  darkMode: boolean = false;
  private darkModeSubscription: Subscription;
  blurApp: boolean;
  private showStartupInfoSubscription: Subscription;

  constructor(darkModeService: DarkModeService, globalEventService: GlobalEventService, private modalService: NgbModal) {
    this.darkModeSubscription = darkModeService.darkModeSubject.subscribe(() => {

      this.darkMode = !this.darkMode;
    });

    this.darkMode = darkModeService.getDarkModeState();

    this.blurApp = false;

    this.showStartupInfoSubscription = globalEventService.hideStartupInfoSubject.subscribe(() => this.blurApp = false);
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    //this.modalService.open(StartupInfoModalComponent);
  }

  ngOnDestroy() {
    this.darkModeSubscription.unsubscribe();
    this.showStartupInfoSubscription.unsubscribe();
  }
}