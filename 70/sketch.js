//Esta variable controla el numero de conejos
var numcon = 30;
//Esta variable controla el numero de coyotes
var numcoy = 1;
var conejos = [];
var coyotes = [];
var conejosMulti = [];
var coyotesMulti = [];
var cuadro = 100000000;
var estado = 0;
var marcador = numcon;
var intentos = 4;
var resultado = 0;
var vol = 0;
var tope = 3;
var g;
var h;
var lado;
var dif;
var r1 = 0;
var r2 = 0;
var r3 = 0;
var r4 = 0;

var g1 = 255;
var g2 = 255;
var g3 = 255;
var g4 = 255;
//Timerback establece la cantidad de segundos que dura el juego
var timerback = 30;


//NOTA: al escribir el codigo, se penso en el villano como un coyote, sin embargo en las instrucciones y fotos se muestran un zoorro. Estas hacen referencia a la misma especie y al mismo personaje.

function preload() {

  //Cargar las imagenes la cancion y los sonidos
  fondo = loadImage('pics/fondo.png');
  fondomulti = loadImage('pics/fondomulti.png');
  coniz = loadImage('pics/coniz.png');
  conder = loadImage('pics/conder.png');
  conizin = loadImage('pics/conizin.png');
  conderin = loadImage('pics/conderin.png');
  intro = loadImage('pics/instruc.png');
  instrucsolo = loadImage('pics/instrucsolo.png');
  instrucmulti = loadImage('pics/instrucmulti.png');
  gano = loadImage('pics/gano.png');
  gano1 = loadImage('pics/gano1.png');
  perdio = loadImage('pics/perdio.png');
  perdio1 = loadImage('pics/perdio1.png');
  portada = loadImage('pics/portada1.png');
  modo = loadImage('pics/modo.png');
  banda = loadImage('pics/banda.png');
  squeak = loadSound('pics/squeak.mp3');
  ohno = loadSound('pics/ohno.mp3');
  music = loadSound('pics/music.mp3');




}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //For para el numero de conejos
  for (var i = 0; i < numcon; i = i + 1) {
    var Xcn = random(0, width);
    var Ycn = random(0, height);
    conejos[i] = new conejo(Xcn, Ycn);
  }

  //For para el numero de coyotes
  for (var i2 = 0; i2 < numcoy; i2 = i2 + 1) {
    var Xcy = random(0, width);
    var Ycy = random(0, height);
    coyotes[i2] = new coyote(Xcy, Ycy);
  }
  //For para el numero de conejos en el estado Multijugador
  for (var i3 = 0; i3 < numcon; i3 = i3 + 1) {
    var Xcnm = random(0, width);
    var Ycnm = random(0, height);
    conejosMulti[i3] = new conejoMulti(Xcnm, Ycnm);
  }
  //For para el numero de coyotes en el estado Multijugador
  for (var i4 = 0; i4 < numcoy; i4 = i4 + 1) {
    var Xcym = random(0, width);
    var Ycym = random(0, height);
    coyotesMulti[i4] = new coyoteMulti(Xcym, Ycym);
  }
}

