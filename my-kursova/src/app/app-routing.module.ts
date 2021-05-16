import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {NoneComponent} from "./components/none/none.component";

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'ui', component: NoneComponent},
  {path: 'icons', component: NoneComponent},
  {path: 'forms', component: NoneComponent},
  {path: 'charts', component: NoneComponent},
  {path: 'tables', component: NoneComponent},
  {path: 'sample', component: NoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
