import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FicheInterventionComponent } from './fiche-intervention/fiche-intervention.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'listeProgram',component : HomeComponent},
  {path : 'createFicheIntervention' ,component : FicheInterventionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
