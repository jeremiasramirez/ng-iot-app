import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  @Input() title : string = '';
  @Input() routeImage: string = '';
  @Input() isFan: boolean = false;
  @Input() classColors:string = '';

  constructor() { }

  ngOnInit(): void {
  }




  formatLabel(value: number) {
   
    if (value >= 1) {
      return value + '°';
     
    }

    return value;
  }
}

 
