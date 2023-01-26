import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private http:HttpClient) { }
  private _refreshrequired= new Subject<void>();

  get fonctionRefresh(){
    return this._refreshrequired;
  }

  getListedemandeDepotVoit() {
    const url = "http://localhost:3000/depotVoiture/listeDepotVoiture/demandeDepotVoit";
    console.log(url , 'url');
    return this.http.get<any>(url,{}); //http.... prend 2 attribut (url,body)
  }

  // afaka receptionner ty, afaka zavatra hafa ihany koa rehefa maanao update mombanle resaka voiture fotsiny
  updateDepotVoit(idDepotVoit: any,cible:any,valeur:any) {
    const url = "http://localhost:3000/depotVoiture/"+idDepotVoit+"/"+cible+"/"+valeur;
    console.log(url , 'url');
    return this.http.patch<any>(url,{}).pipe(
      tap( () => {
            this.fonctionRefresh.next();
        }

      )
    );
    
  }

  getListeVoitEnGarage() {
    const url = "http://localhost:3000/depotVoiture/listeDepotVoiture/depotVoitEnGarage";
    console.log(url , 'url');
    return this.http.get<any>(url,{}); //http.... prend 2 attribut (url,body)
  }
}
