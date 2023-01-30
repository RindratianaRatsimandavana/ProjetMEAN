import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';
import { ListComponent } from './components/list/list.component';


export const ROUTES: Routes = [
  {
    path: 'list',
    canActivate: [],
    component:ListComponent,
    data: {
        title: 'Pages Login - SB Admin Angular',
    } as SBRouteData,
},
];


@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
