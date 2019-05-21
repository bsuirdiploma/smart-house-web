import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WateringComponent} from './watering/watering.component';
import {AppRoutingModule} from './app-routing.module';
import {NavbarComponent} from './navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    WateringComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
