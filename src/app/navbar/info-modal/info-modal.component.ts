import { Component, OnInit, OnDestroy } from '@angular/core';
import { DarkModeService } from 'src/app/services/implementations/darkmode.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent implements OnInit, OnDestroy {

  darkMode: boolean;
  darkModeSubscription: Subscription;

  constructor(private darkModeService: DarkModeService) {

    this.darkMode = this.darkModeService.getDarkModeState();
    this.darkModeSubscription = darkModeService.darkModeSubject.subscribe(() => this.darkMode = !this.darkMode);
   }

  ngOnInit() {}

  ngOnDestroy() {
    this.darkModeSubscription.unsubscribe();
  }
}
