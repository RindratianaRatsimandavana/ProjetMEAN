import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  inscription(formValue:any){
    // console.log("this.idClient"+formValue.idClient);
    // console.log("this.numVoiture"+formValue.numVoiture);
    const nouveauUser = {
      nom: formValue.nom,
      prenom: formValue.prenom,
      email: formValue.email,
      mdp:formValue.mdp,
      typeUser:1
    }
    this.userService.inscription(nouveauUser).subscribe();
    console.log(nouveauUser);
    this.router.navigate(['']);
    //this.reload();
  }
  
  // login(formValue:any){
  //   const loginUser = {
  //     email: formValue.email,
  //     mdp: formValue.mdp
  //   }
  //   this.userService.login(loginUser).subscribe();

  //   // insertion localStorage
  //   console.log(loginUser);
  //   this.reload();
  // }
  
  reload()
  {
    location.reload();
  }

}
