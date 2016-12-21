import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonneComponent } from './personne/personne.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import {PersonneService} from "./services/personne.service";
import {AlertModule, ButtonsModule, DatepickerModule, PaginationModule} from "ng2-bootstrap";
import {DataTableModule} from "primeng/components/datatable/datatable";
import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent,
    EtudiantComponent,
    AdministrateurComponent,
    EnseignantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [PersonneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
