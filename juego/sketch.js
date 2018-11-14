//Esta variable controla el numero de conejos
var numcon = 30
//Esta variable controla el numero de coyotes
var numcoy = 1
var conejos = [];
var coyotes = [];
var cuadro = 100000000;
var estado = 0;
var marcador = numcon
var resultado = 0;
var vol = 0
var tope = 3
var g;
var lado;
var dif;
//Timerback establece la cantidad de segundos que dura el juego
var timerback = 60;


//NOTA: al escribir el codigo, se penso en el villano como un coyote, sin embargo en las instrucciones y fotos se muestran un zoorro. Estas hacen referencia a la misma especie y al mismo personaje.

function preload() {

  //Cargar las imagenes la cancion y los sonidos
  fondo = loadImage('pics/fondo.png');
  coniz = loadImage('pics/coniz.png');
  conder = loadImage('pics/conder.png');
  intro = loadImage('pics/instruc.png');
  gano = loadImage('pics/gano.png');
  perdio = loadImage('pics/perdio.png');
  portada = loadImage('pics/portada1.png');
  dificultad = loadImage('pics/difi.png');
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
}

function draw() {
  background(255);
  image(fondo, 0, 0, width, height);



  //Primer estado: se muestra el titulo del juego y la opcion de jugar o instrucciones
  if (estado == 0) {

    image(portada, 0, 0, windowWidth, windowHeight);

    if (mouseX > 0 && mouseX < width / 2) {
      lado = 1
    }
    if (mouseX > width / 2 && mouseX < width) {
      lado = 2
    }


    if (mouseIsPressed) {
      if (lado == 1) {
        estado = 60
      }
    }

    if (mouseIsPressed) {
      if (lado == 2) {
        estado = 1
      }
    }
  }
  //Segundo estado: se muestran las instrucciones
  if (estado == 60) {

    image(intro, 0, 0, windowWidth, windowHeight);


  }


  //Tercer estado: es donde se lleva a cabo el juego, salen los conejos
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
      estado = 3
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


          }

          //Para que al tocar el coyote el juego finalice
          if (dist(touches[j].x, touches[j].y, coyotes[i2].x + 25, coyotes[i2].y + 25) < 25) {
            coyotes[i2].morirse();
            estado = 2;
            print(marcador);

          }
        }
      }
      if (marcador < 1) {
        estado = 3
      }
      //Para mostrar en una esquina la cantidad de conejos vivos      
      fill(0);
      textSize(25);
      text("Conejos", width - 100, 10, 100, 100);
      text("Tiempo", width / 2, 10, 100, 100);
      textSize(50);

      text(marcador, width - 100, 30, 100, 100);
      text(timerback, width / 2, 30, 100, 100);




    }
  }


  //cuarto estado: le comunica al jugador que ha ganado y le muestra cuantos conejos salvo
  if (estado == 2) {
 //Se resetea la variable del temporizador   
    timerback = 60

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

  if (estado == 3) {
    timerback = 60


    if (music.isPlaying() == true) {

      music.pause();
    }
//Imagen que le comunica al jugador que perdió, bien sea porque se quedo sin tiempo o sin conejos
    image(perdio, 0, 0, windowWidth, windowHeight);


  }


}



function deviceMoved() {
  //mapear la aceleracion para que este entre 0 y 100
  g = map(accelerationZ, -90, 90, 0, 100);
  //Para que al mover rapido el dispositivo la velocidad de conejos y coyotes aumente, el coyote se mueve ligeramente más rapido.
  if (g > 60) {
  //Hacer que los conejos se muevan mas rapido
    for (var i = 0; i < conejos.length; i = i + 1) {
      conejos[i].acelerar();

    }
 //Hacer que los coyotes se muevan mas rapido
    for (var i2 = 0; i2 < coyotes.length; i2 = i2 + 1) {
      coyotes[i2].acelerar()
    }
  }
}

function touchEnded() {

  if (estado == 0) {
    marcador = numcon;
    estado = 1;

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