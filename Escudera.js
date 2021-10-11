class Escudera extends Personaje {
  constructor(nombre, familia, edad, ama, pelotismo) {
    super(nombre, familia, edad);
    this.ama = ama;
    if (typeof pelotismo === "number" && pelotismo < 10 && pelotismo > 10) {
      this.pelotismo = pelotismo;
    }
    if (
      ama === instancereina ||
      ama === asesora ||
      ama === escudera ||
      ama === luchadora
    ) {
      this.ama = ama;
    }
  }

  comunicar() {
    return "Soy una loser";
  }
}

export default Escudera;
