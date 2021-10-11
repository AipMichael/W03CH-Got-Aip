class Personaje {
  nombre;
  familia;
  edad;
  estado = "vivo";

  constructor(nombre, familia, edad) {
  nombre: nombre;
  familia: familia;
  edad: edad;
  }

  comunicar();

  morir () {
    this.estado = "muerto";
  }
}

class reina extends Personaje {
  constructor(reinado, ) {
    super(nombre, familia, edad);
    this.reinado: reinado;
  }

  comunicar () {
    return "Vais a morir todos";
  }

}


class asesora extends Personaje {
  constructor(asesorada) {
    super(nombre, familia, edad);
    if (asesorada === reina || asesorada === asesora || asesorada === escudera || asesorada === luchadora){
      this.asesorada: asesorada;
    }
    
  }

  comunicar () {
    return "No sé por qué, pero creo que voy a morir pronto";
  }

}

class luchadora extends Personaje {
  constructor(arma, destreza) {
    super(nombre, familia, edad);
    this.arma = arma;
    if (typeof destreza === "number" && destreza < 10 && destreza > 10){
      this.destreza: destreza;
    }
  }

  comunicar () {
    return "Primero pego y luego pregunto";
  }

}

class escudera extends Personaje {
  constructor(ama, pelotismo) {
    super(nombre, familia, edad);
    this.ama = ama;
    if (typeof pelotismo === "number" && pelotismo < 10 && pelotismo > 10){
      this.pelotismo: pelotismo;
    }
    if (ama === reina || ama === asesora || ama === escudera || ama === luchadora){
      this.ama: ama;
    }
    
  }

  comunicar () {
    return "Soy una loser";
  }

}