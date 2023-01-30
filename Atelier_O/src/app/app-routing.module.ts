import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutReparationComponent } from './ajout-reparation/ajout-reparation.component';
import { ListeDemandeDepotComponent } from './liste-demande-depot/liste-demande-depot.component';
import { ListeReparationComponent } from './liste-reparation/liste-reparation.component';
import { ListeVoitEnGarageComponent } from './liste-voit-en-garage/liste-voit-en-garage.component';
import { ModifReparationComponent } from './modif-reparation/modif-reparation.component';

const routes: Routes = [
  {
    path:'',
    component:ListeDemandeDepotComponent
  },
  {
    path:'listeVoitEnGarage',
    component:ListeVoitEnGarageComponent
  },
  {
    path:'ajoutReparation/:idDepotVoit',
    component:AjoutReparationComponent
  },
  {
    path:'listeReparation/:idDepotVoit',
    component:ListeReparationComponent
  },
  {
    path:'modifReparation/:idReparation',
    component:ModifReparationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
