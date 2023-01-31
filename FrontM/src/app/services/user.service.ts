import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Lien } from '../pathVariable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _refreshrequired= new Subject<void>();

  constructor(private http:HttpClient) { }

  back= Lien.backOnLine;
  inscription(nouveauUser: any) 
  {

      //{
        //     "nom": "Rakoto",
        //     "prenom": "Vola",
        //     "email": "rindrahratsima@gmail.com",
        //     "mdp":"vola",
        //     "typeUser":1
        // }
      const url = this.back+"users/inscription";
      console.log(url , 'url');
      console.log("tena tato");
      return this.http.post<any>(url , nouveauUser );
  }

  login(user: any) 
  {
      //     "email": "rindrahratsima@gmail.com",
      //     "mdp": "vola"
      const url = this.back+"users/login";
      console.log(url , 'url');
      return this.http.post<any>(url , user );
  }
}
