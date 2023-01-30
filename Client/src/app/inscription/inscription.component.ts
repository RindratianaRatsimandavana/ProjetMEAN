import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  constructor(private userService:UserService) { }

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
    this.reload();
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
