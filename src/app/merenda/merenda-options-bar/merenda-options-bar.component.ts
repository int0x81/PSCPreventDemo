import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DarkModeService } from 'src/app/services/implementations/darkmode.service';
import { MerendaServiceDef } from '../services/merenda.service.def';
import { MerendaMock } from '../services/merenda.service.mock';

@Component({
  selector: 'app-merenda-options-bar',
  templateUrl: './merenda-options-bar.component.html',
  styleUrls: ['./merenda-options-bar.component.css']
})
export class MerendaOptionsBarComponent implements OnInit, OnDestroy {

  private merendaService: MerendaServiceDef;
  public xAxisItems: Array<string>;
  public yAxisItems: Array<string>;

  private darkThemeSubscription: Subscription;
  public darkTheme: boolean;
  
  public selectedX: string;
  public selectedY: string;
  public selectedK: number = 1;

  public xSelectorCollapsed: boolean = true;
  public ySelectorCollapsed: boolean = true;

  constructor(darkThemeService: DarkModeService, merendaMock: MerendaMock) { 
    this.darkTheme = darkThemeService.getDarkModeState();
    this.darkThemeSubscription = darkThemeService.darkModeSubject.subscribe(() => this.darkTheme = !this.darkTheme);

    this.merendaService = merendaMock;
  }

  ngOnInit() {
    this.xAxisItems = this.merendaService.getPossibleAxisValues();
    this.yAxisItems = this.merendaService.getPossibleAxisValues();
  }

  sliderUpdate(value) {
    this.selectedK = value;
  }

  onXSelectorClick(item) {

    if(this.xSelectorCollapsed) {
      this.xSelectorCollapsed = false;
      return;
    }

    this.selectedX = item;
    //UPDATE CHART

    let newSelection = new Array<string>();
    let secondStack = new Array<string>();
    newSelection.push(item);

    for(let xAxisItem of this.xAxisItems) {
      if(xAxisItem != this.selectedX)
      secondStack.push(xAxisItem);
    }

    this.xAxisItems = new Array<string>();
    this.xAxisItems.push(item);
    this.xSelectorCollapsed = true;

    secondStack.sort((a, b) => {
      if(a < b)
        return -1;
      else if(a > b)
        return 1;
      else 
        return 0;
    });

    for(let newItem of secondStack) {
      newSelection.push(newItem);
    }

    setTimeout(() => this.xAxisItems = newSelection, 400);
  }

  onYSelectorClick(item) {
    
    if(this.ySelectorCollapsed) {
      this.ySelectorCollapsed = false;
      return;
    }

    this.selectedY = item;
    //UPDATE CHART

    let newSelection = new Array<string>();
    let secondStack = new Array<string>();
    newSelection.push(item);

    for(let yAxisItem of this.yAxisItems) {
      if(yAxisItem != this.selectedY)
      secondStack.push(yAxisItem);
    }

    this.yAxisItems = new Array<string>();
    this.yAxisItems.push(item);
    this.ySelectorCollapsed = true;

    secondStack.sort((a, b) => {
      if(a < b)
        return -1;
      else if(a > b)
        return 1;
      else 
        return 0;
    });

    for(let newItem of secondStack) {
      newSelection.push(newItem);
    }

    setTimeout(() => this.yAxisItems = newSelection, 400);
  }

  ngOnDestroy() {

    this.darkThemeSubscription.unsubscribe();
  }
}
