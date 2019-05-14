import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WateringComponent} from './watering/watering.component';

const routes: Routes = [
  {path: 'watering', component: WateringComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' }),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
