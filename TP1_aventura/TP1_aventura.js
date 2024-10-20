      let elementos = [
      { ruta: 'data/img1.jpg', texto: '  \n (Presiona la tecla espaciadora para avanzar)', imagen: null },
      { ruta: 'data/img2.jpg', texto: 'Un día como cualquier otro, Coraje estaba \n tomando su siesta matutina cuando de repente...', imagen: null },
      { ruta: 'data/img3.jpg', texto: '  \n Aparece una figura blanca con una máscara tenebrosa', imagen: null },
      { ruta: 'data/img4.jpg', texto: 'La Máscara ataca a Coraje, repitiendo la frase \n "los perros son malos" ', imagen: null },
      { ruta: 'data/img5.jpg', texto: 'Justo y Muriel invitan a cenar a La Máscara. Les cuenta que su nombre  \n es Kitty y está furiosa porque su amiga Bunny está atrapada en una relación \n abusiva con un perro violento llamado Mad Dog', imagen: null },
      
      { ruta: 'data/img6.jpg', texto: 'Coraje, asustado y cansado por los constantes ataques de Kitty, decide: \n', imagen: null}, 
      
    { ruta: 'data/img7.jpg', texto: ' \n Justo y Muriel se encariñan con Kitty y toman la decisión de adoptarla', imagen: null },
    { ruta: 'data/img8.jpg', texto: ' \n Kitty nunca pudo volver a encontrarse con su amiga \n y Coraje tuvo que convivir con sus maltratos', imagen: null },
      
      { ruta: 'data/img9.jpg', texto: ' \n Coraje le roba a Kitty un ratón de peluche perteneciente a Bunny...', imagen: null },
      { ruta: 'data/img10.jpg', texto: '  \n Y la encierra en su habitación para que no lo siga.', imagen: null },
      { ruta: 'data/img11.jpg', texto: '  \n Toma el auto de sus dueños y se va en busca de Mad Dog', imagen: null },
      { ruta: 'data/img12.jpg', texto: 'Coraje llega a la guarida de Mad Dog, un \n lugar muy sombrío en los suburbios.', imagen: null },
      { ruta: 'data/img13.jpg', texto: '  \n Se adentra y a escondidas trepa hasta la ventana para espiar.', imagen: null },
      { ruta: 'data/img14.jpg', texto: '  \n Ve a Bunny siendo maltratada', imagen: null },
      { ruta: 'data/img15.jpg', texto: 'Se mete por la ventana rompiendo el vidrio cuando \n Mad Dog deja la habitación', imagen: null },
      
      { ruta: 'data/img16.jpg', texto: 'Junto a Bunny intentan escapar pero entonces Mad Dog vuelve. \n Están por bajar por una escalera pero es demasiado corta, deciden... \n ', imagen: null },
      
      { ruta: 'data/img17.jpg', texto: ' \n Deciden salir corriendo por la puerta intentando no ser atrapados.', imagen: null },
      { ruta: 'data/img18.jpg', texto: '  \n Mad Dog y su pandilla los encuentran del otro lado', imagen: null },
      { ruta: 'data/img19.jpg', texto: ' \n Atrapa a ambos y Bunny queda para siempre bajo sus garras.', imagen: null },
      
      { ruta: 'data/img20.jpg', texto: ' \n Ambos se tiran junto a la escalera escapando de Mad Dog', imagen: null },
      { ruta: 'data/img21.jpg', texto: '  \n Mad Dog aparece corriendolos con su auto', imagen: null },
      { ruta: 'data/img22.jpg', texto: 'Coraje le entrega el ratón de peluche a bunny, dándole a \n entender que Kitty la está buscando.', imagen: null },
      { ruta: 'data/img23.jpg', texto: '  \n Coraje, en un acto de valentia, se mete adentro del auto', imagen: null },
      { ruta: 'data/img24.jpg', texto: '  \n Hace que choquen contra el tren, saltando antes del impacto para salvarse', imagen: null },
      { ruta: 'data/img25.jpg', texto: '  \n Bunny ve a Kitty en la parte trasera del tren y se sube.', imagen: null },
      { ruta: 'data/img26.jpg', texto: ' \n Bunny logra subirse al tren y le agradece a Coraje haber sido tan valiente \n , llegando a la conclusión de que no todos los perros son malos.', imagen: null },
      { ruta: 'data/img27.jpg', texto: 'TP1 PMIW \n Profesor Matías Jauregui Lorda \n Nicolás Alberti y Agostina Cordomi', imagen: null },
    ];
    let estado = 0;  //variable que controla qué parte de la historia se está mostrando (0 es el inicio, y aumenta con cada pantalla).
    let sonido; //variable para manejar el sonido
    let fuenteTitulo; //variable para almacenar la fuente personalizada del título.
    
    function preload() {
      // Cargamos las imágenes directamente en cada objeto del array
      for (let i = 0; i < elementos.length; i++) {
        elementos[i].imagen = loadImage(elementos[i].ruta);
      }
    sonido = loadSound('data/SadSong.mp3');
    fuenteTitulo = loadFont('data/ComicalCartoon.ttf');
    }
    
    function setup() {
      createCanvas(640, 480);
      textSize(18);
      textAlign(CENTER);
      fill(0);
    
    }
    
    function draw() {
   
   switch (estado) {
    case 0:
      mostrarPantalla(0);
      mostrarTitulo();
      BotonReproducir();
      break;
      
    case 1:
      mostrarPantalla(1);
  
      break;

    case 2:
      mostrarPantalla(2);  
  
      break;
      
     case 3:
      mostrarPantalla(3);  
      break;
      
    case 4:
      mostrarPantalla(4);  
      break;

    case 5:
      mostrarPantalla(5);  
      // Mostrar botones si estamos en la pantalla 6
      if (estado == 5) {
      mostrarBotones();
      }
      break;
      
     case 6:
      mostrarPantalla(6);  
      break;
      
    case 7:
      mostrarPantalla(7);  
      break;

    case 8:
      mostrarPantalla(8);  
      break;
    
     case 9:
      mostrarPantalla(9);  
      break;
      
    case 10:
      mostrarPantalla(10);  
      break;

    case 11:
      mostrarPantalla(11);  
      break;
    
     case 12:
      mostrarPantalla(12);  
      break;
      
    case 13:
      mostrarPantalla(13);  
      break;

    case 14:
      mostrarPantalla (14);  
      break;
      
      case 15:
      mostrarPantalla(15); 
      if (estado == 15) {
      botonespantalla();
      }
   
      break;
      
     case 16:
      mostrarPantalla(16);  
      break;
      
    case 17:
      mostrarPantalla(17);  
      break;

    case 18:
      mostrarPantalla(18);  
      break;
    
     case 19:
      mostrarPantalla(19);  
      break;
      
    case 20:
      mostrarPantalla(20);  
      break;

    case 21:
      mostrarPantalla(21);  
      break;
    
     case 22:
      mostrarPantalla(22);  
      break;
      
    case 23:
      mostrarPantalla(23);  
      break;

    case 24:
      mostrarPantalla (24);  
      break;
      
      case 25:
      mostrarPantalla(25);  
      break;
      
       case 26:
      mostrarPantalla(26);  
      break;
      
       case 27:
      mostrarPantalla(27);  
      break;
      

  }
}
    
    function mostrarPantalla(indice) {
      let elemento = elementos[indice]; 
       image(elemento.imagen, 0, 0, width, height);
       fill(255); 
       strokeWeight(3);
      text(elemento.texto, width / 2, height / 2 + 120);
    }
    
