import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerendaRoutingModule } from './merenda-routing.module';
import { MerendaComponent } from './merenda.component';

@NgModule({
  declarations: [
    MerendaComponent
  ],
  imports: [
    CommonModule,
    MerendaRoutingModule
  ]
})
export class MerendaModule { }
