let juego;
let fondoimg, fondo2img, autoimg, rocaimg;
let pantalla = 0;
let tiempo;
var colision;
let objetos = [];
let ultimoTiempo = 0;
let titulo;
let fuenteTitulo;

function preload() {
  fondoimg = loadImage('data/fondo.png');
  fondo2img = loadImage('data/fondo2.jpg');
  autoimg = loadImage('data/auto1.png');
  rocaimg = loadImage('data/roca1.png');
  colision = loadSound('data/colision.mp3');
  fuenteTitulo = loadFont('data/ComicalCartoon.ttf');
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego(); 
  juego.iniciar();
  auto = new Auto();
  tiempo = new Timer(30); 
  titulo = "La Máscara";
}

function draw() {
  background(fondoimg);
  console.log(pantalla);

  if (pantalla === 0) {
    mostrarInstrucciones();
  } else if (pantalla === 1) {
    juego.dibujar(); // Dibujar el juego
    tiempo.actualizar(); // Actualizar el temporizador
    tiempo.dibujar(); // Dibujar el temporizador

    if (millis() - ultimoTiempo > 1000) { // 1000 milisegundos = 1 segundo
      objetos.push( new Obstaculo(random(width), random(-50))); // Agregar al arreglo
      ultimoTiempo = millis(); // Actualizar el tiempo
    }
    for (let i = objetos.length - 1; i >= 0; i--) {
      objetos[i].dibujar();
    }

    // Control del auto
    if (keyIsPressed) {
      if (key === 'A' || key === 'a') {
        juego.moverIzquierda();
      } else if (key === 'D' || key === 'd') {
        juego.moverDerecha();
      }
    }

  } else if (pantalla === 2) {
    creditosPerdiste();
    if (keyIsPressed) {
      if (key === 'R' || key === 'r') {
      pantalla = 0 }
    }
  }
  
  else if (pantalla === 3) {
    creditosGanaste();
  }
}

function mostrarInstrucciones() {
  background(fondo2img);
  textAlign(CENTER, CENTER);
  textSize(20);
  fill(255);
  text(
    "Usa las teclas A y D para mover el auto.\n" +
      "Evita los obstáculos y acumula puntos.\n" +
      "Presiona la tabla espaciadora para comenzar",
    width / 2,
    height / 2 + 100
  );
  
    textSize(15);
  if (fuenteTitulo) {
    textFont(fuenteTitulo);  
  }
  fill(255);
  textAlign(CENTER);
  text("'Coraje el perro cobarde \n y La Mascara' \n El juego", width / 2, height / 2 - 50);
  

  textFont('Tahoma');
  textSize(18);

  if (keyIsPressed) {
     if (key === ' ' || key === ' ') {
    tiempo.reiniciar(); 
    juego.reiniciar();
    pantalla = 1; 
  }
}
}

function creditosPerdiste() {
  textAlign(CENTER, CENTER);
  textSize(15);
  fill(200);
  text(
    "Juego desarrollado por Agostina Cordomi y Nicolás Alberti.\n" +
      "PMIW Comisión 2.\n" +
      "Gracias por jugar!",
    width / 2,
    height - 40
  );
  
  textAlign(CENTER, CENTER);
  textSize(20);
  fill(255);
  text(
    "¡PERDISTE!\n" +
    "PRESIONA 'R' PARA JUGAR DE NUEVO",
    width / 2,
    height / 2)
}

function creditosGanaste() {
  textAlign(CENTER, CENTER);
  textSize(15);
  fill(200);
  text(
    "Juego desarrollado por Agostina Cordomi y Nicolás Alberti.\n" +
      "PMIW Comisión 2.\n" +
      "Gracias por jugar!",
    width / 2,
    height - 40
  );
  
  textAlign(CENTER, CENTER);
  textSize(20);
  fill(255);
  text(
    "¡GANASTE!\n" +
    "PRESIONA 'R' PARA JUGAR DE NUEVO",
    width / 2,
    height / 2)
}
