import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/services/implementations/darkmode.service';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.css']
})
export class DarkModeToggleComponent implements OnInit {

  isOnDarkMode: boolean;

  constructor(private darkModeService: DarkModeService) { 
    this.isOnDarkMode = this.darkModeService.getDarkModeState();
  }

  ngOnInit() {
  }

  onClick() {
    this.darkModeService.darkModeSubject.next();
  }
}
