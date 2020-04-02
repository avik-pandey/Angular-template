import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from './modules/layout/layout.module';
import {AuthGuard} from './modules/auth/auth-guard.service';
import {AuthService} from './modules/auth/auth.service';
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {AuthModule } from './modules/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    AuthModule

  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule {

  Servicedata:boolean;
  constructor(private router:Router){

  }
  
 
 }
