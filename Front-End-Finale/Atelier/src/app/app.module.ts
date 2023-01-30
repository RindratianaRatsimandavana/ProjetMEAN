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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModifReparationComponent } from './modif-reparation/modif-reparation.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeComponent } from './home/home.component';
import { HomeLayoutComponent } from './layout/home-layout.component';
import { LoginLayoutComponent } from './layout/login-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListeDemandeDepotComponent,
    ListeVoitEnGarageComponent,
    AjoutReparationComponent,
    ListeReparationComponent,
    ModifReparationComponent,
    LoginComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    InscriptionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,MatToolbarModule,MatSidenavModule,MatIconModule,
    AppRoutingModule,HttpClientModule,MatListModule,MatButtonModule,
    FormsModule,MatCardModule,MatInputModule,MatFormFieldModule,
    BrowserAnimationsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
