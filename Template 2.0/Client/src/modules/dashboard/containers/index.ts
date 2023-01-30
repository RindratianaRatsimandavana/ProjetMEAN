import { DashboardComponent } from './dashboard/dashboard.component';
import { LightComponent } from './light/light.component';
import { StaticComponent } from './static/static.component';
import { FactureComponent } from './facture/facture.component';
import { HistoriqueComponent } from './historique/historique.component';

export const containers = [DashboardComponent,
    StaticComponent,
    LightComponent ,
    FactureComponent,
    HistoriqueComponent];

export * from './dashboard/dashboard.component';
export * from './static/static.component';
export * from './light/light.component';
export * from './facture/facture.component';
export * from './historique/historique.component';

