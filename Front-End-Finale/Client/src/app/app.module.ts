import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { DepotVoitureComponent } from './depot-voiture/depot-voiture.component';
import {AppRoutingModule } from './app-routing.module';

// tsy maintsy nampiana
import {HttpClientModule} from '@angular/common/http' 
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListeVoitEnGarageComponent } from './liste-voit-en-garage/liste-voit-en-garage.component';
import { ListeReparationComponent } from './liste-reparation/liste-reparation.component';
import { FactureComponent } from './facture/facture.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './layout/home-layout.component';
import { LoginLayoutComponent } from './layout/login-layout-component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DepotVoitureComponent,
    NavComponent,
    LoginComponent,
    InscriptionComponent,
    ListeVoitEnGarageComponent,
    ListeReparationComponent,
    FactureComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,FormsModule,MatToolbarModule,MatSidenavModule,MatIconModule,
    MatListModule,MatButtonModule,MatCardModule,MatInputModule,MatFormFieldModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,BrowserAnimationsModule/*tsy maintsy nampiana*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
