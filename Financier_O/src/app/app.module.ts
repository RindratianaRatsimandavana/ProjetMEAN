import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ListeVoitEnGarageComponent } from './liste-voit-en-garage/liste-voit-en-garage.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { ListeReparationComponent } from './liste-reparation/liste-reparation.component' ;

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListeVoitEnGarageComponent,
    StatistiqueComponent,
    ListeReparationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
