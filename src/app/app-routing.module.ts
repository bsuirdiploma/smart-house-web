import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WateringComponent} from './watering/watering.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'watering', component: WateringComponent},
  {path: 'login', component: LoginComponent},
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
