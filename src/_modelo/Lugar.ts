export class Lugar{
  private _id_lugar: number;
  private _nombre: string;

  constructor(idLugar : number, nombre : string) {
    this._id_lugar = idLugar;
    this._nombre = nombre;
  }

  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }
  public get id_lugar(): number {
    return this._id_lugar;
  }
  public set id_lugar(value: number) {
    this._id_lugar = value;
  }
}
