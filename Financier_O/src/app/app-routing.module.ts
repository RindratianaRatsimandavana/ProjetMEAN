import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeReparationComponent } from './liste-reparation/liste-reparation.component';
import { ListeVoitEnGarageComponent } from './liste-voit-en-garage/liste-voit-en-garage.component';
import { StatistiqueComponent } from './statistique/statistique.component';

const routes: Routes = [
  {
    path: 'listeVoitEnGarage',
      component: ListeVoitEnGarageComponent
  },
  {
    path: '',
      component: StatistiqueComponent
  },
  {
    path:'listeReparation/:idDepotVoit',
    component:ListeReparationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
