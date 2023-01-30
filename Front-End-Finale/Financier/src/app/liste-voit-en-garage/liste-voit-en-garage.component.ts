import { Component, OnInit } from '@angular/core';
import { DepotVoitureService } from '../services/depot-voiture.service';

@Component({
  selector: 'app-liste-voit-en-garage',
  templateUrl: './liste-voit-en-garage.component.html',
  styleUrls: ['./liste-voit-en-garage.component.css']
})
export class ListeVoitEnGarageComponent implements OnInit {

  listeDepotVoituresEnGarage: any[] = [];
  //voitureParNumero: any[] = [];
  constructor(private depotVoitureService:DepotVoitureService) { }

  ngOnInit(): void {
    this.getListeVoitureEngarage();
    // this.depotVoitureService.fonctionRefresh.subscribe(()=>{
    //   this.getListeVoitureEngarage();
    // })
  }

  getListeVoitureEngarage(){
    
    this.depotVoitureService.getListeVoitureEngarage().subscribe((data: any)  =>{
        this.listeDepotVoituresEnGarage =data as any[];
     });
     
  }

  getDepotVoitureParNumero(formValue:any)
  {
    this.depotVoitureService.getDepotVoitureParNumero(formValue.numVoiture).subscribe((data: any)  =>{
      this.listeDepotVoituresEnGarage =data as any[];
   });

  }

  reload()
  {
    location.reload();
  }

}
