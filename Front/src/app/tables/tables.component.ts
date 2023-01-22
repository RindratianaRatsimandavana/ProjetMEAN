import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
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
  }

}
