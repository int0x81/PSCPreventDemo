import { Component, OnInit, OnDestroy } from '@angular/core';
import { DarkModeService } from '../services/implementations/darkmode.service';
import { Subscription } from 'rxjs';
import { GlobalEventService } from '../services/implementations/globalevent.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-startup-info-modal',
  templateUrl: './startup-info-modal.component.html',
  styleUrls: ['./startup-info-modal.component.css']
})
export class StartupInfoModalComponent implements OnInit, OnDestroy {

  darkMode: boolean;
  private darkModeSubscription: Subscription;

  constructor(private darkModeService: DarkModeService, private globalEventService: GlobalEventService, public modal: NgbActiveModal) {

    this.darkMode = this.darkModeService.getDarkModeState();
    this.darkModeSubscription = darkModeService.darkModeSubject.subscribe(() => this.darkMode = !this.darkMode);
   }

  ngOnInit() {}

  closeStartupModal() {
    this.globalEventService.hideStartupInfoSubject.next();
    this.modal.close();
  }

  ngOnDestroy() {
    this.darkModeSubscription.unsubscribe();
  }
}