function draw() {
  background(255);
  image(fondo, 0, 0, width, height);



  //Primer estado: se muestra el titulo del juego y la opcion de jugar o instrucciones
  if (estado == 0) {

    image(portada, 0, 0, windowWidth, windowHeight);




  }
  if (estado == 10) {

    image(modo, 0, 0, windowWidth, windowHeight)

    if (mouseY > 0 && mouseY < height / 2) {
      lado = 1;
    }
    if (mouseY > height / 2 && mouseY < height) {
      lado = 2;
    }

    if (mouseIsPressed) {
      if (lado == 1) {
        estado = 60;
      }
    }

    if (mouseIsPressed) {
      if (lado == 2) {
        estado = 62;
      }
    }


  }
  //Segundo estado: se muestran las instrucciones jugador solitario
  if (estado == 60) {

    image(instrucsolo, 0, 0, windowWidth, windowHeight);


  }
  //Variación Segundo estado: se muestran las instrucciones multijugador
  if (estado == 62) {

    image(instrucmulti, 0, 0, windowWidth, windowHeight);


  }


  //Tercer estado: es donde se lleva a cabo el juego solitario, salen los conejos
  if (estado == 1) {

    //Para que la musica se ponga
    if (music.isPlaying() == false) {

      music.play();
    }
    //Para que se cree un temporizador
    if (frameCount % 80 == 50) {
      timerback = timerback - 1;
    }

    if (timerback < 0) {
      estado = 3;
    }

    //Para que el/los coyotes aparezcan y se muevan
    for (var i2 = 0; i2 < coyotes.length; i2 = i2 + 1) {
      coyotes[i2].aparecer();
      coyotes[i2].moverse();

      //Para que los conejos aparezcan y se muevan
      for (var i = 0; i < conejos.length; i = i + 1) {
        conejos[i].aparecer();
        conejos[i].moverse();
        //Para que los coyotes maten a los conejos al tocarlos
        if (dist(conejos[i].x, conejos[i].y, coyotes[i2].x, coyotes[i2].y) < 10) {


          conejos[i].morirse();
          marcador = marcador - 1;


        }


        //Para que al tocar un conejo este se muera y el marcador baje una unidad al puntaje       
        for (var j = 0; j < touches.length; j++) {
          if (dist(touches[j].x, touches[j].y, conejos[i].x + 25, conejos[i].y + 25) < 25) {
            conejos[i].morirse();
            marcador = marcador - 1;
            intentos = intentos - 1;



          }

          //Para que al tocar el coyote el juego finalice

          if (dist(touches[j].x, touches[j].y, coyotes[i2].x + 25, coyotes[i2].y + 25) < 25) {
            coyotes[i2].morirse();
            estado = 2;
            print(marcador);
          }



        }
      }
      //Para que si se acaban los conejos el jugador pierda
      if (marcador < 1) {
        estado = 3;
      }
      //Para que el jugador solo tenga 4 intentos
      if (intentos < 1) {
        estado = 3;
        r1 = 255;
        g1 = 0;
      }
      //Para que los conejos que indican el numero de intentos cambien de color a medida que se acaban los intentos
      if (intentos < 4) {
        r4 = 255;
        g4 = 0;
      }

      if (intentos < 3) {
        r3 = 255;
        g3 = 0;
      }
      if (intentos < 2) {
        r2 = 255;
        g2 = 0;
      }
      //Para mostrar en una esquina la cantidad de conejos vivos      
      fill(0);
      textSize(25);
      text("Intentos", width - 100, 10, 100, 100);
      text("Tiempo", 20, 10, 100, 100);
      textSize(50);

      //  text(intentos, width - 100, 30, 100, 100);
      text(timerback, 20, 30, 100, 100);
      // conejos miniatura que indican la cantidad de intentos disponibles
      push();
      tint(r1, g1, 0);
      image(conder, width - 50, 35, 40, 40);
      pop();
      push();
      tint(r2, g2, 0);
      image(conder, width - 100, 35, 40, 40);
      pop();
      push();
      tint(r3, g3, 0);
      image(conder, width - 150, 35, 40, 40);
      pop();
      push();
      tint(r4, g4, 0);
      image(conder, width - 200, 35, 40, 40);
      pop();


    }
  }
  // en este estado ocurre el juego multijugador
  if (estado == 12) {

    image(fondomulti, 0, 0, windowWidth, windowHeight);

    //Para que la musica se ponga
    if (music.isPlaying() == false) {

      music.play();
    }
    //Para que se cree un temporizador


    //Para que el/los coyotes aparezcan y se muevan
    for (var i4 = 0; i4 < coyotesMulti.length; i4 = i4 + 1) {
      coyotesMulti[i4].aparecer();
      coyotesMulti[i4].moverse();

      //Para que los conejos aparezcan y se muevan
      for (var i3 = 0; i3 < conejosMulti.length; i3 = i3 + 1) {
        conejosMulti[i3].aparecer();
        conejosMulti[i3].moverse();
        //Para que los coyotes maten a los conejos al tocarlos
        if (dist(conejosMulti[i3].x, conejosMulti[i3].y, coyotesMulti[i4].x, coyotesMulti[i4].y) < 10) {


          conejosMulti[i3].morirse();
          marcador = marcador - 1;


        }


        //Para que al tocar un conejo este se muera y el marcador baje una unidad al puntaje       
        for (var j1 = 0; j1 < touches.length; j1++) {
          if (dist(touches[j1].x, touches[j1].y, conejosMulti[i3].x + 25, conejosMulti[i3].y + 25) < 25) {
            conejosMulti[i3].morirse();
            marcador = marcador - 1;


          }

          //Para que al tocar el coyote el juego finalice
          //si courre en la parte superior de la pantalla gana jugador 2
          if (mouseY > height / 2) {
            if (dist(touches[j1].x, touches[j1].y, coyotesMulti[i4].x + 25, coyotesMulti[i4].y + 25) < 25) {
              coyotesMulti[i4].morirse();
              estado = 4;
              print(marcador);
            }

          }
          //si courre en la parte inerior de la pantalla gana jugador 1
          if (mouseY < height / 2) {
            if (dist(touches[j1].x, touches[j1].y, coyotesMulti[i4].x + 25, coyotesMulti[i4].y + 25) < 25) {
              coyotesMulti[i4].morirse();
              estado = 5;
              print(marcador);
            }

          }
        }
      }






    }
    //banda que separa las dos pantallas multijugador
    image(banda, 0, height / 2 - 8, width, 10);
  }


  //cuarto estado: le comunica al jugador que ha ganado y le muestra cuantos conejos salvo
  if (estado == 2) {
    //Se resetea la variable del temporizador   
    timerback = 30;
    intentos = 4;
    // se resetean los colores de los indicadores de intentos
    r1 = 0;
    r2 = 0;
    r3 = 0;
    r4 = 0;

    g1 = 255;
    g2 = 255;
    g3 = 255;
    g4 = 255;
    //Se pausa la musica del juego
    if (music.isPlaying() == true) {

      music.pause();
    }
    //Imagen que le comunica al jugador que ganó
    image(gano, 95 * width / 750, 193 * height / 1334, 500 * width / 750, 960 * height / 1334);


    fill(255);
    textSize(50);
    text(marcador, width / 2 - 55, height / 2.5 + 35, 100, 100);

  }
  //Este estado se muestra si el jugador solitario pierde
  if (estado == 3) {
    timerback = 30;
    // se resetean los colores de los indicadores de intentos
    r1 = 0;
    r2 = 0;
    r3 = 0;
    r4 = 0;

    g1 = 255;
    g2 = 255;
    g3 = 255;
    g4 = 255;


    if (music.isPlaying() == true) {

      music.pause();
    }
    //Imagen que le comunica al jugador que perdió, bien sea porque se quedo sin tiempo o sin conejos
    image(perdio, 0, 0, windowWidth, windowHeight);


  }
  if (estado == 4) {
    image(gano1, 0, 0, windowWidth, windowHeight);
  }
  if (estado == 5) {
    image(perdio1, 0, 0, windowWidth, windowHeight);
  }


}



