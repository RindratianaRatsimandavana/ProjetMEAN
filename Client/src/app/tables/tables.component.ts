import { Component, OnInit } from '@angular/core';
import { DepotVoitureService } from 'app/services/depot-voiture.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;


    listeDepotVoitures: any[] = [];

  constructor(private depotVoitureService:DepotVoitureService) { }

   ngOnInit() {
   
        this.getListeDepotVoiture();
        this.test();
        //console.log("length "+this.listeDepotVoitures.length);
    //  console.log("date test "+this.listeDepotVoitures[0].dateDepotVoit);
    //   this.tableData1 = {
    //       headerRow: [ 'Image', 'Numero voiture', 'Date depot', 'Etat Reception'],
    //       dataRows: [
    //           ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout'],
    //           ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas'],
    //           ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux'],
    //           ['4', 'Philip Chaney', 'Korea, South', 'Overland Park'],
    //           ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten'],
    //           ['6', 'Mason Porter', 'Chile', 'Gloucester']
    //       ]
    //   };
  }


  getListeDepotVoiture(){
    this.depotVoitureService.getListeDepotVoiture().subscribe((data: any)  =>{
        console.log("length data "+data.length);
        this.listeDepotVoitures =data as any[];

          this.tableData1 = {
          headerRow: [ 'Image', 'Numero voiture', 'Date depot', 'Etat Reception'],
          dataRows: [
              ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout'],
              ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas'],
              ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux'],
              ['4', 'Philip Chaney', 'Korea, South', 'Overland Park'],
              ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten'],
              ['6', 'Mason Porter', 'Chile', 'Gloucester']
          ]
      };


        // tonga dia eto ny traitement fa lasa assynchrone raha ery
        // console.log("length liste "+this.listeDepotVoitures.length);
        // console.log("date test "+this.listeDepotVoitures[0].dateDepotVoit);
        // console.log("date format "+this.listeDepotVoitures[0].dateDepotVoit.substring(0, 10));
     });
  }

  test()
  {
    console.log("length test"+this.listeDepotVoitures.length);
  }


}
