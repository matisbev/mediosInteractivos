var dory
var aguita;
var Op=255
var coralito
var nemo
var corales=[];
var pecesP=[];
var pecesG=[];
var plantas=[];
var gusanos=[];
var pajaros=[];
var a=0
var vel=0

// Especies 
//1.Pajaro, 2.Coral, 3.Pez grande, 4.Pez pequeño,5. Gusano 6.Planta 7. Agua
 //Interacciones
//1. Si el pajaro pequeño se cruza con el coral, el color del agua cambia
//2. Si el el pez grande se cruza con el pequeño el pequeño muere y el grande se hace más grande
//3. Si el gusano se cruza con el pasto, el pasto disminuye su altura hasta que eventualmente desaparece
//4. Si el pajaro se curza con el gusanp, gusano muere y pajaro va más rapido

 function preload() {
   
   
   nubes=loadImage('pics/nubecitas.png');
    cielo=loadImage('pics/cielo.png');
    mar=loadImage('pics/mar.png');
    pasto=loadImage('pics/pasto.png');
    sol=loadImage('pics/sol.png');

  }

function setup() {
  createCanvas(600, 800);
  //For para el numero de corales
  	for (var i = 0; i < 4; i = i + 1) {
		var Xc = random(0, width);
		var Yc = random(700, height-30);
    corales[i] = new coral(Xc,Yc);
    }
  
  //For para el numero de peces pequeños
  	for (var i2 = 0; i2 < 15; i2 = i2 + 1) {
		var Xpp = random(0, width);
		var Ypp = random(500, height-10);
    pecesP[i2] = new pezPequeño(Xpp,Ypp);
    }
  //For para el numero de peces grandes
  	for (var i3 = 0; i3 < 7; i3 = i3 + 1) {
		var Xpg = random(0, width);
		var Ypg = random(500, height-10);
    pecesG[i3] = new pezGrande(Xpg,Ypg);
    }
  //For para el numero de plantas 
  	for (var i4 = 0; i4 < 10; i4 = i4 + 1) {
		var Xp = random(0, width);
		var Yp = random(400, 500);
    plantas[i4] = new planta(Xp,Yp,a);
    }
   //For para el numero gusanos
  	for (var i5 = 0; i5 < 8; i5 = i5 + 1) {
		var Xg = random(0, width);
		var Yg = random(405, 495);
    gusanos[i5] = new gusano(Xg,Yg);
    }
    //For para el numero pajaros
  	for (var i6 = 0; i6 < 8; i6 = i6 + 1) {
		var Xpa = random(0, width);
		var Ypa = random(6, 520);
    pajaros[i6] = new pajaro (Xpa,Ypa,vel);
    }
}

