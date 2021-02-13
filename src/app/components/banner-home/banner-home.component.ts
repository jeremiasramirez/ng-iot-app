import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-banner-home',
  templateUrl: './banner-home.component.html',
  styleUrls: ['./banner-home.component.css']
})
export class BannerHomeComponent implements OnInit {
  
  public isLoading:boolean=true;
  private timerLoading =  timer(2000);


  constructor() { }

  ngOnInit(): void {

    this.changeLoading()
  
  }

  private changeLoading():void{
    this.timerLoading.subscribe(()=>{
      this.isLoading = false;
    })
  }



}





