import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //form!: FormGroup;

  userConnecte: any[] = [];

  // aza adino ny private
  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
  }

  login(formValue:any){
    // const loginUser = {
    //   email: formValue.email,
    //   mdp: formValue.mdp
    // }
    // this.userService.login(loginUser).subscribe((data: any)  =>{
    // // tsy voatery manisy model user satria tsy castena affichena any amin affichage izy
    //   this.userConnecte =data as any[];
    //   if(this.userConnecte.length === 1)
    //   {
    //     localStorage.setItem('user',JSON.stringify(this.userConnecte));
    //     //this.reload(); // tsy maintsy eto no relodiavana
    //     this.router.navigate(['listeVoitEnGarage']);
    //   }
    //   else
    //   {
    //     return;
    //     // tokony mandefa erreur
    //   }
    //   //Fangalana user any amin localstorage
    //   // const testUser= localStorage.getItem('user');
    //   // const offTestUser= JSON.parse(testUser);
    //   // console.log("test fangalana idUser "+offTestUser[0]._id);
      
  //  });

  //   // insertion localStorage
  //   console.log(loginUser);
  //   //location.reload();
  //   //this.reload();

  this.router.navigate(['list']);
  }
  
  logout()
  {
    localStorage.clear();
  }

  reload()
  {
    location.reload();
  }

}
