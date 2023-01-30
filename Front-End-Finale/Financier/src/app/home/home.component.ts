import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Client';

  isLoggedIn$!: Observable<boolean>;
  
  testUser = JSON.parse(localStorage.getItem('user') || '{}');

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.isLoggedIn;
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
    this.router.navigate(['/login']);
  }

  reload()
  {
    location.reload();
  }

}