function mostrarTitulo() {
  textSize(15);
  if (fuenteTitulo) {
    textFont(fuenteTitulo);  // Aplicar la fuente personalizada solo al título
  }
  fill(0);  // Color negro para el título
  textAlign(CENTER);
  text("Coraje el perro cobarde \n y La Mascara \n", width / 2, 50);
  
  // Restablecer la fuente predeterminada para el resto del texto
  textFont('Tahoma');
  textSize(18);  
}

function keyPressed() { 
  if (key === ' ') {
    // Si estamos en un estado final, volver al inicio
    if (estado === 7  || estado === 18 || estado === 26) {
      estado = 0;  // Volver al inicio
    } else {
      // Si no es un estado final, avanzar al siguiente
      estado = (estado + 1) % elementos.length; 
    }
  }
}
    
let hoverBotonA = false; // Estado de hover para el botón A
let hoverBotonB = false; // Estado de hover para el botón B

function mostrarBotones() {
    let textoA = 'Soportar los maltratos';
    let textoB = 'Ayudar a Kitty';

    let anchoA = textWidth(textoA) + 20;  // Ancho basado en el texto + padding
    let anchoB = textWidth(textoB) + 20;

    let botonY = height / 2 + 150;  // Ajuste de posición vertical

    // Botón A
    fill(hoverBotonA ? 200 : 255); // Cambiar el color si el mouse está sobre el botón
    rect(width / 4 - anchoA / 2, botonY, anchoA, 50);
    fill(0);
    text(textoA, width / 4, botonY + 30);

    // Botón B
    fill(hoverBotonB ? 200 : 255); // Cambiar el color si el mouse está sobre el botón
    rect((3 * width) / 4 - anchoB / 2, botonY, anchoB, 50);
    fill(0);
    text(textoB, (3 * width) / 4, botonY + 30);
}

