import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateWateringComponent} from './component/watering/create-watering/create-watering.component';
import {LoginComponent} from './component/login/login.component';
import {WateringComponent} from './component/watering/list-watering/watering.component';

const routes: Routes = [
  {path: 'watering', component: WateringComponent},
  {path: 'watering/create', component: CreateWateringComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {paramsInheritanceStrategy: 'always'}),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
