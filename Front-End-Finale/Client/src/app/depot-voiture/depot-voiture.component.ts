import { Component, OnInit } from '@angular/core';
import { DepotVoitureService } from '../services/depot-voiture.service';



@Component({
  selector: 'app-depot-voiture',
  templateUrl: './depot-voiture.component.html',
  styleUrls: ['./depot-voiture.component.css']
})
export class DepotVoitureComponent implements OnInit {
  // GET
  listeDepotVoitures: any[] = [];

  //FORM
  //numVoiture : string = "";
  // misolo ny valeur ana id alaina avy any amin localstorage
  //idClient: string = "63c5742a22490e43cdd7dfd6";

  constructor(private depotVoitureService:DepotVoitureService) 
  { 
    
  }

  ngOnInit(): void {
    // this.getListeDepotVoiture();
    // this.depotVoitureService.fonctionRefresh.subscribe(()=>{
    //   this.getListeDepotVoiture();
    // })
  }

  

  insertDepotVoit(formValue:any){
      const testUser = JSON.parse(localStorage.getItem('user') || '{}');
    const toSave = {
      idClient : testUser[0]._id,
      numVoiture : formValue.numVoiture
    }
    this.depotVoitureService.insertDepotVoit(toSave).subscribe();
    console.log(toSave);
    this.reload();
  }

  
  receptionnerVoit(idDepotVoit: any,cible:any,valeur:any){
    // console.log("this.idClient"+formValue.idClient);
    // console.log("this.numVoiture"+formValue.numVoiture);
    // const toSave = {
    //   idClient : formValue.idClient,
    //   numVoiture : formValue.numVoiture
    // }
     this.depotVoitureService.updateDepotVoit(idDepotVoit,cible,valeur).subscribe();
    // console.log(toSave);
  }

  deleteDepotVoit(idDepotVoit: any){
    // console.log("this.idClient"+formValue.idClient);
    // console.log("this.numVoiture"+formValue.numVoiture);
    // const toSave = {
    //   idClient : formValue.idClient,
    //   numVoiture : formValue.numVoiture
    // }
     this.depotVoitureService.deleteDepotVoit(idDepotVoit).subscribe();
    // console.log(toSave);
  }

  reload()
  {
    location.reload();
  }

}
