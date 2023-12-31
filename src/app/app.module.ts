import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { Demo1Component } from './demo/demo1/demo1.component';
import { Exercice1Component } from './exercices/exercice1/exercice1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Demo2Component } from './demo/demo2/demo2.component';
import { SharedModule } from './shared/shared.module';
import { Exercice2Component } from './exercices/exercice2/exercice2.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Demo1Component,
    Exercice1Component,
    NavbarComponent,
    Demo2Component,
    Exercice2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
