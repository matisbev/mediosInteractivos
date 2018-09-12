//VARIABLES
var x = 10
 var w = 900
 var y = 10

 var p = -900
 var q = 10
 var s = 10
 var vel = 15
 var b = 0
 var u = 0
 var vels = 15
 var f = 0
 var velss = 5
 var f1 = 0
 var ua=0
 var l=0

 function setup() {
 	createCanvas(900, 600);
 	background(7,15,40);

 	fill(255)
 	rect(450, 200, 100, 100)
 }

 function draw() {

//Estrellas del fondo
 	background(5,10,25)
 	noStroke()
 	fill(255)
	  
 	ellipse(x + 10, y, s)
 	ellipse(x + 50, y + 30, s - 5)
 	ellipse(x + 200, y + 150, s - 4)
 	ellipse(x + 20, y + 400, s)
 	ellipse(x + 600, y + 300, s)
 	ellipse(x + 600, y + 500, s - 5)
 	ellipse(x + 200, y + 150, s - 4)
 	ellipse(x + 100, y + 500, s - 2)
 	ellipse(x + 300, y + 220, s - 4)
 	ellipse(x + 400, y + 30, s - 5)
 	ellipse(x + 200, y + 30, s - 4)
 	ellipse(x + 20, y + 400, s)
 	ellipse(x + 700, y + 100, s)
 	ellipse(x + 65, y + 326, s - 5)
 	ellipse(x + 450, y + 259, s - 4)
 	ellipse(x + 322, y + 109, s - 2)
 	ellipse(x + 222, y + 276, s - 4)

 	ellipse(x + 248, y + 30, s - 5)
 	ellipse(x + 670, y + 150, s - 4)
 	ellipse(x + 20, y + 400, s)
 	ellipse(x + 600, y + 300, s)
 	ellipse(x + 600, y + 500, s - 5)
 	ellipse(x + 134, y + 150, s - 4)
 	ellipse(x + 657, y + 500, s - 2)
 	ellipse(x + 512, y + 220, s - 4)
 	ellipse(x + 556, y + 30, s - 5)
 	ellipse(x + 746, y + 30, s - 4)
 	ellipse(x + 225, y + 400, s)
 	ellipse(x + 800, y + 100, s)
 	ellipse(x + 165, y + 326, s - 5)
 	ellipse(x + 123, y + 259, s - 4)
 	ellipse(x + 873, y + 109, s - 2)
 	ellipse(x + 299, y + 276, s - 4)


 	ellipse(p + 50, y + 30, s - 5)
 	ellipse(p + 200, y + 200, s - 4)
 	ellipse(p + 20, y + 400, s)
 	ellipse(p + 600, y + 300, s)
 	ellipse(p + 600, y + 500, s - 5)
 	ellipse(p + 200, y + 150, s - 4)
 	ellipse(p + 100, y + 500, s - 2)
 	ellipse(p + 300, y + 220, s - 4)
 	ellipse(p + 400, y + 30, s - 5)
 	ellipse(p + 200, y + 30, s - 4)
 	ellipse(p + 20, y + 400, s)
 	ellipse(p + 700, y + 100, s)
 	ellipse(p + 65, y + 326, s - 5)
 	ellipse(p + 450, y + 259, s - 4)
 	ellipse(p + 322, y + 109, s - 2)
 	ellipse(p + 222, y + 276, s - 4)

 	ellipse(p + 248, y + 300, s - 5)
 	ellipse(p + 670, y + 150, s - 4)
 	ellipse(p + 20, y + 400, s)
 	ellipse(p + 600, y + 300, s)
 	ellipse(p + 600, y + 500, s - 5)
 	ellipse(p + 134, y + 150, s - 4)
 	ellipse(p + 657, y + 500, s - 2)
 	ellipse(p + 512, y + 220, s - 4)
 	ellipse(p + 556, y + 30, s - 1)
 	ellipse(p + 746, y + 30, s - 4)
 	ellipse(p + 225, y + 400, s)
 	ellipse(p + 800, y + 100, s)
 	ellipse(p + 165, y + 326, s - 5)
 	ellipse(p + 123, y + 259, s - 4)
 	ellipse(p + 873, y + 109, s - 6)
 	ellipse(p + 299, y + 276, s - 4)

 	//COHETE
	 	//Fueguito del cohete
noStroke()
 	fill(249, 166, 0)
 	triangle(650 +w+l, 300 - u -b-ua, 550 +w+l, 350 - u -b-ua, 650 +w+l, 400 - u -b-ua)
 	triangle(700 +w+l, 280 - u -b-ua, 600 +w+l, 350 - u -b-ua, 700 +w+l, 420 - u -b-ua)
	 	//Alas del cohete
 	noStroke()
 	fill(100)
 	triangle(550 +w+l, 250 - u -b-ua, 450 +w+l, 350 - u -b-ua, 550 +w+l, 450 - u -b-ua)
 	triangle(600 +w+l, 320 - u -b-ua, 500 +w+l, 350 - u -b-ua, 600 +w+l, 380 - u -b-ua)
		//Cuerpo
 	noStroke()
 	fill(200)
 	rect(350 +w+l, 300 - u -b-ua, 220, 100)
 	fill(198, 34, 43)
	 //Nariz Cohete
	triangle(350 +w+l, 300 - u -b-ua, 250 +w+l, 350 - u -b-ua, 350 +w+l, 400 - u -b-ua)
		//Ventanas
 	stroke(1)
 	strokeWeight(3)
 	fill(101, 200, 239)
 	ellipse(400 +w+l, 350 - u -b-ua, 50)
 	ellipse(460 +w+l, 350 - u -b-ua, 50)
 	ellipse(520 +w+l, 350 - u -b-ua, 50)



 	//Para que el cohete entre
 	if (frameCount > 80) {
 		w = w - vel
 	}
 	//Para que el cohete se detenga
 	if (w < 10) {
 		w = 0
 	}
 	//Para que el cohete suba y salga el planeta
 	if (frameCount > 190) {

 		u = u + velss
 		stroke(196, 30, 94)
 		strokeWeight(15)
 		fill(216, 0, 247)
 		ellipse(-400 + f, 500, 300)
 		noStroke()
 		fill(211, 13, 74, 90)
 		ellipse(-400 + f, 500, 400)
 		f = f + vel
 	}
 	//Para que el cohete se detenga
 	if (u > 200) {
 		u = 200
 	}
 	//Para que el cohete baje y salga el planeta
 	if (frameCount > 300) {

 		b = b - velss
 		stroke(196, 30, 94)
 		strokeWeight(15)
 		fill(229, 234, 218)
 		ellipse(-400 + f1, 100, 300)
 		stroke(138, 186, 32)
 		fill(129, 239, 55, 50)
 		ellipse(-400 + f1, 100, 400)
 		f1 = f1 + vel
 	}
 	//Para que el cohete pare
 	if (frameCount > 360) {
 		b = -300
	

 	}
	 //para que el cohete suba
	if (frameCount > 400) {
 	ua=ua+velss}
	 //Para que el cohete se detenga
	if (ua > 150) {
 		ua = 150
	

 	}
	 //Para que le salga mas fuego al cohete
	 if (frameCount > 450) { 	
		 noStroke()
 	fill(249, 166, 0)
			triangle(750 +w+l, 260 - u -b-ua, 650 +w+l, 350 - u -b-ua, 750 +w+l, 440 - u -b-ua)}
		//Para que el Cohete acelere	
	  if (frameCount > 460) {
			l=l-vels/2}
	 //Para que el fondo se mueva mas rapido
   if(frameCount>460){vel=40}
//Para cerrar con fondo Blanco
if (frameCount>580){background(255)}



//Para que las dos tandas de estrellas se muevan en el fondo
 	p = p + vel
 	x = x + vel
//Para reiniciar el movimiento de las estrellas
 	if (x > width + 10) {
 		x = -900
 	}
 	if (p > width + 10) {
 		p = -900
 	}

 }