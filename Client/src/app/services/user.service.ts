import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Subject, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _refreshrequired= new Subject<void>();

  constructor(private http:HttpClient) { }

  inscription(nouveauUser: any) 
  {

      //{
        //     "nom": "Rakoto",
        //     "prenom": "Vola",
        //     "email": "rindrahratsima@gmail.com",
        //     "mdp":"vola",
        //     "typeUser":1
        // }
      const url = "http://localhost:3000/users/inscription";
      console.log(url , 'url');
      return this.http.post<any>(url , nouveauUser );
  }

  login(user: any) 
  {
      //     "email": "rindrahratsima@gmail.com",
      //     "mdp": "vola"
      const url = "http://localhost:3000/users/login";
      console.log(url , 'url');
      return this.http.post<any>(url , user );
  }
}

