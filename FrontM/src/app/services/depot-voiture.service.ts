import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Subject, tap } from 'rxjs';
import { Lien } from '../pathVariable';

@Injectable({
  providedIn: 'root'
})
export class DepotVoitureService {

  private _refreshrequired= new Subject<void>();

  back= Lien.backOnLine;

  get fonctionRefresh(){
    return this._refreshrequired;
  }

  // tokony le depotvoiture mbola ao amin garage
  constructor(private http:HttpClient) { }
  getListeDepotVoiture() {
    const url = this.back+"depotVoiture";
    console.log(url , 'url');
    return this.http.get<any>(url,{}); //http.... prend 2 attribut (url,body)
  }

  
  insertDepotVoit(infoDepVoit: any) {
    const url = this.back+"depotVoiture/insertDepotVoit";
    console.log(url , 'url');
    return this.http.post<any>(url , infoDepVoit );
  }

  // afaka receptionner ty, afaka zavatra hafa ihany koa rehefa maanao update mombanle resaka voiture fotsiny
  updateDepotVoit(idDepotVoit: any,cible:any,valeur:any) {
    const url = this.back+"depotVoiture/"+idDepotVoit+"/"+cible+"/"+valeur;
    console.log(url , 'url');

    
    return this.http.patch<any>(url,{}).pipe(
      tap( () => {
            this.fonctionRefresh.next();
        }

      )
    );// Raha patch,post zany dia tsy maintsy misy 2è agument manaraka foana
    
  }

  deleteDepotVoit(idDepotVoit: any) {
    const url = this.back+"depotVoiture/delete/"+idDepotVoit;
    console.log(url , 'url');
    return this.http.delete<any>(url,{});// Raha patch,post zany dia tsy maintsy misy 2è agument manaraka foana
  }

  getDepotVoitureParId(id:any)
  {
    const url = this.back+"depotVoiture/depotVoitureParId/"+id;
    console.log(url , 'url');
    return this.http.get<any>(url,{}); //http.... prend 2 attribut (url,body)
  }
}
