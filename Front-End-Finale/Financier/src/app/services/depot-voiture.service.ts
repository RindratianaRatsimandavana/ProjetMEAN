import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepotVoitureService {

  constructor(private http:HttpClient) { }
  private _refreshrequired= new Subject<void>();

  get fonctionRefresh(){
    return this._refreshrequired;
  }
  getListeVoitureEngarage() {
    const url = "http://localhost:3000/depotVoiture/listeDepotVoiture/depotVoitCoteFinancier";
    console.log("debut url");
    console.log(url);
    console.log("fin url");
    return this.http.get<any>(url,{}); //http.... prend 2 attribut (url,body)
  }

  getDepotVoitureParNumero(numVoit: any) {
    const url = "http://localhost:3000/depotVoiture/listeDepotVoiture/"+numVoit;
    console.log(url , 'url');
    return this.http.get<any>(url,{}); //http.... prend 2 attribut (url,body)
  }

  getDepotVoitureParId(id:any)
  {
    const url = "http://localhost:3000/depotVoiture/depotVoitureParId/"+id;
    console.log(url , 'url');
    return this.http.get<any>(url,{}); //http.... prend 2 attribut (url,body)
  }

  stat1()
  {
    const url = "http://localhost:3000/depotVoiture/date";
    console.log(url , 'url');
    return this.http.get<any>(url,{}); //http.... prend 2 attribut (url,body)
  }

  
}
