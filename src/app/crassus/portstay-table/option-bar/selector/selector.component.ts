import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ship } from 'src/app/models/ship';
import { ShipService } from 'src/app/services/implementations/ship.service';
import { GlobalEventService } from 'src/app/services/implementations/globalevent.service';
import { ShipServiceDefinition } from 'src/app/services/ship.service.def';
import { DarkModeService } from 'src/app/services/implementations/darkmode.service';
import { Subscription } from 'rxjs';
import { CrassusMock } from 'src/app/crassus/services/crassus.service.mock';
import { CrassusServiceDefinition } from 'src/app/crassus/services/crassus.service.def';
import { CrassusService } from 'src/app/crassus/services/crassus.service';
import { ShipMock } from 'src/app/services/mocks/ship.service.mock';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit, OnDestroy {

  darkTheme: boolean;
  private darkThemeSubscription: Subscription;

  collapsed: boolean = true;

  private crassusService: CrassusServiceDefinition;

  private shipService: ShipServiceDefinition;
  ships: Ship[] = new Array<Ship>();
  selectedShip: Ship;

  private allShipsSynonymous: Ship = {
    id: 0,
    name: "All",
    image: ""
}

  constructor(shipServiveImpl: ShipMock, darkThemeService: DarkModeService, crassusServiceImpl: CrassusMock) {
    this.darkTheme = darkThemeService.getDarkModeState();
    this. darkThemeSubscription = darkThemeService.darkModeSubject.subscribe(() => this.darkTheme = !this.darkTheme);
    this.shipService = shipServiveImpl;
    this.crassusService = crassusServiceImpl;
   }

  async ngOnInit() {

    //1. Load ships from api in the background
    let loadShipsPromise = this.shipService.loadShips();
    
    //2. Load current cache objects
    await this.loadShipsFromCache();

    this.selectedShip = this.ships[0];
    this.crassusService.newShipSelectedSubject.next(this.selectedShip);
    
    //3. Subscribe to cache updates at this point
    await loadShipsPromise.then(async () => {
      await this.loadShipsFromCache();
    });
  }

  onSelectorClick(newValue: Ship) {
    
    if(this.collapsed) {
      this.collapsed = false;
      return;
    }

    this.selectedShip = newValue;
    this.crassusService.newShipSelectedSubject.next(this.selectedShip);

    let newSelection = new Array<Ship>();
    let secondStack = new Array<Ship>();
    newSelection.push(newValue);
    if(newValue.id != this.allShipsSynonymous.id)
        newSelection.push(this.allShipsSynonymous);

    for(let ship of this.ships) {
      if(ship.id != this.selectedShip.id && ship.id != this.allShipsSynonymous.id)
      secondStack.push(ship);
    }

    this.ships = new Array<Ship>();
    this.ships.push(newValue);
    this.collapsed = true;

    secondStack.sort((a, b) => {
      if(a.name < b.name)
        return -1;
      else if(a.name > b.name)
        return 1;
      else 
        return 0;
    });

    for(let newItem of secondStack) {
      newSelection.push(newItem);
    }

    setTimeout(() => this.ships = newSelection, 400); 
  }

  private async loadShipsFromCache() {

    this.ships = new Array<Ship>();
    let shipsInCache = await this.shipService.getShips();

    shipsInCache.sort((a, b) => {
      if(a.name < b.name)
        return -1;
      else if(a.name > b.name)
        return 1;
      else 
        return 0;
    });

    this.ships.push(this.allShipsSynonymous);

    for(let shipToPush of shipsInCache)
      this.ships.push(shipToPush);
  }

  ngOnDestroy() {
    this.darkThemeSubscription.unsubscribe();
  }
}
