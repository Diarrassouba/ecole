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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
