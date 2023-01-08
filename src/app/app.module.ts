import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import{HttpClientModule} from '@angular/common/http';
import { NewapicallserviceService } from './service/newapicallservice.service';
import { TechComponent } from './tech/tech.component';
import { SportsComponent } from './sports/sports.component';
import { BuisinessComponent } from './buisiness/buisiness.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeadingComponent,
    TechComponent,
    SportsComponent,
    BuisinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewapicallserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
