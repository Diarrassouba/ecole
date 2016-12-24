export class Adresse {
  private _quartier:string;
  private _contact:string[];
  private _email:string;


  constructor(quartier: string='', contact: string[]=[], email: string='') {
    this._quartier = quartier;
    this._contact = contact;
    this._email = email;
  }
}
