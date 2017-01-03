import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonneComponent} from "./personne/personne.component";
import {AccueilComponent} from "./accueil/accueil.component";

const routes: Routes = [
  {path:"", component: AccueilComponent},
  {path:"accueil", component: AccueilComponent},
  {path: "invites", component: PersonneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {

  constructor() {}
}
