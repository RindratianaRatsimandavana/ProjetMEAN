import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DepotVoitureComponent } from './depot-voiture/depot-voiture.component';
import { FactureComponent } from './facture/facture.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeLayoutComponent } from './layout/home-layout.component';
import { LoginLayoutComponent } from './layout/login-layout-component';
import { ListeReparationComponent } from './liste-reparation/liste-reparation.component';
import { ListeVoitEnGarageComponent } from './liste-voit-en-garage/liste-voit-en-garage.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';


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
        path: 'depot',
        component: DepotVoitureComponent
      },
      {
        path: 'listeVoitEnGarage',
        component: ListeVoitEnGarageComponent
      },
      {
        path:'facture/:idDepotVoit',
        component:FactureComponent
      },
      {
        path:'listeReparation/:idDepotVoit',
        component:ListeReparationComponent
      },
    ]
  },
  { path: '**', redirectTo: '' }
  // {
  //   path: '',
  //     component: DepotVoitureComponent
  // },
  // {
  //   path: 'login',
  //     component: LoginComponent,
  // },
  // {
  //   path: 'inscription',
  //     component: InscriptionComponent
  // },
  // {
  //   path: 'listeVoitEnGarage',
  //     component: ListeVoitEnGarageComponent
  // },
  // {
  //   path:'listeReparation/:idDepotVoit',
  //   component:ListeReparationComponent
  // },
  // {
  //   path:'facture/:idDepotVoit',
  //   component:FactureComponent
  // },
  // { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
