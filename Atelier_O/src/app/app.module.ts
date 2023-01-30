import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ListeDemandeDepotComponent } from './liste-demande-depot/liste-demande-depot.component';
import { ListeVoitEnGarageComponent } from './liste-voit-en-garage/liste-voit-en-garage.component';

import {HttpClientModule} from '@angular/common/http';
import { AjoutReparationComponent } from './ajout-reparation/ajout-reparation.component';
import { ListeReparationComponent } from './liste-reparation/liste-reparation.component' 
import { FormsModule } from '@angular/forms';
import { ModifReparationComponent } from './modif-reparation/modif-reparation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListeDemandeDepotComponent,
    ListeVoitEnGarageComponent,
    AjoutReparationComponent,
    ListeReparationComponent,
    ModifReparationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
