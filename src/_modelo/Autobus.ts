export class Autobus{
  private _matricula: string;
  private _a_fabricacion: number;

  constructor(matricula : string, a_fabricacion : number) {
    this._matricula = matricula;
    this._a_fabricacion = a_fabricacion;
  }

  public get a_fabricacion(): number {
    return this._a_fabricacion;
  }
  public set a_fabricacion(value: number) {
    this._a_fabricacion = value;
  }
  public get matricula(): string {
    return this._matricula;
  }
  public set matricula(value: string) {
    this._matricula = value;
  }

}
