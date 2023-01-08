import { Component } from '@angular/core';
import { NewapicallserviceService } from '../service/newapicallservice.service';

@Component({
  selector: 'app-buisiness',
  templateUrl: './buisiness.component.html',
  styleUrls: ['./buisiness.component.css']
})
export class BuisinessComponent {

  constructor(private getApi:NewapicallserviceService){}

  DisplayBuisinessData:any=[]
  ngOnInit(){
     this.getApi.buisinessNews().subscribe((result=>{
      console.log(result)
      this.DisplayBuisinessData=result.articles
      
     })) 
  }

}
