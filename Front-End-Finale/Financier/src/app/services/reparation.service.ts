import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReparationService {

  constructor(private http:HttpClient) { }
  private _refreshrequired= new Subject<void>();

  get fonctionRefresh(){
    return this._refreshrequired;
  }

  getListeReparation(idDepotVoiture: any) {
    const url = "http://localhost:3000/reparation/listeReparation/"+idDepotVoiture;
    console.log(url , 'url');
    return this.http.get<any>(url,{}); //http.... prend 2 attribut (url,body)
  }

  // afaka receptionner ty, afaka zavatra hafa ihany koa rehefa maanao update mombanle resaka voiture fotsiny
  updateReparation(idReparation: any,cible:any,valeur:any,idDepotVoit:any) {
    const url = "http://localhost:3000/reparation/"+idReparation+"/"+cible+"/"+valeur+"/"+idDepotVoit;
    console.log(url , 'url');

    
    return this.http.patch<any>(url,{}).pipe(
    tap( () => {
            this.fonctionRefresh.next();
        }

      )
    );// Raha patch,post zany dia tsy maintsy misy 2è agument manaraka foana
    
  }

}
