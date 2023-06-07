export class Conductor{
  private _dni: string;
  private _nombre: string;

  constructor(dni : string, nombre : string ){
    this._dni = dni;
    this._nombre = nombre;
  }

  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }
  public get dni(): string {
    return this._dni;
  }
  public set dni(value: string) {
    this._dni = value;
  }

}