function botonespantalla() {
    let textoA = 'Buscar otra salida';
    let textoB = 'Tirarse junto con la escalera';

    let anchoA = textWidth(textoA) + 20;
    let anchoB = textWidth(textoB) + 20;

    let botonY = height / 2 + 150;  // Ajuste de posición vertical

    // Botón A
    fill(hoverBotonA ? 200 : 255); // Cambiar el color si el mouse está sobre el botón
    rect(width / 4 - anchoA / 2, botonY, anchoA, 50);
    fill(0);
    text(textoA, width / 4, botonY + 30);

    // Botón B
    fill(hoverBotonB ? 200 : 255); // Cambiar el color si el mouse está sobre el botón
    rect((3 * width) / 4 - anchoB / 2, botonY, anchoB, 50);
    fill(0);
    text(textoB, (3 * width) / 4, botonY + 30);
}

function mouseMoved() {
    // Comprobar si el mouse está sobre el botón A
    let anchoA = textWidth('Soportar los maltratos') + 20;
    hoverBotonA = mouseX > width / 4 - anchoA / 2 && mouseX < width / 4 + anchoA / 2 &&
                  mouseY > height / 2 + 150 && mouseY < height / 2 + 200;

    // Comprobar si el mouse está sobre el botón B
    let anchoB = textWidth('Ayudar a Kitty') + 20;
    hoverBotonB = mouseX > (3 * width) / 4 - anchoB / 2 && mouseX < (3 * width) / 4 + anchoB / 2 &&
                  mouseY > height / 2 + 150 && mouseY < height / 2 + 200;
}

function BotonReproducir() {
    let botonX = width / 2;
    let botonY = height / 2;
    let botonRadio = 30;

    // Dibujar círculo (el botón)
    fill(171, 88, 255);
    noStroke();
    ellipse(botonX, botonY, botonRadio * 2, botonRadio * 2);  // Elipse con diámetro 60px

    // Dibujar triángulo de reproducción
    fill(255);
    noStroke();
    let tamañoTriangulo = 20;
    let punto1X = botonX - tamañoTriangulo / 2;
    let punto1Y = botonY - tamañoTriangulo;
    let punto2X = botonX - tamañoTriangulo / 2;
    let punto2Y = botonY + tamañoTriangulo;
    let punto3X = botonX + tamañoTriangulo;
    let punto3Y = botonY;
    triangle(punto1X, punto1Y, punto2X, punto2Y, punto3X, punto3Y);
}

function mousePressed() {
    // Reproducir o detener sonido
    if (estado !== 5 && estado !== 15) {
        if (sonido.isPlaying()) {
            sonido.stop();
        } else {
            sonido.loop();  // No reiniciar, solo hacer loop
        }
    }

    // Manejo de clics en la pantalla de botones
    if (estado === 5) {
        let anchoA = textWidth('Soportar los maltratos') + 20;
        let anchoB = textWidth('Ayudar a Kitty') + 20;

        // Detectar clic en Botón A
        if (mouseX > width / 4 - anchoA / 2 && mouseX < width / 4 + anchoA / 2 &&
            mouseY > height / 2 + 150 && mouseY < height / 2 + 200) {
            estado = 6;  // Ir a la pantalla 6
        }

        // Detectar clic en Botón B
        if (mouseX > (3 * width) / 4 - anchoB / 2 && mouseX < (3 * width) / 4 + anchoB / 2 &&
            mouseY > height / 2 + 150 && mouseY < height / 2 + 200) {
            estado = 8;  // Ir a la pantalla 8
        }
    }

    if (estado === 15) {
        let anchoA = textWidth('Buscar otra salida') + 20;
        let anchoB = textWidth('Tirarse junto con la escalera') + 20;

        // Detectar clic en Botón A
        if (mouseX > width / 4 - anchoA / 2 && mouseX < width / 4 + anchoA / 2 &&
            mouseY > height / 2 + 150 && mouseY < height / 2 + 200) {
            estado = 16;  // Ir a la pantalla 16
        }

        // Detectar clic en Botón B
        if (mouseX > (3 * width) / 4 - anchoB / 2 && mouseX < (3 * width) / 4 + anchoB / 2 &&
            mouseY > height / 2 + 150 && mouseY < height / 2 + 200) {
            estado = 19;  // Ir a la pantalla 19 y continuar hasta el final
        }
    }
}
