import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Residence } from './models/residence';
import { ResidenceComponent } from './residence/residence.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'', component:HomeComponent }, //hedhi par default yet7ali l products
  { path: 'product', component: HomeComponent },
  { path: 'residence', component: ResidenceComponent },
  { path: '**', component:NotfoundComponent }  // Redirection en cas d'URL inconnue

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
