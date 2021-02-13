import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-banner-home',
  templateUrl: './banner-home.component.html',
  styleUrls: ['./banner-home.component.css']
})
export class BannerHomeComponent implements OnInit {
  
  public isLoading:boolean=true;
  private timerLoading :Observable<any> = new Observable;

  constructor() { }

  ngOnInit(): void {

    this.timerLoading=timer(3000);
    this.changeLoading()
  
  }
   
 
  private changeLoading():void{

    this.timerLoading.subscribe(()=>{
      this.isLoading = false;
    })

  }



}





