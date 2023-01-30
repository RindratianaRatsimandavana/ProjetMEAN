import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-liste-voit-en-garage',
  templateUrl: './liste-voit-en-garage.component.html',
  styleUrls: ['./liste-voit-en-garage.component.css']
})
export class ListeVoitEnGarageComponent implements OnInit {

  listeVoitEnGarage: any[] = [];
  constructor(private voitureService:VoitureService) { }

  ngOnInit(): void {
    this.getListeVoitureEnGarage();
  }

  getListeVoitureEnGarage(){
    this.voitureService.getListeVoitEnGarage().subscribe((data: any)  =>{
        this.listeVoitEnGarage =data as any[];
     });
  }

  // receptionnerVoit(idDepotVoit: any,cible:any,valeur:any){
  //    this.voitureService.updateDepotVoit(idDepotVoit,cible,valeur).subscribe();
  // }


}