function draw() {
  background(255);
  
  noStroke()
  //El Cielo
   fill(102,191,236)
  rect(0,0,width,400)
  
   //La Tierra
   fill(146,200,62)
  rect(0,400,width,100)
  
  //Textura cielo
  image(cielo,-50,-10,700,425)
  //textura pasto
  image(pasto,-40,260,700,400)
  
   //El Agua (Fondo)
   fill(61,121,137)
  rect(0,500,width,300)
   
 
   // El sol
  image(sol,2,10)
  
  //Nubes
  image(nubes,122,17)
  
  //Para que cambie la opacidad del mar
aguita= new agua(0,500,Op)
  aguita.dibujarse()

  //textura mar
  image(mar,-45,336,750,600)
  
  //Para que se dibujen los corales(contiene todos los for)
  	for (var i = 0; i < corales.length; i = i + 1) {
		corales[i].dibujarse();
      
     
//Para que se dibujen peces pequeños
      		for (var i2 = 0; i2 < pecesP.length; i2 = i2 + 1) {
		pecesP[i2].dibujarse();
    pecesP[i2].moverse();
//Para que el agua cambie cuando los peces tocan el coral
    if (dist(corales[i].x, corales[i].y, pecesP[i2].x, pecesP[i2].y) < 30) {
				Op= random(0,255)
			}
//Para que los peces pequeños mueran si se salen del agua
             if(pecesP[i2].y<500){pecesP[i2].morirse()}
//Para que se dibujen los peces grandes            
            for (var i3 = 0; i3 < pecesG.length; i3 = i3 + 1) {
		pecesG[i3].dibujarse();
    pecesG[i3].moverse();
//Para que los peces grandes se coman a los pequeños y crezcan              
               if (dist(pecesP[i2].x, pecesP[i2].y, pecesG[i3].x, pecesG[i3].y) < 30) {
				pecesP[i2].morirse()
        pecesG[i3].crecer()
                 
                 
			}
//Para que los peces grandes mueran si salen del agua
              if(pecesG[i3].y<500){pecesG[i3].morirse()}
            
    }
//Para que se dibujen las plantas
       	
   
          
          }
       
 }
 //Para que se dibujen las plantas
    for (var i4 = 0; i4 < plantas.length; i4 = i4 + 1) {
          
		plantas[i4].dibujarse();
      
      
        
//Para que se achiquen las plantas cuando los gusanos las tocan          
    for (var i5 = 0; i5 < gusanos.length; i5 = i5 + 1) {
		gusanos[i5].dibujarse();
    gusanos[i5].moverse();
      
    for (var i6 = 0; i6 < gusanos.length; i6 = i6 + 1) {
		pajaros[i6].dibujarse();
    pajaros[i6].moverse();
      if(pajaros[i6].y>535){pajaros[i6].morirse()}
                
   if(dist(gusanos[i5].x, gusanos[i5].y, plantas[i4].x, plantas[i4].y) < 15){
          plantas[i4].achicarse()
          plantas[i4].morirse()}
    if(dist(gusanos[i5].x, gusanos[i5].y, pajaros[i6].x, pajaros[i6].y) < 30){
       
          gusanos[i5].morirse()}
          
          if(gusanos[i5].y<403 || gusanos[i5].y>497 ){gusanos[i5].morirse()}
                
             
  
        }
              }	}
  }	

 


 function agua(Xa,Ya,Op){
    //Caracteristicas
  this.x = Xa
  this.y = Ya
  this.o = Op
    
    //Habilidades
  this.dibujarse =function(){
    noStroke()
    fill(15,21,62,this.o)
    rect(this.x,this.y,600,300)
    } 
  this.camColor =function(){
   this.o= random(0,10)
    } 
  }
 function coral(Xc,Yc){
    //Caracteristicas
  this.x = Xc
  this.y = Yc
    
    //Habilidades
  this.dibujarse =function(){
    noStroke()
    fill(235,133,180)
    beginShape()
    vertex(this.x-16,this.y+21)
    vertex(this.x-38,this.y-5)
    vertex(this.x-17,this.y-14)
    vertex(this.x-6,this.y+18)
    vertex(this.x-6,this.y-30)
    vertex(this.x+14,this.y-29)
    vertex(this.x+6,this.y+12)
    vertex(this.x+16,this.y-9)
    vertex(this.x+37,this.y-4)
    vertex(this.x+9,this.y+26)
    endShape(CLOSE)
    fill(255,255,255,130)
    ellipse(this.x-26,this.y-1,8)
    ellipse(this.x,this.y-16,5)
    ellipse(this.x+6,this.y-24,5)
    ellipse(this.x+20,this.y-1,7)
    ellipse(this.x+22,this.y+6,4)
    
    
    } 
  
    
  }
 function pezPequeño(Xpp,Ypp){
    //Caracteristicas
  this.x = Xpp
  this.y = Ypp
  this.vivo= true
    
    //Habilidades
  this.dibujarse =function(){
    if(this.vivo == true){
    fill(238,126,0)
    ellipse(this.x,this.y,34,19)
    triangle(this.x-25,this.y-11,this.x-8,this.y,this.x-25,this.y+9)
    fill(0)
    ellipse(this.x+11,this.y-2,2)
    fill(255,255,255,130)
    rect(this.x-10,this.y-3,1,7)
    rect(this.x-7,this.y-3,1,7)
    rect(this.x-4,this.y-3,1,7)
    }

  this.moverse = function() {
  this.x= this.x+ random(-2,2)
  this.y= this.y+ random(-1,1)
  }
  
  this.morirse = function(){
  this.x = -2000
  this.y =-3000 
  this.vivo=false}
    
    } 
  
    
  }
 function pezGrande(Xpg,Ypg){
    //Caracteristicas
  this.x = Xpg
  this.y = Ypg
  this.c =0 
  this.vivo= true
    
    //Habilidades
  this.dibujarse =function(){
    if(this.vivo == true){
    fill(224,182,0)
      //cabeza
    triangle(this.x-14-this.c,this.y-32-this.c,
             this.x-14-this.c,this.y+28+this.c,
             this.x+34+this.c,this.y)
      //colita
    triangle(this.x-28-this.c,this.y-19-this.c,
             this.x-29-this.c,this.y+17+this.c,
             this.x+this.c,this.y)
      
    fill(0)
    ellipse(this.x+20,this.y-4,4)
    fill(255,255,255,130)
    rect(this.x-8,this.y-9,3,15)
    rect(this.x-4,this.y-9,3,15)
    rect(this.x,this.y-9,3,15)
    }

  this.moverse = function() {
  this.x= this.x+ random(-1/2,1/2)
  this.y= this.y+ random(-1/2,1/2)
  }
  
  this.morirse = function(){
  this.x = -2000
  this.y =-3000  
  this.vivo=false}
  
  this.crecer = function(){
    this.c= this.c+3
    
    } 
  
  } 
 }
 function planta(Xp,Yp,a){
    //Caracteristicas
  this.x = Xp
  this.y = Yp
  this.a =a
  this.vivo=true
    
    //Habilidades
  this.dibujarse =function(){
    if(this.vivo == true){
    noStroke()
    fill(13,61,31)
    beginShape()
    vertex(this.x-10,this.y)
    vertex(this.x-10,this.y-76+this.a)
    vertex(this.x-4,this.y-4)
    vertex(this.x-3,this.y-65+this.a)
    vertex(this.x+2,this.y-3)
    vertex(this.x+6,this.y-73+this.a)
    vertex(this.x+10,this.y)
    endShape(CLOSE)}

    
    } 
  this.achicarse = function() {
this.a= this.a +0.1  } 
  this.morirse = function(){if(this.a>65){
  this.x=-3000
  this.y=-4000
  this.vivo=false}}
}
 function gusano(Xg,Yg){
    //Caracteristicas
  this.x = Xg
  this.y = Yg
  this.vivo= true
    
    //Habilidades
  this.dibujarse =function(){
    if(this.vivo == true){
//Cuerpo
      fill(5,148,71)
    noStroke() 
    ellipse(this.x,this.y,18)
    ellipse(this.x-18,this.y,18)
    ellipse(this.x-36,this.y,18)
    ellipse(this.x-54,this.y,18)
      //antenas
    ellipse(this.x+12,this.y-12,2)
    ellipse(this.x-12,this.y-12,2)  
      
       stroke(5,148,71)
 line(this.x,this.y,this.x-12,this.y-12)
 line(this.x,this.y,this.x+12,this.y-12)
      //Ojos
      noStroke()
      fill(0)
      ellipse(this.x-2,this.y-3,3)
    ellipse(this.x+3,this.y-3,3)
      //Boca
      fill(255)
      ellipse(this.x,this.y+3,6)
      fill(5,148,71)
      rect(this.x-3,this.y,6,3)
      
      
    }

  this.moverse = function() {
  this.x= this.x+ random(-1/2,1/2)
  this.y= this.y+ random(-1/10,1/10)
  }
  
  this.morirse = function(){
  this.x = -2000
  this.y =-3000 
  this.vivo=false}
    
    } 
  
    
  }
function pajaro(Xpa,Ypa,Vel){
    //Caracteristicas
  this.x = Xpa
  this.y = Ypa
  this.vivo= true
  this.vel= Vel
    
    //Habilidades
  this.dibujarse =function(){
    if(this.vivo == true){
    fill(220,180,39)
    triangle(this.x+11,this.y+5,this.x+12,this.y-2,this.x+22,this.y+2)
    fill(197,156,96)
    ellipse(this.x,this.y,27)
    ellipse(this.x-21,this.y,45,19)
    fill(105,80,47)
    triangle(this.x-38,this.y+2,this.x-9,this.y+3,this.x-22,this.y+16)
    fill(0)
    ellipse(this.x+6,this.y-6,3)
    }

  this.moverse = function() {
  this.x= this.x+ random(-1,1)
  this.y= this.y+ random(-1,1)
  }
  
   this.moverseRapido = function() {
  this.x= this.x+ random(-10+this.vel,10+this.vel)
  this.y= this.y+ random(-2-this.vel,2+this.vel)
  }
  
  this.morirse = function(){
  this.x = -2000
  this.y =-3000 
  this.vivo=false}
    
    } 
  
    
  }

 