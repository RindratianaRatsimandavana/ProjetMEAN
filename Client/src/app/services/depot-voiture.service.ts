import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepotVoitureService {

  constructor(private http:HttpClient) { }

  insertDepotVoit(depotVoiture: any) 
  {
      //     "email": "rindrahratsima@gmail.com",
      //     "mdp": "vola"
      const url = "http://localhost:3000/depotVoiture/insertDepotVoit";
      console.log(url , 'url');
      return this.http.post<any>(url , depotVoiture );
  }

  getListeDepotVoiture() {
    const url = "http://localhost:3000/depotVoiture";
    console.log(url , 'url');
    return this.http.get<any>(url,{}); //http.... prend 2 attribut (url,body)
  }
}
