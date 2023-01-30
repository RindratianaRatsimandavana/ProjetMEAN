import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepotVoitureComponent } from './depot-voiture/depot-voiture.component';
import { FactureComponent } from './facture/facture.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListeReparationComponent } from './liste-reparation/liste-reparation.component';
import { ListeVoitEnGarageComponent } from './liste-voit-en-garage/liste-voit-en-garage.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';



const routes: Routes = [
  {
    path: '',
      component: DepotVoitureComponent
  },
  {
    path: 'login',
      component: LoginComponent
  },
  {
    path: 'inscription',
      component: InscriptionComponent
  },
  {
    path: 'listeVoitEnGarage',
      component: ListeVoitEnGarageComponent
  },
  {
    path:'listeReparation/:idDepotVoit',
    component:ListeReparationComponent
  },
  {
    path:'facture/:idDepotVoit',
    component:FactureComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
