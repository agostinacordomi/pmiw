//obtaculos que spawnean y caen verticalmente por el camino
class obstaculo {
  constructor () { //(posX, posY){
    this.spawn = true;
    this.posX = width/2; //posX;
    this.posY = 100; //posY;
    this.colision = false;
  }
  
  dibujar () {
      fill (0);
      ellipse (this.posX , this.posY , 10 , 10);
      //this.caida ();
  }
  
  colision () {
    this.colision = true;
  }
  
 caida () {
   this.posY += 10;
 }
}
