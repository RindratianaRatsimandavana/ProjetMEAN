import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReparationService } from '../services/reparation.service';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-ajout-reparation',
  templateUrl: './ajout-reparation.component.html',
  styleUrls: ['./ajout-reparation.component.css']
})
export class AjoutReparationComponent implements OnInit {
  idDepotVoit=  this.route.snapshot.params['idDepotVoit'];

  depotvoiture: any[] = [];
  etatAvancementGeneral: string | undefined;
  numVoiture: any;
  dateDepotVoit: any;
  nbreReparationAFaire: any;
  nbreReparationFini: any;

  constructor(private route: ActivatedRoute,private reparationService: ReparationService,
    private voitureService:VoitureService) { }

    typeRep= "1";

  ngOnInit(): void {
    this.getDepotVoitParId(this.idDepotVoit);
  }
  //typeRep descRep montantRep

  ajoutRep(formValue:any){
    // cast number
    //const id: number = this.route.snapshot.params.id;
    
    console.log("idDepotVoit");
    console.log(this.idDepotVoit);
    let nomTypeRep= "";
    

    if(formValue.typeRep === "1")
    {nomTypeRep="Reparation mineure";}
    else if(formValue.typeRep === "2")
    {nomTypeRep="Reparation moyenne";} 
    else if(formValue.typeRep === "3")
    {nomTypeRep="Reparation majeure";} 
    const reparation = {
          idDepotVoiture: this.idDepotVoit,
          descReparation: formValue.descRep,
          montantRep: formValue.montantRep,
          typeReparation:formValue.typeRep,
          nomTypeReparation:nomTypeRep
    }
    this.reparationService.ajoutReparation(reparation).subscribe();
    console.log(reparation);
    this.reload();
      
   };

   getDepotVoitParId(id:any){
    this.voitureService.getDepotVoitureParId(this.idDepotVoit).subscribe((data: any)  =>{
        this.depotvoiture =data as any[];
        this.numVoiture= this.depotvoiture[0].numVoiture;
        this.dateDepotVoit=this.depotvoiture[0].dateDepotVoit;
        this.nbreReparationAFaire= this.depotvoiture[0].nbreReparationAFaire;
        this.nbreReparationFini= this.depotvoiture[0].nbreReparationFini;
       
     });
  }

   reload()
  {
    location.reload();
  }
}
