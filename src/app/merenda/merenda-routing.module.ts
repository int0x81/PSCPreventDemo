import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { MerendaComponent } from './merenda.component';

const routes: Routes = [
  { path: 'merenda', component: MerendaComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      routes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class MerendaRoutingModule { }