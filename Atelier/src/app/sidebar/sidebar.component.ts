import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Statistique',  icon: 'pe-7s-graph1', class: '' },
    { path: '/reparationEnregistrer', title: 'Voiture enregister',  icon:'pe-7s-note2', class: '' },
    { path: '/voitureGarage', title: 'Paie attente validation',  icon:'pe-7s-note2', class: '' },
    { path: '/demandeDepot', title: 'Demande de depot',  icon:'pe-7s-note2', class: '' },
    { path: '/modifierReparation', title: 'Modifier reparation',  icon:'pe-7s-note2', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
