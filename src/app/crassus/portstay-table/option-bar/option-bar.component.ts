import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShipServiceDefinition } from 'src/app/services/ship.service.def';
import { ShipMock } from 'src/app/services/mocks/ship.service.mock';
import { Ship } from 'src/app/models/ship';
import { GlobalEventService } from 'src/app/services/implementations/globalevent.service';
import { ShipService } from 'src/app/services/implementations/ship.service';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { DarkModeService } from 'src/app/services/implementations/darkmode.service';
import { CrassusServiceDefinition } from '../../services/crassus.service.def';
import { CrassusMock } from '../../services/crassus.service.mock';

@Component({
  selector: 'app-option-bar',
  templateUrl: './option-bar.component.html',
  styleUrls: ['./option-bar.component.css']
})
export class OptionBarComponent {

  private crassusService: CrassusServiceDefinition;

  darkMode: boolean;
  private darkModeSubscription: Subscription;

  showOngoingPortstays: boolean;

  constructor(darkModeService: DarkModeService, crassusImpl: CrassusMock) {
    this.darkMode = darkModeService.getDarkModeState();
    this.darkModeSubscription = darkModeService.darkModeSubject.subscribe(() => this.darkMode = !this.darkMode);
    this.crassusService = crassusImpl;
    this.showOngoingPortstays = this.crassusService.getOngoingStayState();
  }

  ngOnDestroy() {
    this.darkModeSubscription.unsubscribe();
  }

  toggleShowOngoingPortStays() {
    this.crassusService.ongoingStaysSubject.next();
  }
}
