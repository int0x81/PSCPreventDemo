import { Component, OnInit, OnDestroy } from '@angular/core';
import { DarkModeService } from '../services/implementations/darkmode.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit, OnDestroy {

  darkTheme: boolean;
  private darkThemeSubscription: Subscription;

  constructor(private darkThemeService: DarkModeService) {
    this.darkTheme = darkThemeService.getDarkModeState();
    this.darkThemeSubscription = darkThemeService.darkModeSubject.subscribe(() => {
      this.darkTheme = !this.darkTheme;
    });
   }

  ngOnInit() {}

  ngOnDestroy() {
    this.darkThemeSubscription.unsubscribe();
  }
}
