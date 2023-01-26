import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { reparations } from '../models/reparation';
import { ReparationService } from '../services/reparation.service';

@Component({
  selector: 'app-modif-reparation',
  templateUrl: './modif-reparation.component.html',
  styleUrls: ['./modif-reparation.component.css']
})
export class ModifReparationComponent implements OnInit {
  //listeReparation: any[] = [];
  constructor(private reparationService:ReparationService,private route:ActivatedRoute) { }
  idReparation=  this.route.snapshot.params['idReparation'];
  reparation = {} as reparations;
  //  option =[{value:"1", nomValue:"Réparation mineure"},
  //               {value:"2", nomValue:"Réparation moyenne"},
  //               {value:"3", nomValue:"Réparation majeure"}
  //             ];

// typeDeReparation :any;
// valEtatAv :any;

  ngOnInit(): void {
    console.log('salutuuuuuu');
    this.getReparationParId();
  }

  getReparationParId(){
    this.reparationService.getListeReparationParId(this.idReparation).subscribe((data)  =>{
        this.reparation = data;
        // this.typeDeReparation=this.reparation.typeReparation;
         console.log("t1");
         console.log(this.reparation.typeReparation);
         console.log("t2");
        // this.valEtatAv=this.reparation.valEtatAv;
        // console.log("teto");
        // console.log(this.typeDeReparation);
        // console.log("teto2");
     });
  }

  modifRep(formValue:any)
  {
    this.reparationService.updateReparation(this.idReparation,"avancement",formValue.valEtatAv).subscribe();
    this.reload();
  }

  reload()
  {
    location.reload();
  }

}
