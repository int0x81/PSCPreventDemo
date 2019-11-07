import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortStayServiceDefinition } from 'src/app/services/portstay.service.def';
import { CrassusServiceDefinition } from 'src/app/crassus/services/crassus.service.def';
import { CrassusMock } from 'src/app/crassus/services/crassus.service.mock';
import { PortStay } from 'src/app/models/portstay';
import { DarkModeService } from 'src/app/services/implementations/darkmode.service';
import { Subscription } from 'rxjs';
import { PortStayService } from 'src/app/services/implementations/portstay.service';
import { PortStayTableEntry } from '../models/portstay-table-entry';
import { CrassusService } from '../services/crassus.service';
import { PortStayMock } from 'src/app/services/mocks/portstay.service.mock';

@Component({
  selector: 'app-portstay-table',
  templateUrl: './portstay-table.component.html',
  styleUrls: ['./portstay-table.component.css']
})
export class PortStayTableComponent implements OnInit, OnDestroy {

  portStayService: PortStayServiceDefinition;
  crassusService: CrassusServiceDefinition;

  darkModeSubscription: Subscription;
  newShipSelectedSubscription: Subscription;
  newShowOngoingStateSubscription: Subscription;

  darkMode: boolean;
  showOngoingStays: boolean;

  tableEntries: PortStayTableEntry[] = new Array<PortStayTableEntry>();

  constructor(portStayServiceImpl: PortStayService, predictionImpl: CrassusMock, private darkModeService: DarkModeService) { 

    this.portStayService = portStayServiceImpl;
    this.crassusService = predictionImpl;

    this.darkMode = this.darkModeService.getDarkModeState();
    this.showOngoingStays = this.crassusService.getOngoingStayState();

    this.darkModeSubscription = this.darkModeService.darkModeSubject.subscribe(() => this.darkMode = !this.darkMode);

    this.newShipSelectedSubscription = this.crassusService.newShipSelectedSubject.subscribe(async (ship) => await this.initializeTable(ship.id));
    this.newShowOngoingStateSubscription = this.crassusService.ongoingStaysSubject.subscribe(async () => {
      this.showOngoingStays = !this.showOngoingStays;
      await this.initializeTable(this.crassusService.getSelectedShip().id);
    });
  }

  async ngOnInit() {

    this.portStayService.loadPortStays();

    //TODO: At this point we want to subscribe to cache updates
  }

  private async initializeTable(shipId: number): Promise<void> {

    await this.getNewPortStays(shipId);

    if(this.tableEntries.length > 0)
      this.selectEntry(this.tableEntries[0]);

    this.loadAndAssignNewPredictions();
  }

  private async getNewPortStays(shipId: number) {

    let portStays = new Array<PortStay>();
    if(shipId == 0)
      portStays = await this.portStayService.getPortStays(this.showOngoingStays);
    else
      portStays = await this.portStayService.getPortStaysByShipId(shipId, this.showOngoingStays);
    
    this.tableEntries = new Array<PortStayTableEntry>();

    portStays.sort((a, b) => {
      if(a.timeOfArrival < b.timeOfArrival)
        return -1;
      else if(a.timeOfArrival > b.timeOfArrival)
        return 1;
      else
        return 0;
    });

    for(let portStay of portStays) {

      let tableEntry: PortStayTableEntry = {
        ps: portStay,
        prediction: null,
        selected: false
      }

      this.tableEntries.push(tableEntry);
    }
  }

  private async loadAndAssignNewPredictions() {

    if(this.tableEntries.length == 0) {
      this.crassusService.nextPredictionSubject.next(null);
      return;
    }

    let tasks = new Array<Promise<void>>();
    for(let entry of this.tableEntries) {

      let task = new Promise<void>(async () => { 
        
        this.crassusService.getPrediction(entry.ps.scheduleId).then((pred) => {
          entry.prediction = pred;

          if(entry.selected) {
          this.crassusService.nextPredictionSubject.next(entry.prediction);
        }
        },() => console.error("Failed to get prediction from server")); 
      });

      tasks.push(task);
    }

    await Promise.all(tasks);
  }

  selectEntry(selectedEntry: PortStayTableEntry) {

    for(let entry of this.tableEntries) {
      if(entry.ps.scheduleId != selectedEntry.ps.scheduleId)
        entry.selected = false;
    }
    
    selectedEntry.selected = true;
    this.crassusService.nextPredictionSubject.next(selectedEntry.prediction);
  }

  ngOnDestroy() {
    this.darkModeSubscription.unsubscribe();
    this.newShipSelectedSubscription.unsubscribe();
    this.newShowOngoingStateSubscription.unsubscribe();
  }
}
