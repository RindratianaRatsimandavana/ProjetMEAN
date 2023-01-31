import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepotVoitureService } from '../services/depot-voiture.service';



@Component({
  selector: 'app-depot-voiture',
  templateUrl: './depot-voiture.component.html',
  styleUrls: ['./depot-voiture.component.css']
})
export class DepotVoitureComponent implements OnInit {
  // GET
  listeDepotVoitures: any[] = [];

  testUser = JSON.parse(localStorage.getItem('user') || '{}');

  //FORM
  //numVoiture : string = "";
  // misolo ny valeur ana id alaina avy any amin localstorage
  //idClient: string = "63c5742a22490e43cdd7dfd6";

  constructor(private depotVoitureService:DepotVoitureService,private router: Router) 
  { 
    
  }

  ngOnInit(): void {
    //this.checkConnexion();
    // this.getListeDepotVoiture();
    // this.depotVoitureService.fonctionRefresh.subscribe(()=>{
    //   this.getListeDepotVoiture();
    // })
  }
//  debut
  files: File[] = [];

	onSelect(event:any) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}

	onRemove(event:any) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}

// fin drop it baby  

isEmptyObject(obj: any) {
  // return true si empty object sinon false
  return (obj && (Object.keys(obj).length === 0));
}

checkConnexion()
{
  if (this.isEmptyObject(this.testUser))
  {
    alert("Connexion requise");
  }
  else if (!this.isEmptyObject(this.testUser))
  {
    alert("Connécté");
  }
}

  insertDepotVoit(formValue:any){
      //const testUser = JSON.parse(localStorage.getItem('user') || '{}');
      if (this.isEmptyObject(this.testUser))
      {
        alert("Connexion requise");
        this.router.navigateByUrl('/login');
      }
      else
      {
        const toSave = {
          idClient : this.testUser[0]._id,
          numVoiture : formValue.numVoiture
        }
        this.depotVoitureService.insertDepotVoit(toSave).subscribe();
        console.log(toSave);
        alert("Votre demande de dépôt a bien été envoyé");
        this.reload();
      }
    
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