function deviceMoved() {
  //mapear la aceleracion para que este entre 0 y 100
  g = map(accelerationZ, -90, 90, 0, 100);
  h = map(accelerationZ, -90, 90, 0, 100);
  //Para que al mover rapido el dispositivo la velocidad de conejos y coyotes aumente, el coyote se mueve ligeramente más rapido.
  if (g > 60) {
    //Hacer que los conejos se muevan mas rapido
    for (var i = 0; i < conejos.length; i = i + 1) {
      conejos[i].acelerar();

    }
    //Hacer que los coyotes se muevan mas rapido
    for (var i2 = 0; i2 < coyotes.length; i2 = i2 + 1) {
      coyotes[i2].acelerar();

    }

  }

  if (h > 60) {
    for (var i4 = 0; i4 < coyotesMulti.length; i4 = i4 + 1) {
      coyotesMulti[i4].acelerar();

    }
  }
}

function touchEnded() {

  if (estado == 0) {
    marcador = numcon;
    estado = 10;

  }
}

function touchStarted() {
  //Permite inicar el juego despues de ver las instrucciones
  if (estado == 60) {
    marcador = numcon;
    estado = 1;

  }
  //para resetear el numero de conejos sin importar si gano o perdio
  if (estado == 2 || estado == 3) {
    marcador = numcon;
    intentos = 4
    //For para el numero de conejos
    for (var i = 0; i < numcon; i = i + 1) {
      var Xcn = random(0, width);
      var Ycn = random(0, height);
      conejos[i] = new conejo(Xcn, Ycn);
    }

    //For para el numero de conejos
    for (var i2 = 0; i2 < 1; i2 = i2 + 1) {
      var Xcy = random(0, width);
      var Ycy = random(0, height);
      coyotes[i2] = new coyote(Xcy, Ycy);
    }

    estado = 1;
  }

  if (estado == 3) {
    estado = 1;
  }
  if (estado == 62) {
    estado = 12;
  }
  //para resetear el numero de conejos sin importar que jugador ganó
  if (estado == 4 || estado == 5) {
    marcador = numcon;

    //For para el numero de conejos en multijugador
    for (var i3 = 0; i3 < numcon; i3 = i3 + 1) {
      var Xcnm = random(0, width);
      var Ycnm = random(0, height);
      conejosMulti[i3] = new conejoMulti(Xcnm, Ycnm);
    }
    //For para el numero de coyotes en multijugador
    for (var i4 = 0; i4 < 1; i4 = i4 + 1) {
      var Xcym = random(0, width);
      var Ycym = random(0, height);
      coyotesMulti[i4] = new coyoteMulti(Xcym, Ycym);
    }

    estado = 12;
  }
}


