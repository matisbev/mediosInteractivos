var numcon = 15
var conejos = [];
var coyotes = [];
var cuadro = 100000000;
var estado = 0;
var marcador;
var resultado = 0;

//Interacciones
//VELOCIDAD DEL CURSOR: si el mouse se mueve rapido, el cielo cambia a la noche
// ARRASTRAR: Las nubes se mueven de forma infinita y se pueden arrastrar


function preload() {

  //Cargar las imagenes y la cancion
  fondo = loadImage('pics/fondo.png');
  coniz = loadImage('pics/coniz.png');
  conder = loadImage('pics/conder.png');
  intro = loadImage('pics/instrucciones.png');
  gano = loadImage('pics/gano.png');
  perdio = loadImage('pics/perdio.png');


  //song = loadSound('pics/noche.mp3');

}

function setup() {
  createCanvas(750, 1334);
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
}

function draw() {
  background(255);
  image(fondo, 0, 0, width, height)
  //Para darle play a la cancion y bajarle el volumen para que no suene
  //if (frameCount > 0) {
  // song.setVolume(vol);
  //   if (song.isPlaying() == false) {
  //    song.play();
  //   }
  if (estado == 0) {

    image(intro, 116, 193, 518, 861);

  }
  if (estado == 1) {


    //push();
    fill(0);
    textSize(50);
    text(marcador, 650, 1260, 100, 100);
    // pop();

    for (var i2 = 0; i2 < coyotes.length; i2 = i2 + 1) {
      coyotes[i2].aparecer();
      coyotes[i2].moverse();

      for (var i = 0; i < conejos.length; i = i + 1) {
        conejos[i].aparecer();
        conejos[i].moverse();

        if (dist(conejos[i].x, conejos[i].y, coyotes[i2].x, coyotes[i2].y) < 30) {
          //cuadro=frameCount

          conejos[i].morirse();
          marcador = marcador - 1;


        }


        //  if(frameCount>cuadro+50){
        //conejos[i].morirse();}
        for (var j = 0; j < touches.length; j++) {
          if (dist(touches[j].x, touches[j].y, conejos[i].x + 25, conejos[i].y + 25) < 100) {
            conejos[i].morirse();
            marcador = marcador - 1;


          }


          if (dist(touches[j].x, touches[j].y, coyotes[i2].x + 25, coyotes[i2].y + 25) < 100) {
            coyotes[i2].morirse();
            estado = 2;
            print(marcador);

          }
        }
      }


    }

  }


  if (estado == 2) {
    image(gano, 95, 193, 550, 870);

    fill(255)
    textSize(50);
    text(marcador, 340, 570, 100, 100);


  }
}

function touchEnded() {
  if (estado == 0) {
    marcador = numcon;
    estado = 1;
  }
}

function touchStarted() {
  if (estado == 2) {
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

}


function conejo(cnx, cny) {
  this.x = cnx;
  this.y = cny;
  this.vel = random(1, 5);
  this.dirx = 1;
  this.diry = 1;
  this.image = conder;
  this.vivo = true;
  this.orienta = random(1, 2);

  this.aparecer = function() {
    if (this.vivo == true) {

      image(this.image, this.x, this.y);
    }
  }

  this.moverse = function() {
    if (this.vivo == true) {
      //Para que los conejos se muevan de forma horizontal
      this.x = this.x + this.vel * this.dirx;
      this.y = this.y + this.vel * this.diry
      if (this.x > width - 100) {
        this.image = coniz
        this.dirx = -1
      }
      if (this.x < 0) {
        this.image = conder
        this.dirx = 1
      }
      if (this.y > height - 110) {
        this.diry = -1
      }
      if (this.y < 0) {
        this.diry = 1
      }
    }
  }
  this.morirse = function() {
    this.vivo = false
    this.x = 5000
    this.y = 6000
    this.dirx = 0
    this.diry = 0
  }
}

function coyote(cx, cy) {
  this.x = cx
  this.y = cy
  this.vel = random(1, 5);
  this.dirx = 1;
  this.diry = 1;
  this.image = conder
  this.vivo = true
  this.orienta = random(1, 2)

  this.aparecer = function() {
    if (this.vivo == true) {
      push()
      tint(0, 255, 0)
      image(this.image, this.x, this.y)
      pop()
    }
  }

  this.moverse = function() {
    if (this.vivo == true) {
      //Para que los conejos se muevan de forma horizontal
      this.x = this.x + this.vel * this.dirx;
      this.y = this.y + this.vel * this.diry
      if (this.x > width - 100) {
        this.image = coniz
        this.dirx = -1
      }
      if (this.x < 0) {
        this.image = conder
        this.dirx = 1
      }
      if (this.y > height - 110) {
        this.diry = -1
      }
      if (this.y < 0) {
        this.diry = 1
      }
    }
  }
  this.morirse = function() {
    this.vivo = false
    this.x = -5000
    this.y = -6000
    this.dirx = 0
    this.diry = 0
  }


}