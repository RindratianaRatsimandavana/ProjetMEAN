import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { LoginComponent } from 'app/login/login.component';
import { InscriptionComponent } from 'app/inscription/inscription.component';
import { DepotComponent } from 'app/depot/depot.component';
import { ListeReparationComponent } from 'app/liste-reparation/liste-reparation.component';
import { FactureComponent } from 'app/facture/facture.component';
import { VoitureEnregistrerComponent } from 'app/voiture-enregistrer/voiture-enregistrer.component';
import { PaiementValidationComponent } from 'app/paiement-validation/paiement-validation.component';
import { DemandeDepotComponent } from 'app/demande-depot/demande-depot.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'login',        component: LoginComponent },
    { path: 'inscription',        component: InscriptionComponent },
    { path: 'depot',        component: DepotComponent },
    { path: 'reparation',        component: ListeReparationComponent },
    { path: 'facture',        component: FactureComponent },
    { path: 'voitureEnregistrer',        component: VoitureEnregistrerComponent },
    { path: 'paiementAttenteValidation',        component: PaiementValidationComponent },
    { path: 'demandeDepot',        component: DemandeDepotComponent },
];
