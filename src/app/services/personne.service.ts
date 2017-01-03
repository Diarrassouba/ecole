import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Personne} from "../model/personne";
import {ModifPersonne} from "../model/modif-personne";
import {NewPersonne} from "../model/new-personne";


@Injectable()
export class PersonneService {

  constructor(private http: Http) {
  }

  //liste personnnes
  gerPersonnes() {
    return this.http.get('http://localhost:8080/personnes')
      .map(res => res.json());
  }

  // Ajouter une personne
  ajouter(p: Personne) {
    let newPersonne: NewPersonne = new NewPersonne(p.titre, p.nom, p.prenom, p.numCni,
      p.adresse.email, p.adresse.codePostal, p.adresse.quartier);
    return this.http.post('http://localhost:8080/personnes', newPersonne)
      .map(res => res.json());

  }

  delete(id: number) {
    return this.http.delete('http://localhost:8080/personnes/' + id)
      .map(res => res.json());
  }

  modifier(p: Personne) {
    let modifPers: ModifPersonne = new ModifPersonne(p.id, p.titre, p.nom,
      p.prenom, p.numCni, p.adresse.email, p.adresse.codePostal, p.adresse.quartier);
    return this.http.put('http://localhost:8080/personnes', modifPers)
      .map(res => res.json());
  }

}
