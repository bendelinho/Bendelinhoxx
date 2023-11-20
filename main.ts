import Gara from "./models/Gara";
import { Auto, Moto, Velivolo, Veicolo } from "./models/Veicolo";


function creaVeicolo(tipo: string, nome: string, colore: string): Veicolo | null {
  switch (tipo.toLowerCase()) {
    case "auto":
      return new Auto(nome, colore);
    case "moto":
      return new Moto(nome, colore);
    case "velivolo":
      return new Velivolo(nome, colore);
    default:
      console.log("Tipo di veicolo non valido.");
      return null;
  }
}


function main() {
  const gara = new Gara();


  const veicoloUtente = creaVeicolo("auto", "AutoUtente", "Verde");
  if (veicoloUtente) {
    gara.aggiungiPartecipante(veicoloUtente);
  }


  for (let i = 1; i <= 4; i++) {
    const veicoloBot = creaVeicolo("moto", `Bot${i}`, "Grigio");
    if (veicoloBot) {
      gara.aggiungiPartecipante(veicoloBot);
    }
  }


  gara.avviaGara();


  gara.chiudiGara();
}


main();
