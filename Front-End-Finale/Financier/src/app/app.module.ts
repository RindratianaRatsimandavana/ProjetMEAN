import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ListeVoitEnGarageComponent } from './liste-voit-en-garage/liste-voit-en-garage.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { ListeReparationComponent } from './liste-reparation/liste-reparation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component' ;

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListeVoitEnGarageComponent,
    StatistiqueComponent,
    ListeReparationComponent,
    HomeComponent,
    LoginComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,MatToolbarModule,MatSidenavModule,MatIconModule,MatListModule,
    MatButtonModule,MatCardModule,MatInputModule,MatFormFieldModule, ReactiveFormsModule,
    AppRoutingModule,FormsModule,HttpClientModule, BrowserAnimationsModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
