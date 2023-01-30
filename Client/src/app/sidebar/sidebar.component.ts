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
   // { path: '/user', title: 'User Profile',  icon:'pe-7s-user', class: '' },
    { path: '/table', title: 'Liste voiture',  icon:'pe-7s-note2', class: '' },
   // { path: '/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
    { path: '/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
    { path: '/depot', title: 'Depot de voiture',  icon:'pe-7s-car', class: '' },
    { path: '/reparation', title: 'Liste Reparation',  icon:'pe-7s-note2', class: '' },
    { path: '/facture', title: 'Liste Facture',  icon:'pe-7s-note2', class: '' },
    { path: '/voitureEnregistrer', title: 'Voiture enregister',  icon:'pe-7s-note2', class: '' },
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
