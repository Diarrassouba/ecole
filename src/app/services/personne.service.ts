import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Personne} from "../model/personne";
import {ModifPersonne} from "../model/modif-personne";


@Injectable()
export class PersonneService {

  constructor(private http: Http) { }

  //liste personnnes
  gerPersonnes(){
    return this.http.get('http://localhost:8080/personnes')
      .map(res => res.json());
  }

  // Ajouter une personne
  ajouter(newPersonne:Personne){
    return this.http.post('http://localhost:8080/personnes',newPersonne)
      .map(res => res.json());

  }

  delete(id:number){
    return this.http.delete('http://localhost:8080/personnes/'+id)
      .map(res => res.json());
  }

  modifier(personne: ModifPersonne){
    return this.http.put('http://localhost:8080/personnes', personne)
      .map(res => res.json());
  }

}
