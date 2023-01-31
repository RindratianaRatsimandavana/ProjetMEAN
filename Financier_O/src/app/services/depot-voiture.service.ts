import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Lien } from '../pathVariable';

@Injectable({
  providedIn: 'root'
})
export class DepotVoitureService {

  constructor(private http:HttpClient) { }
  private _refreshrequired= new Subject<void>();

  back= Lien.backOnLine;

  get fonctionRefresh(){
    return this._refreshrequired;
  }
  getListeVoitureEngarage() {
    const url = this.back+"depotVoiture/listeDepotVoiture/depotVoitCoteFinancier";
    console.log("debut url");
    console.log(url);
    console.log("fin url");
    return this.http.get<any>(url,{}); //http.... prend 2 attribut (url,body)
  }

  getDepotVoitureParNumero(numVoit: any) {
    const url = this.back+"depotVoiture/listeDepotVoiture/"+numVoit;
    console.log(url , 'url');
    return this.http.get<any>(url,{}); //http.... prend 2 attribut (url,body)
  }

  getDepotVoitureParId(id:any)
  {
    const url = this.back+"depotVoiture/depotVoitureParId/"+id;
    console.log(url , 'url');
    return this.http.get<any>(url,{}); //http.... prend 2 attribut (url,body)
  }

  stat1()
  {
    const url = this.back+"depotVoiture/moyenneRepParTypeRep";
    console.log(url , 'url');
    return this.http.get<any>(url,{}); //http.... prend 2 attribut (url,body)
  }

  statGen()
  {
    const url = this.back+"depotVoiture/moyenneRepGlob";
    console.log(url , 'url');
    return this.http.get<any>(url,{}); //http.... prend 2 attribut (url,body)
  }

  
}
