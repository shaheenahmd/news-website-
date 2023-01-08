import { Component,OnInit } from '@angular/core';
import { NewapicallserviceService } from '../service/newapicallservice.service';

@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent implements OnInit {

  constructor(private getApi:NewapicallserviceService){}

  //display headline data
  displayTopHeadlineData:any=[];

  ngOnInit():void{
    this.getApi.topHeading().subscribe((result)=>{
      console.log(result);
      this.displayTopHeadlineData=result.articles
    })
  }

}
 