import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { depotvoitures } from '../models/depotvoitures';
import { ReparationService } from '../services/reparation.service';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-liste-reparation',
  templateUrl: './liste-reparation.component.html',
  styleUrls: ['./liste-reparation.component.css']
})
export class ListeReparationComponent implements OnInit {
  listeReparation: any[] = [];
  depotvoiture: any[] = [];
  etatAvancementGeneral: string | undefined;
  numVoiture: any;
  dateDepotVoit: any;
  nbreReparationAFaire: any;
  nbreReparationFini: any;
  montantTTlPaiement:any;
  bonDeSortie: any;
  bonDeSortieDesc:any;

  constructor(private reparationService:ReparationService,private route: ActivatedRoute,private routeUrl: Router,
    private voitureService:VoitureService) { }
  idDepotVoit=  this.route.snapshot.params['idDepotVoit'];


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

  validerBonSortie(idDepotVoit: any,cible:any,valeur:any)
  {
    this.voitureService.updateDepotVoit(idDepotVoit,cible,valeur).subscribe();
    this.routeUrl.navigateByUrl('/login');
  }

 

}
