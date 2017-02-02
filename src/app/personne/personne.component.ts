import {Component, OnInit} from '@angular/core';
import {Personne} from "../model/personne";
import {NewPersonne} from "../model/new-personne";
import {PersonneService} from "../services/personne.service";
import {ModifPersonne} from "../model/modif-personne";
import {Adresse} from "../model/adresse";

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  title = 'LES INVITES AUTORISEES!';
  dataPersonnes: Array<Personne>;
  status:number;
  messages:string[];
  displayDialog: boolean;
  // displayDialog2: boolean;
  personne: Personne;
  newPersonne: boolean;
  suppPersonne: any;
  // newPers: NewPersonne;
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
        () => console.log("getAllPers() bien executé de status"))
  };

  showDialogToAdd() {
    this.newPersonne = true;
    let ad:Adresse=new Adresse('','','');
    this.personne = new Personne(null,'','','','',ad);
    this.displayDialog = true;
  }

  save(personne) {
    this.messages=null;
    if(this.newPersonne){
      this.personneService.ajouter(personne).subscribe(
        (data) => {this.personne = data.body;
      this.status=data.status;
      this.messages=data.messages},
        error => console.log(error),
        () => console.log(`Enregistrement status: ${this.status} de message: ${this.messages}`));
    }else {
      this.personneService.modifier(personne).subscribe(
        (data) => {this.personne = data.body;
        this.status=data.status;
        this.messages=data.messages},
        error => console.log(error),
        () => console.log(`La personne ${personne.id} a été bien  modifier avec 
        le status ${this.status} 
        de message: ${this.messages}`)
      )
    }

    this.getAllsPers();
    this.displayDialog = false;

  }

  delete() {
    if (!this.newPersonne){
      let idPe: number = this.selectedPersonne.id;
      this.personneService.delete(idPe).subscribe(
        (data) => this.suppPersonne = data.body,
        error => console.log(error),
        () => console.log(`Personne: ${idPe} a été bien supprimé`));

    }else {
      this.displayDialog = false;
      return;
  }

    this.getAllsPers();
    this.displayDialog = false;
  }

  // modfier(personne) {
  //   // Reconstruire la classe personne à modifPersonne
  //   let idModif:number=personne.id
  //   let modifPerso: ModifPersonne = new ModifPersonne(personne.id, personne.titre, personne.nom, personne.prenom, personne.numCni,
  //     personne.adresse.email, personne.adresse.codePostal, personne.adresse.quartier);
  //
  //
  //
  //   this.displayDialog2 = false;
  //   this.getAllsPers();
  // }

  annuler() {

    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newPersonne = false;
    this.personne = this.clonePersonne(event.data);
    this.displayDialog = true;
  }

  clonePersonne(p: Personne): Personne {
    let ad:Adresse= new Adresse('','','');
    let newPers = new Personne(0,'', '', '', '', ad);
    for (let prop in p) {
      newPers[prop] = p[prop];
    }
    return newPers;
  }


}
