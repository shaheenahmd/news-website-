import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewapicallserviceService {

  constructor(private http:HttpClient) { }

  // topheadingNeWS API URL-----
  topHeadingApiUrl= "https://newsapi.org/v2/top-headlines?country=us&apiKey=010b8d8a1e804d1db303a4c3b8a1ed6f";
  topHeading():Observable<any>{
    return this.http.get(this.topHeadingApiUrl)
  }



  //sportnewsApi----------------------
  sportsNewsApi="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=010b8d8a1e804d1db303a4c3b8a1ed6f"
  sportsnews():Observable<any>{
    return this.http.get(this.sportsNewsApi)
  }

  
  //TechnologynewsApi----------------------
  techNewsApi="https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=010b8d8a1e804d1db303a4c3b8a1ed6f"
  technews():Observable<any>{
    return this.http.get(this.techNewsApi)
  }

   //BuisinessNewsApi----------------------
   buisinessNewsApi="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=010b8d8a1e804d1db303a4c3b8a1ed6f"
   buisinessNews():Observable<any>{
     return this.http.get(this.buisinessNewsApi)
   }

}



