import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepotVoitureService } from '../services/depot-voiture.service';
import { ReparationService } from '../services/reparation.service';

@Component({
  selector: 'app-liste-reparation',
  templateUrl: './liste-reparation.component.html',
  styleUrls: ['./liste-reparation.component.css']
})
export class ListeReparationComponent implements OnInit {

  listeReparation: any[] = [];
  
  idDepotVoit=  this.route.snapshot.params['idDepotVoit'];

  depotvoiture: any[] = [];
  etatAvancementGeneral: string | undefined;
  numVoiture: any;
  dateDepotVoit: any;
  nbreReparationAFaire: any;
  nbreReparationFini: any;
  montantTTlPaiement:any;
  bonDeSortie: any;
  bonDeSortieDesc:any;
  constructor(private reparationService:ReparationService,private route: ActivatedRoute,
    private voitureService:DepotVoitureService) { }
  


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
        if(this.depotvoiture[0].nbreReparationAFaire >0)
        {
          if(this.depotvoiture[0].nbreReparationAFaire===this.depotvoiture[0].nbreReparationFini)
          {
            this.etatAvancementGeneral= "Ensemble des réparations terminée";
          }
          else
          {
            this.etatAvancementGeneral= "Réparations pas finies";
          }
        }
     });
  }


}
