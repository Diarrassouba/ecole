import {Component, OnInit} from '@angular/core';
import {Personne} from "../model/personne";
import {NewPersonne} from "../model/new-personne";
import {PersonneService} from "../services/personne.service";

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

}
