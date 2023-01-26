import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReparationService } from '../services/reparation.service';

@Component({
  selector: 'app-liste-reparation',
  templateUrl: './liste-reparation.component.html',
  styleUrls: ['./liste-reparation.component.css']
})
export class ListeReparationComponent implements OnInit {
  listeReparation: any[] = [];
  constructor(private reparationService:ReparationService,private route: ActivatedRoute) { }
  idDepotVoit=  this.route.snapshot.params['idDepotVoit'];


  ngOnInit(): void {
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

}
