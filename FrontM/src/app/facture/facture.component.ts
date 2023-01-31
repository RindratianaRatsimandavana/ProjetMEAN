import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepotVoitureService } from '../services/depot-voiture.service';
import { ReparationService } from '../services/reparation.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {

  listeReparation: any[] = [];
  
  idDepotVoit=  this.route.snapshot.params['idDepotVoit'];

  offTestUser = JSON.parse(localStorage.getItem('user') || '{}');

  depotvoiture: any[] = [];
  etatAvancementGeneral: string | undefined;
  numVoiture: any;
  dateDepotVoit: any;
  nbreReparationAFaire: any;
  nbreReparationFini: any;
  montantTTlPaiement:any;
  bonDeSortie: any;
  bonDeSortieDesc:any;
  constructor(private reparationService:ReparationService,private route: ActivatedRoute,private voitureService:DepotVoitureService) { }
  


  ngOnInit(): void {
    this.getDepotVoitParId(this.idDepotVoit);
    this.getListeReparation();
    this.reparationService.fonctionRefresh.subscribe(()=>{
      this.getListeReparation();
    })
  }

  getListeReparation(){
    this.reparationService.getListeReparation(this.idDepotVoit).subscribe((data: any)  =>{
        this.listeReparation =data as any[];
     });
  }

  getDepotVoitParId(id:any){
    this.voitureService.getDepotVoitureParId(this.idDepotVoit).subscribe((data: any)  =>{
        this.depotvoiture =data as any[];
        this.numVoiture= this.depotvoiture[0].numVoiture;
        this.dateDepotVoit=this.depotvoiture[0].dateDepotVoit;
        this.nbreReparationAFaire= this.depotvoiture[0].nbreReparationAFaire;
        this.nbreReparationFini= this.depotvoiture[0].nbreReparationFini;
        this.montantTTlPaiement= this.depotvoiture[0].montantTTlPaiement;
        this.bonDeSortie = this.depotvoiture[0].bonDeSortie;
         //Refa sup à 0 ny réparations
         if(this.depotvoiture[0].montantTTlPaiement===this.depotvoiture[0].montantTotalPaye)
         {
           console.log("if(this.depotvoiture[0].montantTTlPaiement===this.depotvoiture[0].montantTotalPaye)");
           this.etatAvancementGeneral= "Totalité de réparation payé";
         }
         else
         {
           console.log("if(this.depotvoiture[0].montantTTlPaiement!=this.depotvoiture[0].montantTotalPaye)");
           this.etatAvancementGeneral= "Une ou plusieurs réparation(s) non payée(s)";
         }
     });
  }

  // getDonneClient()
  // {
  //   //Fangalana user any amin localstorage
  //     const offTestUser = JSON.parse(localStorage.getItem('user') || '{}');
  // }


}
