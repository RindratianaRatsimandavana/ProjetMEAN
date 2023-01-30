import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-liste-demande-depot',
  templateUrl: './liste-demande-depot.component.html',
  styleUrls: ['./liste-demande-depot.component.css']
})
export class ListeDemandeDepotComponent implements OnInit {
  listeDemandeDepotVoitures: any[] = [];
  constructor(private voitureService:VoitureService) { }

  ngOnInit(): void {
    this.getListeDepotVoiture();
    this.voitureService.fonctionRefresh.subscribe(()=>{
      this.getListeDepotVoiture();
    })
  }

  getListeDepotVoiture(){
    this.voitureService.getListedemandeDepotVoit().subscribe((data: any)  =>{
        this.listeDemandeDepotVoitures =data as any[];
     });
  }

  receptionnerVoit(idDepotVoit: any,cible:any,valeur:any){
     this.voitureService.updateDepotVoit(idDepotVoit,cible,valeur).subscribe();
  }

}
