import { Component, OnInit } from '@angular/core';
import { DepotVoitureService } from '../services/depot-voiture.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-voit-en-garage',
  templateUrl: './liste-voit-en-garage.component.html',
  styleUrls: ['./liste-voit-en-garage.component.css']
})
export class ListeVoitEnGarageComponent implements OnInit {
  listeDepotVoitures: any[] = [];

  testUser = JSON.parse(localStorage.getItem('user') || '{}');
  constructor(private depotVoitureService:DepotVoitureService,private router: Router) { }

  ngOnInit(): void {
    //const testUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (this.isEmptyObject(this.testUser))
    {
      alert("Connexion requise");
      this.router.navigateByUrl('/login');
    }
    else
    {
      this.getListeDepotVoiture();
    }
   
  }

  isEmptyObject(obj: any) {
    // return true si empty object sinon false
    return (obj && (Object.keys(obj).length === 0));
  }
  
  getListeDepotVoiture(){
    this.depotVoitureService.getListeDepotVoiture().subscribe((data: any)  =>{
        this.listeDepotVoitures =data as any[];
     });
  }

  recupererVoit(idVoit:any,cible:any,valUpdate:any){
    this.depotVoitureService.updateDepotVoit(idVoit,cible,valUpdate).subscribe();
    alert("Merci de votre confiance");
    this.reload();
  }

  reload()
  {
    location.reload();
  }

}
