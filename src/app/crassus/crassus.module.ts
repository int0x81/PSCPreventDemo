import { NgModule } from '@angular/core';
import { CrassusComponent } from './crassus.component';
import { PortStayTableComponent } from './portstay-table/portstay-table.component';
import { PredictInfoComponent } from './predict-info/predict-info.component';
import { CrassusMock } from './services/crassus.service.mock';
import { CommonModule } from '@angular/common';
import { CountUpModule } from 'countup.js-angular2';
import { FormsModule } from '@angular/forms';
import { CrassusRoutingModule } from './crassus-routing.module';
import { SelectorComponent } from './portstay-table/option-bar/selector/selector.component';
import { OptionBarComponent } from './portstay-table/option-bar/option-bar.component';
import { CrassusService } from './services/crassus.service';
import { StatusIconComponent } from './predict-info/status-icon/status-icon.component';

@NgModule({
    declarations: [
      CrassusComponent,
      PredictInfoComponent,
      PortStayTableComponent,
      OptionBarComponent,
      SelectorComponent,
      StatusIconComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        CountUpModule,
        CrassusRoutingModule
    ],
    entryComponents: [],
    providers: [CrassusMock],
    bootstrap: []
  })
  export class CrassusModule { }