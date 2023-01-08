import { Component,OnInit } from '@angular/core';
import { NewapicallserviceService } from '../service/newapicallservice.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private getApi:NewapicallserviceService){}

  displayTechData:any=[]

  ngOnInit():void{
    this.getApi.technews().subscribe((result)=>{
      console.log(result)
      this.displayTechData=result.articles
    })
  }

}
