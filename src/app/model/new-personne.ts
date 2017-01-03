export class NewPersonne {

  private titre:string;
  private nom:string;
  private prenom:string;
  private numCni:string;
  private email: string;
  private codePostal:string;
  private quartier:string;


  constructor(titre: string, nom: string, prenom: string, numCni: string, email: string, codePostal: string, quartier: string) {
    this.titre = titre;
    this.nom = nom;
    this.prenom = prenom;
    this.numCni = numCni;
    this.email = email;
    this.codePostal = codePostal;
    this.quartier = quartier;
  }

}
