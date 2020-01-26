import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyformComponent } from './myform/myform.component';
import { Myform1Component } from "./myform1/myform1.component";
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'myform', component:MyformComponent},
  {path:'myform1',component:Myform1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