function conejo(cnx, cny) {
  this.x = cnx;
  this.y = cny;
  this.vel = random(1, tope);
  this.dirx = 1;
  this.diry = 1;
  this.image = conder;
  this.vivo = true;
  this.orienta = random(1, 2);

  this.aparecer = function() {
    if (this.vivo == true) {

      image(this.image, this.x, this.y, 80 * width / 750, 110 * height / 1334);
    }
  }

  this.moverse = function() {
    if (this.vivo == true) {
      //Para que los conejos se muevan de forma horizontal
      this.x = this.x + this.vel * this.dirx;
      this.y = this.y + this.vel * this.diry;
      if (this.x > width - 107 * width / 750) {
        this.image = coniz;
        this.dirx = -1;
      }
      if (this.x < 0) {
        this.image = conder;
        this.dirx = 1;
      }
      if (this.y > height - 104 * height / 1334) {
        this.diry = -1
      }
      if (this.y < 0) {
        this.diry = 1
      }
    }
  }
  this.morirse = function() {
    this.vivo = false;
    this.x = 5000;
    this.y = 6000;
    this.dirx = 0;
    this.diry = 0;
    squeak.play();
  }
  this.acelerar = function() {
    //Velocidad de acelaracion del conejo
    this.vel = this.vel + 0.07;
  }
}

function coyote(cx, cy) {
  this.x = cx;
  this.y = cy;
  this.vel = random(1, tope);
  this.dirx = 1;
  this.diry = 1;
  this.image = conder;
  this.vivo = true;
  this.orienta = random(1, 2);

  this.aparecer = function() {
    if (this.vivo == true) {
      push();
      // tint(0, 255, 0)
      image(this.image, this.x, this.y, 80 * width / 750, 110 * height / 1334);
      pop();
    }
  }

  this.moverse = function() {
    if (this.vivo == true) {
      //Para que los conejos se muevan de forma horizontal
      this.x = this.x + this.vel * this.dirx;
      this.y = this.y + this.vel * this.diry;
      if (this.x > width - 107 * width / 750) {
        this.image = coniz;
        this.dirx = -1;
      }
      if (this.x < 0) {
        this.image = conder;
        this.dirx = 1;
      }
      if (this.y > height - 104 * height / 1334) {
        this.diry = -1;
      }
      if (this.y < 0) {
        this.diry = 1;
      }
    }
  }
  this.morirse = function() {
    this.vivo = false;
    this.x = -5000;
    this.y = -6000;
    this.dirx = 0;
    this.diry = 0;
    ohno.play();
  }
  this.acelerar = function() {
    //Velocidad de acelaracion del coyote, es mayor a la del conejo para poderlos distinguir
    this.vel = this.vel + 1;
  }

}

