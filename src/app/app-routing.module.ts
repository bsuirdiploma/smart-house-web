import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateWateringComponent} from './component/watering/create-watering/create-watering.component';
import {LoginComponent} from './component/login/login.component';
import {WateringComponent} from './component/watering/list-watering/watering.component';
import {CreateClimateComponent} from './component/climate/create-climate/create-climate.component';
import {ClimateComponent} from './component/climate/list-climate/climate.component';
import {UserComponent} from './component/user/list-user/user.component';
import {CreateUserComponent} from './component/user/create-user/create-user.component';
import {CreateCtvComponent} from './component/ctv/create-ctv/create-ctv.component';
import {CtvComponent} from './component/ctv/list-ctv/ctv.component';

const routes: Routes = [
  {path: 'watering', component: WateringComponent},
  {path: 'watering/create', component: CreateWateringComponent},
  {path: 'climate', component: ClimateComponent},
  {path: 'climate/create', component: CreateClimateComponent},
  {path: 'user', component: UserComponent},
  {path: 'user/create', component: CreateUserComponent},
  {path: 'ctv', component: CtvComponent},
  {path: 'ctv/create', component: CreateCtvComponent},
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
