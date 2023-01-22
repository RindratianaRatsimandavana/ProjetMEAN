import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { DepotComponent } from './depot/depot.component';
import { ListeReparationComponent } from './liste-reparation/liste-reparation.component';
import { FactureComponent } from './facture/facture.component';
import { VoitureEnregistrerComponent } from './voiture-enregistrer/voiture-enregistrer.component';
import { PaiementValidationComponent } from './paiement-validation/paiement-validation.component';
import { DemandeDepotComponent } from './demande-depot/demande-depot.component';
import { VoitureGarageComponent } from './voiture-garage/voiture-garage.component';
import { ReparationEnregistrerComponent } from './reparation-enregistrer/reparation-enregistrer.component';


const routes: Routes = 
  [
    { path: "login", component: LoginComponent },
    { path: "inscription", component: InscriptionComponent }
  ];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    InscriptionComponent,
    DepotComponent,
    ListeReparationComponent,
    FactureComponent,
    VoitureEnregistrerComponent,
    PaiementValidationComponent,
    DemandeDepotComponent,
    VoitureGarageComponent,
    ReparationEnregistrerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
