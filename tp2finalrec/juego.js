class Juego {
    constructor() {
      this.auto = null; // Instancia del auto
      this.obstaculos = []; // Arreglo para múltiples obstáculos
      this.jugando = false; // Estado del juego
      this.gana = false; // Determina si el personaje ganó
    }
  
    // Método para dibujar los elementos en pantalla
    dibujar() {
      if (this.jugando) {
        // Dibujar auto
        this.auto.dibujar();
  
        //this.puntuacion.dibujar();
        
        // Dibujar obstáculos
        if (this.auto.detectarColision(objetos)) {
          this.auto.vida -= 1;
        }
  
        // Filtrar obstáculos colisionados
        this.obstaculos = this.obstaculos.filter((obstaculo) => !obstaculo.colisionado);
  
        // Verificar si el jugador gana o pierde
        if (this.auto.vida <= 0) {
          this.jugando = false;
          pantalla = 2;
        } else if (this.puntuacion >= this.metaPuntos) {
          this.jugando = false;
          this.personajeGana();
        }
      }
    }
  
    // Método para iniciar el juego
    iniciar() {
      this.crearAuto();
      this.jugando = true;
      this.puntuacion = 0;
      this.auto.vida = 3;
      this.obstaculos = [];
    }
  
    // Método para reiniciar el juego
    reiniciar() {
      this.iniciar();
    }
  
    // Método para crear un auto
    crearAuto() {
      this.auto = new Auto();
    }
  
    moverIzquierda() {
      this.auto.moverIzquierda();
    }
  
    moverDerecha() {
      this.auto.moverDerecha();
    }
  }  
