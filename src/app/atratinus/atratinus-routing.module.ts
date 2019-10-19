import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AtratinusComponent } from './atratinus.component';

const routes: Routes = [
  { path: 'atratinus', component: AtratinusComponent },
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
export class AtratinusRoutingModule { }