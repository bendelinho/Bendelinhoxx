
export interface Veicolo {
    nome: string;
    colore: string;
    accelerazione: number;
    tempoAvvio: number;
    tempoTrascorso: number;
    start(): void;
    getPosizione(): number;
  }
  

  export abstract class VeicoloBase implements Veicolo {
    nome: string;
    colore: string;
    accelerazione: number;
    tempoAvvio: number;
    tempoTrascorso: number = 0;
  
    constructor(nome: string, colore: string, accelerazione: number, tempoAvvio: number) {
      this.nome = nome;
      this.colore = colore;
      this.accelerazione = accelerazione;
      this.tempoAvvio = tempoAvvio;
    }
  
    start(): void {
      this.tempoTrascorso = 0;
      console.log(`${this.nome} è partito!`);
    }
  
    getPosizione(): number {

      return 0.5 * this.accelerazione * Math.pow(this.tempoTrascorso, 2);
    }
  }
  

  export class Auto extends VeicoloBase {
    constructor(nome: string, colore: string) {
      super(nome, colore, 5, 0);
    }
  }
  
  export class Moto extends VeicoloBase {
    constructor(nome: string, colore: string) {
      super(nome, colore, 8, 0);
    }
  }
  
  export class Velivolo extends VeicoloBase {
    constructor(nome: string, colore: string) {
      super(nome, colore, 15, 0);
    }
  }
  
  export default Veicolo;