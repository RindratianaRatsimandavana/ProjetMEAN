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
import { DemandeDepotComponent } from './demande-depot/demande-depot.component';
import { VoitureGarageComponent } from './voiture-garage/voiture-garage.component';
import { ReparationEnregistrerComponent } from './reparation-enregistrer/reparation-enregistrer.component';
import { ModifierReparationComponent } from './modifier-reparation/modifier-reparation.component';

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
    //RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DemandeDepotComponent,
    VoitureGarageComponent,
    ReparationEnregistrerComponent,
    ModifierReparationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
