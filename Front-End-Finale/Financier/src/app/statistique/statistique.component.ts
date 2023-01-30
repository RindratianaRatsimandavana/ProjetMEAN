import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { DepotVoitureService } from '../services/depot-voiture.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  //chart: any;
  
  // labetTab=['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // dataY =[65, 59, 80, 81, 56, 55, 40];
  // typeChart= 'line';
  // nomIdChart= 'lineChart';
  
  stat1: any;
  valMoy: any;
  labetTab1: any;
  dataY1 :any;
  typeChart= 'line';
  nomIdChart= 'lineChart';
  

  constructor(private voitServ: DepotVoitureService) { }

  ngOnInit(): void {

    // const startDate = new Date(2017,12,30);
    // const endDate = new Date(2018,1,3);
    // const dayInterval = 1000 * 60 * 60 * 24; // 1 day
    // const halfDayInterval = 1000 * 60 * 60 * 12; // 1/2 day
    
    // console.log("Days", this.getDates(startDate, endDate, dayInterval));
    // console.log("Half Days", this.getDates(startDate, endDate, halfDayInterval));
    this.getStat1();
    this.getChart(this.labetTab1,this.dataY1);
    
  }

  
  
  getChart(x:any,y:any)
  {
    let lineChartData = {
      labels: x,
      datasets: [
        {
          label: 'Series A',
          data: y,
          backgroundColor: 'rgba(255,0,0,0.3)',
          borderColor: 'blue'
        }
      ]
    };
    let lineChartOptions = {
      responsive: true,
        scales: {
            y: {
              display: true
            }
          }
    };
    let lineChartLegend = true;
    let lineChartType = 'line';
    let ctx: any;
    
    ctx = document.getElementById('lineChart');
    new Chart(ctx, {
      type: 'line',
      data: lineChartData,
      options: lineChartOptions
    });

    let ctx2: any;
    ctx2 = document.getElementById('lineChart2');
    new Chart(ctx2, {
      type: 'bar',
      data: lineChartData,
      options: lineChartOptions
    });
  }

  // getJoursEntre2Date (startDate:any, endDate:any, addFn:any, interval:any) {

  //   addFn = addFn ;
  //   interval = interval || 1;
   
  //   var retVal = [];
  //   var current = new Date(startDate);
   
  //   while (current <= endDate) {
  //    retVal.push(new Date(current));
  //    current = addFn.call(current, interval);
  //   }
   
  //   return retVal;
   
  //  }

   getDates(startDate:any, endDate:any, interval:any) {
    const duration = endDate - startDate;
    const steps = duration / interval;
    return Array.from({length: steps+1}, (v,i) => new Date(startDate.valueOf() + (interval * i)));
    }
   

  getStatFilter()
    {
      const deb= document.getElementById('dateStart');
      const fin= document.getElementById('dateEnd');

    }

    getStat1(){
      this.voitServ.stat1().subscribe((data: any)  =>{
          this.stat1 =data as any;
          console.log("azo stat1");
            console.log(this.stat1.moyenneMaj);
            console.log(this.stat1.moyennetMoy);
            this.valMoy= this.stat1.moyenne;
            this.labetTab1=['Réparation mineure', 'Réparation moyenne', 'Réparation majeure'];
            this.dataY1= [1,2,3];

          console.log("azo stat2");
       });
    }
  

}
