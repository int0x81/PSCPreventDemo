import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DarkModeService } from '../services/implementations/darkmode.service';

@Component({
    selector: 'app-merenda',
    templateUrl: './merenda.component.html',
    styleUrls: ['./merenda.component.css']
  })
  export class MerendaComponent implements OnDestroy {

    darkMode: boolean;
    private darkModeSubscription: Subscription;

    constructor(darkModeService: DarkModeService) {

      this.darkModeSubscription = darkModeService.darkModeSubject.subscribe(() => {

        this.darkMode = !this.darkMode;
      });
  
      this.darkMode = darkModeService.getDarkModeState();
    }

    ngOnDestroy() {
      this.darkModeSubscription.unsubscribe();
    }
}  