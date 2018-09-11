//Herramientas
var posxbot1 = 30
var posybot1 = 20
var tambot1 = 40

var posxbot2 = 80
var posybot2 = 20
var tambot2 = 40

var posxbot3 = 130
var posybot3 = 20
var tambot3 = 40

var posxbot4 = 180
var posybot4 = 20
var tambot4 = 40

var posxbot5 = 230
var posybot5 = 20
var tambot5 = 40

var posxbot6 = 280
var posybot6 = 20
var tambot6 = 40

var posxbot7 = 330
var posybot7 = 20
var tambot7 = 40

var posxbot8 = 380
var posybot8 = 20
var tambot8 = 40

var posxbot9 = 430
var posybot9 = 20
var tambot9 = 40

var posxbot10 = 480
var posybot10 = 20
var tambot10 = 40

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
var r = 0
var g = 0
var b = 0

function setup() {
  createCanvas(610, 800);
  background(255);


}

function draw() {

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
  rect(posxbot3, posybot3, tambot3, tambot3)
  rect(posxbot4, posybot4, tambot4, tambot4)
  rect(posxbot5, posybot5, tambot5, tambot5)
  rect(posxbot6, posybot6, tambot6, tambot6)
  rect(posxbot7, posybot7, tambot7, tambot7)
  rect(posxbot8, posybot8, tambot8, tambot8)
  rect(posxbot9, posybot9, tambot9, tambot9)
  rect(posxbot10, posybot10, tambot10, tambot10)
  

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
  ellipse(40,30,9)
  ellipse(45,35,13)
   ellipse(52,42,9)
  ellipse(60,50,6)
  //Linea Espaciada
  strokeWeight(2)
  line(85,50,100,25)
  strokeWeight(3)
  line(92,50,107,25)
  strokeWeight(1)
  line(100,50,115,25)
  
   //Lineas geom
  line(133,55,150,35)
  line(133,55,158,35)
  line(133,55,145,25)
   line(133,55,165,35)
  
   //Circulitos
  noFill()
  ellipse(200,40,35)
   ellipse(200,40,5)
   ellipse(200,40,10)
   ellipse(200,40,28)
  
  //Triangulos Random
  
  fill(0)
 triangle(240, 50,243, 32, 254,56)
   triangle(251, 50,253, 23, 260,56)
  
    //cuadrados
  noFill()
  rect(posxbot6+2, posybot6+3, tambot6-10, tambot6-10)
  rect(posxbot6+4, posybot6+5, tambot6-12, tambot6-12)
  rect(posxbot6+6, posybot6+7, tambot6-13, tambot6-13)
  rect(posxbot6+8, posybot6+9, tambot6-14, tambot6-14)
  rect(posxbot6+10, posybot6+11, tambot6-15, tambot6-15)
  
  
    //Linea dos Puntos
  
line(340,55,365,26)
  fill(0)
    ellipse(340,55,4)
  ellipse(365,26,4)
  
  //Rectangulo centro blanco
   rect(posxbot8+5, posybot8+5, tambot8-10, tambot8-10)
  fill(255)
  rect(posxbot8+10, posybot8+5, 20, tambot8-10)
  
  
  
  
//Curvas
  noFill()
    curve(450,50,440,30,450,50,450,200)
   curve(450,50,445,30,455,50,450,200)
     curve(450,50,450,30,460,50,450,200)
 
  //circulo cruz
  fill(0)
  ellipse(500,40, 35)
    fill(255)
      noStroke()
      rect(posxbot10+15, posybot10+2, tambot10-30, tambot10-3)
   rect(posxbot10+2, posybot10+15, tambot10-3, tambot10-30)

  
  
  
  
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
      ellipse(mouseX, mouseY, ale)
    }
  }
    //Linea Cambio stroke
  if (mouseIsPressed){
    if (herrsel == 2) {
      strokeWeight(alet)
      line(mouseX, mouseY, mouseX + 100, mouseY - 100)
    }
  }
      //Lineas Aleatorias
     if (mouseIsPressed){
  if (herrsel == 3) {
    line(mouseX + 10, mouseY + 10, loco, loco)
  }
     }
    //Circulitos
  if (mouseIsPressed) {
    if (herrsel == 4) {
      noFill()
      ellipse(mouseX, mouseY, aleta)
    }
      //Triangulos Random
    if (mouseIsPressed) {
    if (herrsel == 5) {
      
      triangle(305, 400,loco, ale, mouseX,mouseY)
    }
    }
    //cudraditos
      if (mouseIsPressed) {
    if (herrsel == 6) {
      noFill()
     rect(mouseX, mouseY, mouseX-100,mouseY-100)
    }
    }
       //Linea Dos circulos
       if (mouseIsPressed) {
    if (herrsel == 7) {
        ellipse(mouseX, mouseY, 10)
       ellipse(mouseX+100, mouseY-100, 10)
   line(mouseX, mouseY, mouseX + 100, mouseY - 100)
       line(mouseX+100, mouseY-100, mouseX , mouseY)
      
    }
    }
    //Cuadrado centro blanco
         if (mouseIsPressed) {
    if (herrsel == 8) {
      noStroke()
       rect(mouseX, mouseY, 40,40)
      fill(255)
       rect(mouseX+10, mouseY, 20,40)
    }
    }
    
     //Curvitas
    
     if (mouseIsPressed) {
    if (herrsel == 9) {
      noFill()
     curve(loco,loco+100,mouseX,mouseY,mouseX+loco,mouseY+loco,aleta,aleta);
    }
    }
    //Circulo centro cruz
     if (mouseIsPressed) {
    if (herrsel == 10) {
      
    ellipse(mouseX,mouseY, 40,40)
    fill(255)
      noStroke()
      rect(mouseX-5, mouseY-25, 10,50)
        rect(mouseX-25, mouseY-5, 50,10)
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
  if (mouseX > posxbot3 && mouseX < posxbot3 + tambot3 &&
    mouseY > posybot3 && mouseY < posybot3 + tambot3) {
    herrsel = 3
  }
  if (mouseX > posxbot4 && mouseX < posxbot4 + tambot4 &&
    mouseY > posybot4 && mouseY < posybot4 + tambot4) {
    herrsel = 4
  }
  if (mouseX > posxbot5 && mouseX < posxbot5 + tambot5 &&
    mouseY > posybot5 && mouseY < posybot5 + tambot5) {
    herrsel = 5
  }
  if (mouseX > posxbot6 && mouseX < posxbot6 + tambot6 &&
    mouseY > posybot6 && mouseY < posybot6 + tambot6) {
    herrsel = 6
  }
  if (mouseX > posxbot7 && mouseX < posxbot7 + tambot7 &&
    mouseY > posybot7 && mouseY < posybot7 + tambot7) {
    herrsel = 7
  }
  if (mouseX > posxbot8 && mouseX < posxbot8 + tambot8 &&
    mouseY > posybot8 && mouseY < posybot8 + tambot8) {
    herrsel = 8
  }
  if (mouseX > posxbot9 && mouseX < posxbot9 + tambot9 &&
    mouseY > posybot9 && mouseY < posybot9 + tambot9) {
    herrsel = 9
  }
  if (mouseX > posxbot10 && mouseX < posxbot10 + tambot10 &&
    mouseY > posybot10 && mouseY < posybot10 + tambot10) {
    herrsel = 10
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


}}