import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userConnecte: any[] = [];

  // aza adino ny private
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  login(formValue:any){
    const loginUser = {
      email: formValue.email,
      mdp: formValue.mdp
    }
    console.log("111111111111");
    this.userService.login(loginUser).subscribe((data: any)  =>{
      this.userConnecte =data as any[];
      console.log("2222222222222");
      console.log("userConnecte ",data);
      if(this.userConnecte.length === 1)
      {
        localStorage.setItem('user',JSON.stringify(this.userConnecte));
        this.reload(); // tsy maintsy eto no relodiavana
      }
      else
      {
        return;
        // tokony mandefa erreur
      }
      const testUser= localStorage.getItem('user');
      const offTestUser= JSON.parse(testUser);
      console.log("test fangalana idUser "+offTestUser[0]._id);
      
   });

    // insertion localStorage
    console.log(loginUser);
    //location.reload();
    //this.reload();
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