function conejoMulti(cnmx, cnmy) {
  this.x = cnmx;
  this.y = cnmy;
  this.vel = random(1, tope);
  this.dirx = 1;
  this.diry = 1;
  this.image = conder;
  this.vivo = true;
  this.orienta = random(1, 2);

  this.aparecer = function() {
    if (this.vivo == true) {

      image(this.image, this.x, this.y, 80 * width / 750, 110 * height / 1334);
    }
  }

  this.moverse = function() {
    if (this.vivo == true) {
      //Para que los conejos se muevan de forma horizontal
      this.x = this.x + this.vel * this.dirx;
      this.y = this.y + this.vel * this.diry;
      if (this.y > height / 2 - 300) {
        this.image = conder
        if (this.x > width - 107 * width / 750) {
          this.image = coniz;
          this.dirx = -1;
        }
        if (this.x < 0) {
          this.image = conder;
          this.dirx = 1;
        }
      }

      if (this.y < height / 2) {
        this.image = conderin
        if (this.x > width - 107 * width / 750) {
          this.image = conizin;
          this.dirx = -1;
        }
        if (this.x < 0) {
          this.image = conderin;
          this.dirx = 1;
        }
      }



      if (this.y > height - 104 * height / 1334) {
        this.diry = -1
      }
      if (this.y < 0) {
        this.diry = 1
      }
    }
  }
  this.morirse = function() {
    this.vivo = false;
    this.x = 5000;
    this.y = 6000;
    this.dirx = 0;
    this.diry = 0;
    squeak.play();
  }
  this.acelerar = function() {
    //Velocidad de acelaracion del conejo
    this.vel = this.vel + 0.07;
  }
}

function coyoteMulti(cmx, cmy) {
  this.x = cmx;
  this.y = cmy;
  this.vel = random(1, tope);
  this.dirx = 1;
  this.diry = 1;
  this.image = conder;
  this.vivo = true;
  this.orienta = random(1, 2);

  this.aparecer = function() {
    if (this.vivo == true) {
      push();
      //tint(0, 255, 0)
      image(this.image, this.x, this.y, 80 * width / 750, 110 * height / 1334);
      pop();
    }
  }

  this.moverse = function() {
    if (this.vivo == true) {
      //Para que los conejos se muevan de forma horizontal
      this.x = this.x + this.vel * this.dirx;
      this.y = this.y + this.vel * this.diry;
      if (this.y > height / 2 - 100) {
        this.image = conder;
        if (this.x > width - 107 * width / 750) {
          this.image = coniz;
          this.dirx = -1;
        }
        if (this.x < 0) {
          this.image = conder;
          this.dirx = 1;
        }
      }

      if (this.y < height / 2) {
        this.image = conderin;
        if (this.x > width - 107 * width / 750) {
          this.image = conizin;
          this.dirx = -1;
        }
        if (this.x < 0) {
          this.image = conderin;
          this.dirx = 1;
        }
      }



      if (this.y > height - 104 * height / 1334) {
        this.diry = -1;
      }
      if (this.y < 0) {
        this.diry = 1;
      }
    }
  }
  this.morirse = function() {
    this.vivo = false;
    this.x = 5000;
    this.y = 6000;
    this.dirx = 0;
    this.diry = 0;
    ohno.play();
  }
  this.acelerar = function() {
    //Velocidad de acelaracion del conejo
    this.vel = this.vel + 1;
  }
}