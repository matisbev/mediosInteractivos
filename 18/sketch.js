//Herramientas
var posxbot1 = 30
var posybot1 = 20
var tambot1 = 40

var posxbot2 = 80
var posybot2 = 20
var tambot2 = 40


//colores
var posxbot11 = 30
var posybot11 = 70
var tambot11 = 40

var posxbot12 = 80
var posybot12 = 70
var tambot12 = 40

var posxbot13 = 130
var posybot13 = 70
var tambot13 = 40

var posxbot14 = 180
var posybot14 = 70
var tambot14 = 40

var posxbot15 = 230
var posybot15 = 70
var tambot15 = 40

var posxbot16 = 280
var posybot16 = 70
var tambot16 = 40

var posxbot17 = 330
var posybot17 = 70
var tambot17 = 40

var posxbot18 = 380
var posybot18 = 70
var tambot18 = 40

var posxbot19 = 430
var posybot19 = 70
var tambot19 = 40

var posxbot20 = 480
var posybot20 = 70
var tambot20 = 40

var posxbotcl = 530
var posybotcl = 20
var tambotclx = 50
var tambotcly = 90


var herrsel = 1
var colsel = 1
var volsel=0
var r = 0
var g = 0
var b = 0
var bolo;
var bolos;
var miAnal;

//Lineas Laberinto

var posxlin1 = 0
var posylin1 = 52
var tamxlin1 = 429
var tamylin1 = 11

var posxlin2 = 233
var posylin2 = 57
var tamxlin2= 22
var tamylin2 = 67

var posxlin3 = 531
var posylin3 = 85
var tamxlin3= 22
var tamylin3 = 408

var posxlin4 = 180
var posylin4 = 119
var tamxlin4= 429
var tamylin4 = 22

var posxlin5 = 406
var posylin5 = 133
var tamxlin5= 11
var tamylin5 = 63

var posxlin6 = 21
var posylin6 = 187
var tamxlin6= 408
var tamylin6 = 22

var posxlin7 =48
var posylin7 =192
var tamxlin7= 14
var tamylin7 = 183

var posxlin8 = 160
var posylin8 = 256
var tamxlin8= 389
var tamylin8 = 11

var posxlin9 = 40
var posylin9 = 328
var tamxlin9= 408
var tamylin9 = 22

var posxlin10 = 406
var posylin10 = 339
var tamxlin10 = 6
var tamylin10 = 172

var posxlin11 = 280 
var posylin11 = 461
var tamxlin11 = 183
var tamylin11 = 22

var posxlin12 = 280
var posylin12 = 461
var tamxlin12= 24
var tamylin12 = 338

var posxlin13 = 40
var posylin13 = 522
var tamxlin13= 389
var tamylin13 = 10

var posxlin14 = 286
var posylin14 = 559
var tamxlin14= 401
var tamylin14 = 8

