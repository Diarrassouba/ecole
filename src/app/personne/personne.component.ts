import {Component, OnInit} from '@angular/core';
import {Personne} from "../model/personne";
import {NewPersonne} from "../model/new-personne";
import {PersonneService} from "../services/personne.service";
import {ModifPersonne} from "../model/modif-personne";

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  title = 'LES INVITES AUTORISEES!';
  dataPersonnes: Personne[];
  displayDialog: boolean;
  displayDialog2: boolean;
  personne: Personne;
  newPersonne: boolean;
  suppPersonne: any;
  newPers: NewPersonne;
  selectedPersonne: Personne;
  pers: Personne;


  constructor(private personneService: PersonneService) {
  }

  ngOnInit() {
    this.getAllsPers();
  }

  getAllsPers() {
    this.personneService.gerPersonnes()
      .subscribe((data) => this.dataPersonnes = data.body,
        error => console.log(error),
        () => console.log("getAllPers() bien executé"))
  };

  showDialogToAdd() {
    this.newPersonne = true;
    this.newPers = new NewPersonne('', '', '', '', '', '', '');
    this.displayDialog = true;
  }

  save(newPers) {
    this.personneService.ajouter(newPers).subscribe((data) => this.pers = data,
      error => console.log(error),
      () => console.log("Enregistrement reussi"));
    this.displayDialog = false;
    // this.personneService.gerPersonnes()
    //   .subscribe((data) => this.dataPersonnes = data.body);
    this.getAllsPers();
  }

  delete() {
    let idPe: number = this.selectedPersonne.id;
    this.personneService.delete(idPe).subscribe(
      (data) => this.suppPersonne = data,
      error => console.log(error),
      () => console.log("Personne :" + idPe + "a été bien supprimé"));

    this.getAllsPers();
    this.displayDialog2 = false;
  }

  modfier(personne) {
    // Reconstruire la classe personne à modifPersonne
    let idModif:number=personne.id
    let modifPerso: ModifPersonne = new ModifPersonne(personne.id, personne.titre, personne.nom, personne.prenom, personne.numCni,
      personne.adresse.email, personne.adresse.codePostal, personne.adresse.quartier);

    this.personneService.modifier(modifPerso).subscribe(
      (data) => this.personne = data.body,
      error => console.log(error),
      () => console.log("La personne " +idModif + " a été bien modifier")
    )

    this.displayDialog2 = false;
    this.getAllsPers();
  }

  annuler() {

    this.displayDialog2 = false;
  }

  onRowSelect(event) {
    this.newPersonne = false;
    this.personne = this.clonePersonne(event.data);
    this.displayDialog2 = true;
  }

  clonePersonne(p: Personne): Personne {
    let newPers = new Personne(0,'', '', '', '', null);
    for (let prop in p) {
      newPers[prop] = p[prop];
    }
    return newPers;
  }

}
