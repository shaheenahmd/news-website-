import { Component,OnInit } from '@angular/core';
import { NewapicallserviceService } from '../service/newapicallservice.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private getApi:NewapicallserviceService){}

  displaySportsData:any=[];

  ngOnInit():void {
   this.getApi.sportsnews().subscribe((result)=>{
    console.log(result)
    this.displaySportsData=result.articles;
   })

  }

}
