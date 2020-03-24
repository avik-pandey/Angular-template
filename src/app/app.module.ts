import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from './modules/layout/layout.module';
import {AuthGuard} from './modules/auth/auth-guard.service';
import {AuthService} from './modules/auth/auth.service';
import {Router} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule {

  Servicedata:boolean;
  constructor(private router:Router){

  }
  
 
 }
