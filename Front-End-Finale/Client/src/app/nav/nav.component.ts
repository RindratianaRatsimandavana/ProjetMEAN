import { Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  testUser = JSON.parse(localStorage.getItem('user') || '{}');
  

  constructor() { }

  ngOnInit(): void {
    console.log((this.testUser && (Object.keys(this.testUser).length === 0)));
  }

  isEmptyObject(obj: any) {
    return (obj && (Object.keys(obj).length === 0));
  }

  logout()
  {
    //localStorage.clear();
    console.log("ato amin logout");
    localStorage.removeItem('user');
    this.testUser= null;
    this.reload();
  }

  reload()
  {
    location.reload();
  }

}
