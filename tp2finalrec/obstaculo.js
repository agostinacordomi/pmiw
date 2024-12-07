class Obstaculo {
    constructor(posX, posY) {
      this.spawn = true; // El obstáculo aparece inicialmente
      this.posX = posX; // Posición horizontal inicial
      this.posY = posY; // Posición vertical inicial
      this.colisionado = false; // Estado de colisión
      this.diametro = 20; // Tamaño del obstáculo
      this.velocidad = 5; // Velocidad de caída
    }
  
    // Método para dibujar el obstáculo
     dibujar() {
      image(rocaimg, this.posX, this.posY, 88, 60); // Dibujar la imagen
      this.caida();
    }
    // Método para marcar colisión
    colision() {
      this.colisionado = true;
      this.spawn = false; // Deja de mostrarse tras una colisión
    }
  
    // Método para manejar la caída
    caida() {
      this.posY += this.velocidad;
  
      // Eliminar el obstáculo si pasa el borde inferior de la pantalla
      if (this.posY > height) {
        this.posX = 1000;
      }
    }
  }  
