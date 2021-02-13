import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-logo-start',
  templateUrl: './logo-start.component.html',
  styleUrls: ['./logo-start.component.css']
})
export class LogoStartComponent implements OnInit {
 
  private routeTime :Observable<any>= timer(3000); 

  constructor(private routing:Router) { }
  
 
  
  ngOnInit(): void {
    
    this.routeTime.subscribe(()=>{
      this.routing.navigate(["/home"]);
    });

  }

}
