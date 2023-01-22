import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepotVoitureService } from 'app/services/depot-voiture.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent implements OnInit {

  constructor(private depotVoitService: DepotVoitureService,private router: Router) { }

  ngOnInit(): void {
  }
  //idClient numVoiture
  insertDepotVoit(formValue:any){

    // tokony misy controle eto
    const testUser= localStorage.getItem('user');
    const offTestUser= JSON.parse(testUser);
    const idUser =offTestUser[0]._id;

    const depotVoit = {
      idClient: idUser,
      numVoiture: formValue.numVoiture
    }
    this.depotVoitService.insertDepotVoit(depotVoit).subscribe((data: any)=>{
      
        //JSON TSY TABLEAU NO NALEFA DIA TSY MISY HOE [0] 
        console.log("Le message insertDepotVoiture ",data.message);
       // this.router.navigate(["/"])
        

      }
    );
  }

}
