import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { ListeReparationComponent } from './liste-reparation/liste-reparation.component';
import { ListeVoitEnGarageComponent } from './liste-voit-en-garage/liste-voit-en-garage.component';
import { LoginComponent } from './login/login.component';
import { StatistiqueComponent } from './statistique/statistique.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/login', 
    pathMatch: 'full' 
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'inscription',
        component: InscriptionComponent
      },
    ]
  },
  {
    path: '',
    component: HomeLayoutComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: 'stat',
        component: StatistiqueComponent
      },
      {
        path: 'listeVoitEnGarage',
        component: ListeVoitEnGarageComponent
      },
      {
        path:'listeReparation/:idDepotVoit',
        component:ListeReparationComponent
      },
    ]
  },
  { path: '**', redirectTo: '' }

  // {
  //   path: 'listeVoitEnGarage',
  //     component: ListeVoitEnGarageComponent
  // },
  // {
  //   path: '',
  //     component: StatistiqueComponent
  // },
  // {
  //   path:'listeReparation/:idDepotVoit',
  //   component:ListeReparationComponent
  //}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
