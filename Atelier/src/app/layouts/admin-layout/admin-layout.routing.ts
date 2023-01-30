import { Routes } from '@angular/router';

import { DemandeDepotComponent } from 'app/demande-depot/demande-depot.component';
import { ReparationEnregistrerComponent } from 'app/reparation-enregistrer/reparation-enregistrer.component';
import { VoitureGarageComponent } from 'app/voiture-garage/voiture-garage.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'demandeDepot',  component: DemandeDepotComponent },
    { path: 'reparationEnregistrer',  component: ReparationEnregistrerComponent },
    { path: 'voitureGarage',  component: VoitureGarageComponent },
    { path: 'voitureGarage',  component: VoitureGarageComponent },
];