var posxlin15 = 0
var posylin15 = 678
var tamxlin15= 408
var tamylin15 = 5




 function preload() {
   
   bolos = loadSound('assets/zedd.mp3');
      grito = loadSound('assets/grito.mp3');
   instruc=loadImage('assets/instruc.png');
   titu=loadImage('assets/titu.png');
      grac=loadImage('assets/grac.png');
      horadd=loadImage('assets/horadd.png');
      listo=loadImage('assets/listo.png'); 
   

   
 
   
 }

 function setup() {
   createCanvas(610, 800);
  
    miAnal = new p5.Amplitude();
   miAnal.setInput(bolos);
   frameRate(70)
 }



 function draw() {
   background(255);
   noTint();
 
   

var rand= random(0,3)
  var nivel = miAnal.getLevel();
  if(frameCount>40){
     if (bolos.isPlaying() == false) {
       bolos.play();}}
  
  // ellipse(400, 300, nivel * 2200,nivel * 2200)
   if(volsel==1){bolos.setVolume(0.2)
                grito.setVolume(0)}
   if(volsel==2){bolos.setVolume(0)
                 grito.setVolume(1)
        if (grito.isPlaying() == false) {
       grito.play();}}
                     
   
   if ((mouseX > posxlin1 && mouseX < posxlin1 + tamxlin1 &&
    mouseY > posylin1 && mouseY < posylin1 + tamylin1) || 
       (mouseX > posxlin2 && mouseX < posxlin2 + tamxlin2 &&
    mouseY > posylin2 && mouseY < posylin2 + tamylin2) ||
        (mouseX > posxlin3 && mouseX < posxlin3 + tamxlin3 &&
    mouseY > posylin3 && mouseY < posylin3 + tamylin3) ||
        (mouseX > posxlin4 && mouseX < posxlin4 + tamxlin4 &&
    mouseY > posylin4 && mouseY < posylin4 + tamylin4)||
        (mouseX > posxlin5 && mouseX < posxlin5 + tamxlin5 &&
    mouseY > posylin5 && mouseY < posylin5 + tamylin5)||
        (mouseX > posxlin6 && mouseX < posxlin6 + tamxlin6 &&
    mouseY > posylin6 && mouseY < posylin6 + tamylin6)||
        (mouseX > posxlin7 && mouseX < posxlin7 + tamxlin7 &&
    mouseY > posylin7 && mouseY < posylin7 + tamylin7)||
        (mouseX > posxlin8 && mouseX < posxlin8 + tamxlin8 &&
    mouseY > posylin8 && mouseY < posylin8 + tamylin8)||
        (mouseX > posxlin9 && mouseX < posxlin9 + tamxlin9 &&
    mouseY > posylin9 && mouseY < posylin9 + tamylin9)||
        (mouseX > posxlin10 && mouseX < posxlin10 + tamxlin10 &&
    mouseY > posylin10 && mouseY < posylin10 + tamylin10)||
        (mouseX > posxlin11 && mouseX < posxlin11 + tamxlin11 &&
    mouseY > posylin11 && mouseY < posylin11 + tamylin11)||
        (mouseX > posxlin12 && mouseX < posxlin12 + tamxlin12 &&
    mouseY > posylin12 && mouseY < posylin12 + tamylin12) ||
        (mouseX > posxlin13 && mouseX < posxlin13 + tamxlin13 &&
    mouseY > posylin13 && mouseY < posylin13 + tamylin13) ||
        (mouseX > posxlin14 && mouseX < posxlin14 + tamxlin14 &&
    mouseY > posylin14 && mouseY < posylin14 + tamylin14)||
        (mouseX > posxlin15 && mouseX < posxlin15 + tamxlin15 &&
    mouseY > posylin15 && mouseY < posylin15 + tamylin15)){
    volsel = 1}
   else {volsel=2}
  
   
   
 
   fill(0)
  rect(posxlin1, posylin1, tamxlin1, tamylin1)
    fill(0)
  rect(posxlin2, posylin2, tamxlin2, tamylin2)
    fill(0)
  rect(posxlin3, posylin3, tamxlin3, tamylin3)
    fill(0)
  rect(posxlin4, posylin4, tamxlin4, tamylin4)
    fill(0)
  rect(posxlin5, posylin5, tamxlin5, tamylin5)
    fill(0)
  rect(posxlin6, posylin6, tamxlin6, tamylin6)
    fill(0)
  rect(posxlin7, posylin7, tamxlin7, tamylin7)
    fill(0)
  rect(posxlin8, posylin8, tamxlin8, tamylin8)
    fill(0)
  rect(posxlin9, posylin9, tamxlin9, tamylin9)
    fill(0)
  rect(posxlin10, posylin10, tamxlin10, tamylin10)
   fill(0)
    rect(posxlin11, posylin11, tamxlin11, tamylin11)
    fill(0)
  rect(posxlin12, posylin12, tamxlin12, tamylin12)
    fill(0)
  rect(posxlin13, posylin13, tamxlin13, tamylin13)
    fill(0)
  rect(posxlin14, posylin14, tamxlin14, tamylin14)
    fill(0)
  rect(posxlin15, posylin15, tamxlin15, tamylin15)
   
   fill("black");
   //text(frameCount,0, Math.ceil(100))
   
   if (frameCount>9100){ bolos.setVolume(0)}
   
   if(frameCount>1000000){
   
  if (mouseIsPressed) {
    if (colsel == 11) {
      background(255)
      colsel = 1
    }
  }
  var loco = random(0, 600)
  var ale = random(0, 15)
  var alet= random(0, 6)
  var aleta= random(0,200)
  strokeWeight(1)
  stroke(1)
  fill(255)
  rect(posxbot1, posybot1, tambot1, tambot1)
  rect(posxbot2, posybot2, tambot2, tambot2)

  

  fill(0)
  rect(posxbot11, posybot11, tambot11, tambot11)
  fill(255)
  rect(posxbot12, posybot12, tambot12, tambot12)
  fill(114, 60, 27)
  rect(posxbot13, posybot13, tambot13, tambot13)
  fill(237, 28, 36)
  rect(posxbot14, posybot14, tambot14, tambot14)
  fill(244, 117, 33)
  rect(posxbot15, posybot15, tambot15, tambot15)
  fill(241, 218, 14)
  rect(posxbot16, posybot16, tambot16, tambot16)
  fill(175, 209, 54)
  rect(posxbot17, posybot17, tambot17, tambot17)
  fill(0, 190, 242)
  rect(posxbot18, posybot18, tambot18, tambot18)
  fill(110, 81, 162)
  rect(posxbot19, posybot19, tambot19, tambot19)
  fill(237, 0, 129)
  rect(posxbot20, posybot20, tambot20, tambot20)
  fill(70)
  rect(posxbotcl, posybotcl, tambotclx, tambotcly)
  fill(255)
  text('CLEAR',posxbotcl+5,posybotcl+50)
  
  //iconos
  //pincel tinta
  fill(1)
  ellipse(40,30,9*5*nivel)
  ellipse(45,35,13*5*nivel)
   ellipse(52,42,9*5*nivel)
  ellipse(60,50,6*5*nivel)
  //Linea Espaciada
  strokeWeight(2*5*nivel)
  line(85,50,100,25)
  strokeWeight(3*5*nivel)
  line(92,50,107,25)
  strokeWeight(1*5*nivel)
  line(100,50,115,25)
  
  
  
  
  
  
  //Negro
  if (mouseIsPressed) {
    if (colsel == 1) {
      r = 0
      g = 0
      b = 0
    }
  }
  //Blanco
  if (mouseIsPressed) {
    if (colsel == 2) {
      r = 255
      g = 255
      b = 255
    }
  }
  //Cafe
  if (mouseIsPressed) {
    if (colsel == 3) {
      r = 114
      g = 60
      b = 27
    }
  }
  //Rojo
  if (mouseIsPressed) {
    if (colsel == 4) {
      r = 237
      g = 28
      b = 36
    }
  }
  //Naranja
  if (mouseIsPressed) {
    if (colsel == 5) {
      r = 244
      g = 117
      b = 33
    }
  }
  //Amarillo
  if (mouseIsPressed) {
    if (colsel == 6) {
      r = 241
      g = 218
      b = 14
    }
  }
  //verde
  if (mouseIsPressed) {
    if (colsel == 7) {
      r = 175
      g = 209
      b = 54
    }
  }
  //Azul
  if (mouseIsPressed) {
    if (colsel == 8) {
      r = 0
      g = 190
      b = 242
    }
  }
  //Morado
  if (mouseIsPressed) {
    if (colsel == 9) {
      r = 110
      g = 81
      b = 162
    }
  }
  //Rosa
  if (mouseIsPressed) {
    if (colsel == 10) {
      r = 237
      g = 0
      b = 129
    }
  }


  stroke(r, g, b)
  fill(r, g, b)

//Herramientas
  //Pincel tinta
  if (mouseIsPressed) {
    if (herrsel == 1) {
      ellipse(mouseX, mouseY, 100*nivel)
    }
  }
    //Linea Cambio stroke
  if (mouseIsPressed){
    if (herrsel == 2) {
      strokeWeight(alet)
      line(mouseX, mouseY, mouseX + 300*nivel, mouseY - 300*nivel)
    }
  }
     
    
  if (mouseX > posxbot1 && mouseX < posxbot1 + tambot1 &&
    mouseY > posybot1 && mouseY < posybot1 + tambot1) {
    herrsel = 1
  }
  if (mouseX > posxbot2 && mouseX < posxbot2 + tambot2 &&
    mouseY > posybot2 && mouseY < posybot2 + tambot2) {
    herrsel = 2
  }


  
  //COlORES

  if (mouseX > posxbot11 && mouseX < posxbot11 + tambot11 &&
    mouseY > posybot11 && mouseY < posybot11 + tambot11) {
    colsel = 1
  }
  if (mouseX > posxbot12 && mouseX < posxbot12 + tambot12 &&
    mouseY > posybot12 && mouseY < posybot12 + tambot12) {
    colsel = 2
  }
  if (mouseX > posxbot13 && mouseX < posxbot13 + tambot13 &&
    mouseY > posybot13 && mouseY < posybot13 + tambot13) {
    colsel = 3
  }
  if (mouseX > posxbot14 && mouseX < posxbot14 + tambot14 &&
    mouseY > posybot14 && mouseY < posybot14 + tambot14) {
    colsel = 4
  }
  if (mouseX > posxbot15 && mouseX < posxbot15 + tambot15 &&
    mouseY > posybot15 && mouseY < posybot15 + tambot15) {
    colsel = 5
  }
  if (mouseX > posxbot16 && mouseX < posxbot16 + tambot16 &&
    mouseY > posybot16 && mouseY < posybot16 + tambot16) {
    colsel = 6
  }
  if (mouseX > posxbot17 && mouseX < posxbot17 + tambot17 &&
    mouseY > posybot17 && mouseY < posybot17 + tambot17) {
    colsel = 7
  }
  if (mouseX > posxbot18 && mouseX < posxbot18 + tambot18 &&
    mouseY > posybot18 && mouseY < posybot18 + tambot18) {
    colsel = 8
  }
  if (mouseX > posxbot19 && mouseX < posxbot19 + tambot19 &&
    mouseY > posybot19 && mouseY < posybot19 + tambot19) {
    colsel = 9
  }
  if (mouseX > posxbot20 && mouseX < posxbot20 + tambot20 &&
    mouseY > posybot20 && mouseY < posybot20 + tambot20) {
    colsel = 10
  }

  if (mouseX > posxbotcl && mouseX < posxbotcl + tambotclx &&
    mouseY > posybotcl && mouseY < posybotcl + tambotcly) {
    colsel = 11
  }

   //Lineas Laberinto
   

  
   

 


   
     //var miVol = map(mouseY, height, 0, 0, 1);
  // bolos.setVolume(miVol);
  // var miPan = map(mouseX, 0, width, -1, 1);
  // bolos.pan(miPan);

 

 }
   if(volsel==2){
     fill(0)
   rect(0,0,width,height)}
   
   }