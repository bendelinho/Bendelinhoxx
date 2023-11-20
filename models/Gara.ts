import Veicolo from "./Veicolo";
class Gara {
  partecipanti: Veicolo[] = [];

  aggiungiPartecipante(veicolo: Veicolo): void {
    this.partecipanti.push(veicolo);
    console.log(`${veicolo.nome} è stato aggiunto alla gara!`);
  }

  avviaGara(): void {
    console.log("La gara è iniziata!");
    this.partecipanti.forEach((veicolo) => veicolo.start());
  }

  chiudiGara(): void {
    setTimeout(() => {
      this.partecipanti.sort((a, b) => b.getPosizione() - a.getPosizione());
      const vincitore = this.partecipanti[0];
      console.log(`La gara è finita! Il vincitore è ${vincitore.nome}!`);
    }, 10000);
  }
}

export default Gara;