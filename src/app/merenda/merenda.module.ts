import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerendaRoutingModule } from './merenda-routing.module';
import { MerendaComponent } from './merenda.component';
import { MerendaOptionsBarComponent } from './merenda-options-bar/merenda-options-bar.component';
import { MerendaChartComponent } from './merenda-chart/merenda-chart.component';

@NgModule({
  declarations: [
    MerendaComponent,
    MerendaOptionsBarComponent,
    MerendaChartComponent
  ],
  imports: [
    CommonModule,
    MerendaRoutingModule
  ]
})
export class MerendaModule { }
