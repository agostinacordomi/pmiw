let juego;
let fondoimg, autoimg, rocaimg;
let pantalla = 0;
let tiempo;
//https://youtu.be/N3TrFQP8n_I

var colision;
let objetos = [];
let ultimoTiempo = 0;

function preload() {
  fondoimg = loadImage('data/fondo.png');
  autoimg = loadImage('data/auto1.png');
  rocaimg = loadImage('data/roca1.png');
  colision = loadSound('data/colision.wav');
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego(); 
  juego.iniciar();
  auto = new Auto();
  tiempo = new Timer(30); 
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
    mostrarCreditos();
    if (keyIsPressed) {
      if (key === 'R' || key === 'r') {
      pantalla = 0 }
    }
  }
}

function mostrarInstrucciones() {
  textAlign(CENTER, CENTER);
  textSize(20);
  fill(255);
  text(
    "Usa las teclas A y D para mover el auto.\n" +
      "Evita los obstáculos y acumula puntos.\n" +
      "Presiona cualquier tecla para comenzar.",
    width / 2,
    height / 2
  );

  if (keyIsPressed) {
     if (key === 'S' || key === 's') {
    tiempo.reiniciar(); // Reinicia el temporizador al iniciar el juego
    juego.reiniciar();
    pantalla = 1; // Cambia a la pantalla del juego
  }
}
}

function mostrarCreditos() {
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
}
