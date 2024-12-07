class Auto {
    constructor() {
      this.posX = width / 2; // Posición inicial centrada horizontalmente
      this.posY = 300; // Cerca de la parte inferior de la pantalla
      this.colision = false; // Estado inicial sin colisión
      this.vida = 3; // Vidas iniciales
      this.ancho = 250; // Ancho del auto
      this.alto = 30; // Altura del auto
      this.vel= 10;
    }
  
    // Método para dibujar el auto
    dibujar() {
      image(autoimg, this.posX, this.posY,234,173); // Dibujar la imagen
      console.log(this.posX);
    }
  
    // Método para mover a la derecha
    moverDerecha() {
      if (this.posX + this.ancho < width) {
        this.posX +=10;
      }
    }
  
    // Método para mover a la izquierda
    moverIzquierda() {
      if (this.posX > 0) {
        this.posX -= 10;
      }
    }
  
    // Método para detectar colisión
    detectarColision(objeto) {
      // Verifica si el auto está chocando con otro objeto
      //console.log(objeto.posY);
      for (let i = objeto.length - 1; i >= 0; i--) {
        if (
          objeto[i].posY >= 280 && objeto[i].posX > this.posX && objeto[i].posX < (this.posX + 234)
        ) {
          this.colision = true;
          this.sonidoColision(); // Ejecutar sonido
          objeto[i].colisionado = true;
          objeto[i].posY = -50;
          objeto[i].posX = 1000;
          return true;
        }
      }
      return false;
    }
  
    sonidoColision() {
  
        colision.play(); // Reproduce el sonido
  
      console.log("¡Colisión detectada!"); // Mensaje de depuración
    }
  }  
