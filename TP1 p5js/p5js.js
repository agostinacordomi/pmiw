//www.youtube.com/watch?v=5Ev6CrJSYIE
let t, m;
let movimiento = 0;
let velocidad = 0.01; 
let cuadradoSize = 20; 
let movimientoActivo = true;
let img;

function preload() {
  img = loadImage("data/vasarely.jpg");
}

function setup() {
  createCanvas(800, 400); 
  m = 20; // número de cuadrados en una fila/columna
  t = width / 2 / m; // tamaño de cada cuadro basado en el número de cuadrados y el tamaño de la pantalla
}

function draw() {
  background(20, 100, 72); 
  image(img, 0, 0, width / 2, height);

  // grilla de cuadrados y elipses 
  for (let a = 0; a < m; a++) { // recorrido de las filas
    for (let k = 0; k < m; k++) { // recorrido de las columnas
      // cuadrados
      fill(20, 100, 72);
      stroke(0);
      strokeWeight(0.5);
      rect((a * t) + width / 2, k * t, cuadradoSize, cuadradoSize);

      // elipses
      let c = map(calcularDistancia((a * t) + width / 2, k * t, width * 0.75, height / 2), 0, width / 4, 255, 0); // Color basado en la distancia al centro del lado derecho
      fill(c, 36, 40);
      noStroke();
      let diametro = map(sin(movimiento + a * 0.1 + k * 0.1), -1, 1, 10, 20); // Tamaño de la elipse cambia con el movimiento
      ellipse((a * t) + width / 2 + cuadradoSize / 2, k * t + cuadradoSize / 2, diametro, diametro);
    }
  }

  // Control de movimiento de las elipses
  if (movimientoActivo) {
    movimiento += velocidad;
  }
}

// evento de teclado y condicionales
function keyPressed() {
  if (key === 's' || key === 'S') {
    movimientoActivo = false; // Detiene el movimiento de las elipses
  } else if (key === 'r' || key === 'R') {
    resetMov(); // Reinicia el movimiento de las elipses
  }
}
// función para reiniciar variables a su estado original
function resetMov() {
  movimiento = 0; // reinicia el valor de movimiento
  movimientoActivo = true; // activa nuevamente el movimiento
  loop(); // reinicia la actualización del sketch
}

// calcular distancia entre dos puntos
function calcularDistancia(x1, y1, x2, y2) {
  let distancia = dist(x1, y1, x2, y2);
  return distancia;
}

// cambiar tamaño de cuadrados verdes
function cambiarTamanioCuadrados(nuevoTamanio) {
  cuadradoSize = nuevoTamanio;
}

function mousePressed() {
  // cambiar tamaño de cuadrados verdes al hacer clic con el mouse
  let nuevoTamanio = random(10, 30); // genera un tamaño aleatorio entre 10 y 30
  // llama a la función de arriba para actualizar su tamaño
  cambiarTamanioCuadrados(nuevoTamanio);
}
