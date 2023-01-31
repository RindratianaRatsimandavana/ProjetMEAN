import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Lien } from '../pathVariable';

@Injectable({
  providedIn: 'root'
})
export class ReparationService {

  constructor(private http:HttpClient) { }
  private _refreshrequired= new Subject<void>();

  back= Lien.backOnLine;

  get fonctionRefresh(){
    return this._refreshrequired;
  }

  getListeReparation(idDepotVoiture: any) {
    const url = this.back+"reparation/listeReparation/"+idDepotVoiture;
    console.log(url , 'url');
    return this.http.get<any>(url,{}); //http.... prend 2 attribut (url,body)
  }
}
