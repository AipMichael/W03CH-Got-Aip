class Personaje {
  nombre;
  familia;
  edad;
  estado = "vivo";

  constructor(nombre, familia, edad) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
  }

  comunicar() {}

  morir() {
    this.estado = "muerto";
  }
}

class Reina extends Personaje {
  constructor(nombre, familia, edad, reinado) {
    super(nombre, familia, edad);
    if (typeof reinado === "number") {
      this.reinado = reinado;
    }
  }

  comunicar() {
    return "Vais a morir todos";
  }
}

class Asesora extends Personaje {
  constructor(nombre, familia, edad, asesorada) {
    super(nombre, familia, edad);
    if (
      asesorada instanceof Reina ||
      asesorada instanceof Asesora ||
      asesorada instanceof Escudera ||
      asesorada instanceof Luchadora
    ) {
      this.asesorada = asesorada;
    }
  }

  comunicar() {
    return "No sé por qué, pero creo que voy a morir pronto";
  }
}

class Luchadora extends Personaje {
  constructor(nombre, familia, edad, arma, destreza) {
    super(nombre, familia, edad);
    this.arma = arma;
    if (typeof destreza === "number" && destreza < 10 && destreza > 10) {
      this.destreza = destreza;
    }
  }

  comunicar() {
    return "Primero pego y luego pregunto";
  }
}

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

const joffrey = new Reina("Joffrey", "Baratheon", 3);
const jaime = new Luchadora("Jaime", "Lannister", 20, "honda", 7);
console.log(jaime.morir());
