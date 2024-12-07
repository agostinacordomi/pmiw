class Timer {
    constructor(duracion) {
      this.duracion = duracion; // Duración inicial (en segundos)
      this.tiempoRestante = duracion; // Tiempo que queda
      this.inicio = millis(); // Registrar el tiempo de inicio
      this.activo = false; // El temporizador comienza en pausa
    }
  
    // Iniciar el temporizador
    iniciar() {
      this.inicio = millis(); // Establece el momento de inicio
      this.activo = true; // Activa el temporizador
    }
  
    // Actualizar el temporizador
    actualizar() {
      if (this.activo) {
        let tiempoTranscurrido = (millis() - this.inicio) / 1000; // Convertir a segundos
        this.tiempoRestante = Math.max(this.duracion - tiempoTranscurrido, 0);
  
        if (this.tiempoRestante <= 0) {
          this.tiempoRestante = 0;
          this.activo = false; // Detiene el temporizador al llegar a 0
        }
      }
    }
  
    // Dibujar el temporizador
    dibujar() {
      this.actualizar();
      text("Tiempo: " + int(this.tiempoRestante + 1), width/2, 120);
    }
  
    // Reiniciar el temporizador
    reiniciar() {
      this.iniciar();
      this.tiempoRestante = this.duracion; // Restablece el tiempo
    }
  }  
