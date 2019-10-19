import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CrassusComponent } from './crassus.component';

const routes: Routes = [
  { path: 'crassus', component: CrassusComponent },
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
export class CrassusRoutingModule { }