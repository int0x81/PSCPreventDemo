import { Component, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy, AfterViewInit } from '@angular/core';
import { MLModelServiceDefinition } from '../services/mlmodel.service.def';
import { MlModelMock } from '../services/mocks/mlmodel.service.mock';
import { MLModel } from '../models/MLmodel';
import { GlobalEventService } from '../services/implementations/globalevent.service';
import { MlModelDirective } from './mlmodel.directive';
import { MlModelCardComponent } from './ml-model-card/ml-model-card.component';
import { DarkModeService } from '../services/implementations/darkmode.service';
import { Subscription } from 'rxjs';
import { MLModelService } from '../services/implementations/mlmodel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  @ViewChild(MlModelDirective, { static: true }) mlModelDirective: MlModelDirective;

  darkMode: boolean;

  mlModelServiceImpl: MLModelServiceDefinition;

  mlModels: MLModel[] = new Array<MLModel>();

  sidebarOpen: boolean = false;

  darkModeSubscription: Subscription;
  sidebarToggleSubscription: Subscription;
  
  constructor(globalEventService: GlobalEventService, mlModelService: MLModelService, private componentFactoryResolver: ComponentFactoryResolver, 
    private darkModeService: DarkModeService) { 

    this.darkMode = this.darkModeService.getDarkModeState();

    this.darkModeSubscription = this.darkModeService.darkModeSubject.subscribe(() => this.darkMode = ! this.darkMode);

    this.mlModelServiceImpl = mlModelService;

    this.sidebarToggleSubscription = globalEventService.toggleSidebarSubject.subscribe(() => {
      this.sidebarOpen = !this.sidebarOpen;
    })
  }

  async ngOnInit() {

    this.mlModels = this.mlModelServiceImpl.getModels();

    for(let model of this.mlModels)
      this.createModelCard(model);
  }

  private createModelCard(data: MLModel) {

    let viewContainerRef = this.mlModelDirective.viewContainerRef;
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(MlModelCardComponent);
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<MlModelCardComponent>componentRef.instance).mlModel = data;
  }

  ngOnDestroy() {
    this.darkModeSubscription.unsubscribe();
    this.sidebarToggleSubscription.unsubscribe();
  }
}