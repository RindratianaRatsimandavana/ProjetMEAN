import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DepotVoitureComponent } from './depot-voiture/depot-voiture.component';

// tsy maintsy nampiana
import {HttpClientModule} from '@angular/common/http' 
import { FormsModule } from "@angular/forms";
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListeVoitEnGarageComponent } from './liste-voit-en-garage/liste-voit-en-garage.component';
import { ListeReparationComponent } from './liste-reparation/liste-reparation.component';
import { FactureComponent } from './facture/facture.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [
    AppComponent,
    DepotVoitureComponent,
    NavComponent,
    LoginComponent,
    InscriptionComponent,
    ListeVoitEnGarageComponent,
    ListeReparationComponent,
    FactureComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,HttpClientModule/*tsy maintsy nampiana*/,
    NgxDropzoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
