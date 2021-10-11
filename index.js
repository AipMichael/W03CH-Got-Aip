class Personaje {
  nombre;
  familia;
  edad;
  estado = "vivo";
  constructor() {}

  comunicar();

  morir () {
    this.estado = "muerto";
  }
}

class reina extends Personaje {
  constructor(reinado, ) {
    super();
    this.reinado: reinado;
  }

  comunicar () {
    return "Vais a morir todos";
  }

}


class asesora extends Personaje {
  constructor(asesorada) {
    super();
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
    super();
    this.arma = arma;
    if (asesorada === reina || asesorada === asesora || asesorada === escudera || asesorada === luchadora){
      this.asesorada: asesorada;
    }
    
  }

  comunicar () {
    return "No sé por qué, pero creo que voy a morir pronto";
  }

}