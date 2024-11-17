class auto {
  constructor () { //(posX, posY){
  this.posX = width/2; //posX;
  this.posY = 400; //posY;
  this.choque = false;
  this.vida = true;
  }
  
  dibujar () {
    fill (0, 255, 0);
    rect (posX, posY, 20, 20);
  }
  moverDerecha () {
  }
  moverIzquierda () {
  }
  sonidoColision () {
  }
}
