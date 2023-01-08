import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuisinessComponent } from './buisiness/buisiness.component';
import { SportsComponent } from './sports/sports.component';
import { TechComponent } from './tech/tech.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';

const routes: Routes = [
  {path:"",component:TopHeadingComponent}, //top headline & home
  {path:'sports',component:SportsComponent},
  {path:'tech',component:TechComponent},
  {path:'buisiness',component:BuisinessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
