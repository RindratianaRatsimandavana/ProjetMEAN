import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { reparations } from '../models/reparation';

@Injectable({
  providedIn: 'root'
})
export class ReparationService {

  constructor(private http:HttpClient) { }
  private _refreshrequired= new Subject<void>();

  get fonctionRefresh(){
    return this._refreshrequired;
  }

  ajoutReparation(infoReparationn: any) {
    const url = "http://localhost:3000/reparation/insertReparation";
    console.log(url , 'url');
    return this.http.post<any>(url , infoReparationn );
  }

  getListeReparation(idDepotVoiture: any) {
    const url = "http://localhost:3000/reparation/listeReparation/"+idDepotVoiture;
    console.log(url , 'url');
    return this.http.get<any>(url,{}); //http.... prend 2 attribut (url,body)
  }

  getListeReparationParId(idRep: any) : Observable<reparations> {
    const url = "http://localhost:3000/reparation/reparationParId/"+idRep;
    console.log(url , 'url');
    return this.http.get<reparations>(url,{}); //http.... prend 2 attribut (url,body)
  }

  // afaka receptionner ty, afaka zavatra hafa ihany koa rehefa maanao update mombanle resaka voiture fotsiny
  updateReparation(idReparation: any,cible:any,valeur:any) {
    const url = "http://localhost:3000/reparation/"+idReparation+"/"+cible+"/"+valeur;
    console.log(url , 'url');
    return this.http.patch<any>(url,{});
    
  }

}
