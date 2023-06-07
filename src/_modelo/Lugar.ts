export class Lugar{
  private _idLugar: number;
  private _nombre: string;

  constructor(idLugar : number, nombre : string) {
    this._idLugar = idLugar;
    this._nombre = nombre;
  }

  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }
  public get idLugar(): number {
    return this._idLugar;
  }
  public set idLugar(value: number) {
    this._idLugar = value;
  }
}
