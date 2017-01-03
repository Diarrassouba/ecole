export class Adresse {
  private _quartier:string;
  private _codePostal:string;
  private _email:string;


  constructor(quartier: string='', codePostal: string='', email: string='') {
    this._quartier = quartier;
    this._codePostal = codePostal;
    this._email = email;
  }


  get quartier(): string {
    return this._quartier;
  }

  set quartier(value: string) {
    this._quartier = value;
  }

  get codePostal(): string {
    return this._codePostal;
  }

  set codePostal(value: string) {
    this._codePostal = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
}
