import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListeProgComponent } from './liste-prog/liste-prog.component';
import { ProgramComponent } from './program/program.component';
import { DetailProgramComponent } from './detail-program/detail-program.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FicheInterventionComponent } from './fiche-intervention/fiche-intervention.component';
import { FormsModule } from '@angular/forms';
import { ListeFicheInterventionComponent } from './liste-fiche-intervention/liste-fiche-intervention.component';
import { PrintFicheInterventionComponent } from './print-fiche-intervention/print-fiche-intervention.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListeProgComponent,
    ProgramComponent,
    DetailProgramComponent,
    NavbarComponent,
    FicheInterventionComponent,
    ListeFicheInterventionComponent,
    PrintFicheInterventionComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    MatGridListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
