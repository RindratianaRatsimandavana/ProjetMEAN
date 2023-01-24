import { DashboardComponent } from './dashboard/dashboard.component';
import { LightComponent } from './light/light.component';
import { StaticComponent } from './static/static.component';
import { AjoutComponent } from './ajout/ajout.component';

export const containers = [DashboardComponent, StaticComponent, LightComponent , AjoutComponent ];

export * from './dashboard/dashboard.component';
export * from './static/static.component';
export * from './light/light.component';
export * from './ajout/ajout.component';
