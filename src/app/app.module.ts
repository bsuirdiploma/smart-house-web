import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CreateWateringComponent} from './component/watering/create-watering/create-watering.component';
import {AppRoutingModule} from './app-routing.module';
import {NavbarComponent} from './navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './component/login/login.component';
import {WateringComponent} from './component/watering/list-watering/watering.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {CronEditorModule} from 'ngx-cron-editor';
import {CreateClimateComponent} from './component/climate/create-climate/create-climate.component';
import {ClimateComponent} from './component/climate/list-climate/climate.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateWateringComponent,
    WateringComponent,
    CreateClimateComponent,
    ClimateComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    CronEditorModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
