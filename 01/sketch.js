function 
setup() {
  createCanvas(500, 520);
	 background(238,231,191);
}

function draw() {
		//PRIMERA FIGURA
//Cachito
	noStroke();
	fill(0);
	ellipse(216,115,125,116);
	fill(238,231,191);
	noStroke();
	ellipse(220,111,110,99);
	fill(238,231,191);
	rect(132,6,163,104)
	rect(24,68,181,165)
	
		//Triangulo
	noFill();
	stroke(0.1)
	beginShape();
	vertex(132,250);
	vertex(248,130);
	vertex(461,314);
	endShape();
	
	
	
	//Linea Vertical
	noFill();
	stroke(1);
	strokeWeight(1);
	line(248,44,248,179);
	
	//Linea Diagonal
	noFill();
	stroke(1);
	strokeWeight(0.7);
	line(219,49,314,92);
	
	//Linea Horizontal 1
	noFill();
	stroke(1);
	strokeWeight(1);
	line(226,93,276,93);
	
	//Linea Horizontal 2
	noFill();
	stroke(1);
	strokeWeight(1);
	line(231,103,279,101);
	
	//Linea Diagonal 2
	noFill();
	stroke(1);
	strokeWeight(1);
	line(75,254,347,180);
	
	//Curva Parte 1
	noFill();
	stroke(1);
	strokeWeight(6);
	curve(500,700,116,277,142,237,204,293);
	
	//Curva Parte 2
	noFill();
	stroke(1);
	strokeWeight(5);
	curve(1,150,142,237,180,224,200,120);
	stroke(255)
	
		//Curva Parte 3
	noFill();
	stroke(1);
	strokeWeight(4);
	curve(200,400,180,224,225,212,300,260);
	stroke(255)
	
		//Curva Parte 4
	noFill();
	stroke(1);
	strokeWeight(2);
	curve(50,140,225,212,268,200,300,120);
	stroke(255)

			//Curva Parte 5
	noFill();
	stroke(1);
	strokeWeight(1);
	curve(180,300,268,200,352,176,500,208);
	stroke(255)
	


	//SEGUNDA FIGURA
		//Circulo AMARILLO DESVANECIDO
noStroke();
fill(238,185,66,100)
	ellipse(143,175,80);
	
	//Circulo rosado DESVANECIDO
	stroke(222,103,82)
	strokeWeight(4)
fill(241,132,138)
	ellipse(88,96,183);
	

	
	//Circulo Rojo
	noStroke();
	fill(186,32,37);
	ellipse(143,175,59);
	
 // Circulo Negro
	noStroke();
	fill(0);
	ellipse(88,96,153);
	
	//Circulo Morado
	noStroke();
	fill(110,76,138);
	ellipse(88,96,71);
	
	//TERCERA FIGURA
	//Circulo Indigo
	noStroke()
	fill(170,159,188,2);
	ellipse(70,371,92);
	
		//Circulo Celeste
	stroke(170,159,188);
	strokeWeight(5);
	fill(97,145,175);
	ellipse(70,371,69);
	
	//Circulo Amarillo Contorno
	stroke(0);
	strokeWeight(1);
	fill(214,185,41);
	ellipse(70,371,53);
	
	//CUARTA FIGURA
	//Circulo Amarillo
	noStroke();
	fill(231,230,135,20);
	ellipse(292,458,65);
	
	//Circulo Rosa
	stroke(231,230,135);
	strokeWeight(3);
	fill(219,166,145);
	ellipse(292,458,55);
	
	//Circulo Azul
	noStroke();
	fill(25,83,128);
	ellipse(290,456,41);
	
	//Linea 1
	stroke(1);
	strokeWeight(1);
	line(191,479,328,388);
	
	//Linea 2
	stroke(1);
	strokeWeight(0.7);
	line(214,509,310,418);

	//QUINTA FIGURA
	//Curva 1
	noFill();
	stroke(217,216,154);
	strokeWeight(4);
	curve(250,500,141,341,186,292,400,400);
	stroke(255)
		noFill();
	stroke(1);
	strokeWeight(1);
	curve(250,500,141,341,186,292,400,400);
	stroke(255)
	
	//Curva 2
	noFill();
	stroke(50,84,63);
	strokeWeight(2);
	curve(300,380,236,260,260,257,250,380);
	
	//Curva 3
	noFill();
	stroke(199,155,174);
	strokeWeight(1);
	curve(300,400,233,256,262,252,250,400);
	
	//Curva 4
	noFill();
	stroke(238,198,184);
	strokeWeight(3);
	curve(300,360,282,250,315,247,300,360);
	
	//Curva 5
	noFill();
	stroke(165,182,198);
	strokeWeight(2);
	curve(270,360,286,254,304,254,200,300);
	
	//Curva 6
	noFill();
	stroke(0.5);
	strokeWeight(1);
	curve(250,300,288,257,300,257,300,300);
	
	//Fondo Poli
			noStroke();
	fill(229,219,213)
	beginShape();
	vertex(162,353);
	vertex(210,234);
	vertex(250,273);
	vertex(270,238);
	vertex(295,263);
	vertex(337,221);
	vertex(342,225);
	vertex(382,182);
	vertex(389,187);
	vertex(212,392);
endShape(CLOSE)
	
	//Poli 1
		noStroke();
	fill(124,77,34)
	beginShape();
	vertex(162,353);
	vertex(177,317);
	vertex(203,343);
	vertex(187,366);
endShape(CLOSE)
	
		//Poli 2
		noStroke();
	fill(192,200,218)
	beginShape();
	vertex(187,366);
	vertex(203,343);
	vertex(210,350);
	vertex(192,368);
endShape(CLOSE)

	//Poli 3
		noStroke();
	fill(115,143,59)
	beginShape();
	vertex(206,376);
	vertex(220,359);
	vertex(231,370);
	vertex(212,392);
endShape(CLOSE)	
	vertex(187,366);
	
	//Poli 4
		noStroke();
	fill(1)
	beginShape();
	vertex(202,343);
	vertex(215,324);
	vertex(227,333);
	vertex(210,350);
endShape(CLOSE)
	
	//Poli 5
		noStroke();
	fill(213,209,181)
	beginShape();
	vertex(210,350);
	vertex(227,333);
	vertex(237,341);
	vertex(220,359);
endShape(CLOSE)
	
			//Poli 6
		noStroke();
	fill(63,97,46)
	beginShape();
	vertex(184,299);
	vertex(190,282);
	vertex(229,303);
	vertex(215,324);
endShape(CLOSE)
	
		//Poli 7
		noStroke();
	fill(197,199,191)
	beginShape();
	vertex(237,341);
	vertex(258,319);
	vertex(269,325);
	vertex(248,350);
endShape(CLOSE)
	
	//Poli 8
		noStroke();
	fill(90,141,170)
	beginShape();
	vertex(229,303);
	vertex(239,287);
	vertex(259,299);
	vertex(247,313);
endShape(CLOSE)
	
	//Poli 9
		noStroke();
	fill(246,158,156)
	beginShape();
	vertex(258,319);
	vertex(270,306);
	vertex(280,312);
	vertex(269,325)
endShape(CLOSE)
	
		//Poli 10
		noStroke();
	fill(1)
	beginShape();
	vertex(199,262);
	vertex(210,234);
	vertex(249,270);
	vertex(239,287)
endShape(CLOSE)
	
		//Poli 11
		noStroke();
	fill(49,92,64)
	beginShape();
	vertex(259,299);
	vertex(270,290);
	vertex(277,297);
	vertex(270,306)
endShape(CLOSE)
	
		//Poli 12
		noStroke();
	fill(1)
	beginShape();
	vertex(249,272);
	vertex(256,261);
	vertex(277,281);
	vertex(270,290)
endShape(CLOSE)
	
			//Poli 13
		noStroke();
	fill(1)
	beginShape();
	vertex(277,297);
	vertex(285,288);
	vertex(294,296);
	vertex(287,306)
endShape(CLOSE)
	
			//Poli 14
		noStroke();
	fill(1)
	beginShape();
	vertex(277,281);
	vertex(284,274);
	vertex(292,280);
	vertex(285,288)
endShape(CLOSE)
	
			//Poli 15
		noStroke();
	fill(1)
	beginShape();
	vertex(261,253);
	vertex(270,238);
	vertex(295,263);
	vertex(284,274);
endShape(CLOSE)
	
		//Poli 16
		noStroke();
	fill(142,97,38)
	beginShape();
	vertex(292,281);
	vertex(301,270);
	vertex(310,279);
	vertex(300,289);
endShape(CLOSE)
	
			//Poli 17
		noStroke();
	fill(1)
	beginShape();
	vertex(318,250);
	vertex(332,237);
	vertex(339,244);
	vertex(326,259);
endShape(CLOSE)
	
	//Poli 18
		noStroke();
	fill(1)
	beginShape();
	vertex(326,232);
	vertex(337,221);
	vertex(342,225);
	vertex(332,237);
endShape(CLOSE)
	
		//Poli 19
		noStroke();
	fill(1)
	beginShape();
	vertex(342,225);
	vertex(349,216);
	vertex(357,223);
	vertex(350,232);
endShape(CLOSE)
	
	
		//Poli 20
		noStroke();
	fill(1)
	beginShape();
	vertex(360,206);
	vertex(368,198);
	vertex(374,203);
	vertex(368,212);
endShape(CLOSE)
	
			//Poli 21
		noStroke();
	fill(1)
	beginShape();
	vertex(374,191);
	vertex(382,182);
	vertex(389,187);
	vertex(381,197);
endShape(CLOSE)
	
	
	
	
	//Base
	noStroke();
	fill(1)
	beginShape();
	vertex(92,321);
	vertex(95,316);
	vertex(220,383);
	vertex(212,392);
endShape(CLOSE)
	
	//Columna 1
	stroke(1);
	noFill()
	beginShape();
	vertex(206,376);
	vertex(382,182);
	vertex(389,187);
	vertex(212,392);
endShape(CLOSE)
	
	//Columna 2
	stroke(1);
	noFill()
	beginShape();
	vertex(206,376);
	vertex(342,225);
	vertex(337,221);
	vertex(192,368);
endShape(CLOSE)
	
	//Columna 3
	stroke(1);
	noFill()
	beginShape();
	vertex(270,238);
	vertex(295,263);
	vertex(192,368);
	vertex(187,366);
endShape(CLOSE)
	
	//Columna 4
	stroke(1);
	noFill()
	beginShape();
	vertex(187,366);
	vertex(250,270);
	vertex(210,234);
	vertex(162,353);
endShape(CLOSE)
	
	//Fila 1
		noFill();
	stroke(1);
	strokeWeight(1);
	line(177,317,231,370);
	
	//Fila 2
		noFill();
	stroke(1);
	strokeWeight(1);
	line(184,299,248,350);
	
	//Fila 3
		noFill();
	stroke(1);
	strokeWeight(1);
	line(190,282,269,325);
	
	//Fila 4
		noFill();
	stroke(1);
	strokeWeight(1);
	line(199,262,280,312);
	
	//Fila 5
		noFill();
	stroke(1);
	strokeWeight(1);
	line(250,270,285,305);
	
	//Fila 6
		noFill();
	stroke(1);
	strokeWeight(1);
	line(256,261,294,296);
	
	//Fila 7
		noFill();
	stroke(1);
	strokeWeight(1);
	line(261,253,300,289);
	
	//Fila 8
		noFill();
	stroke(1);
	strokeWeight(1);
	line(295,263,308,278);
	
		//Fila 9
		noFill();
	stroke(1);
	strokeWeight(1);
	line(314,245,325,259);
	
	//Fila 10
		noFill();
	stroke(1);
	strokeWeight(1);
	line(326,232,339,244);
	
		//Fila 11
		noFill();
	stroke(1);
	strokeWeight(1);
	line(342,225,349,232);
	
		//Fila 12
		noFill();
	stroke(1);
	strokeWeight(1);
	line(360,206,366,211);
	
		//Fila 13
		noFill();
	stroke(1);
	strokeWeight(1);
	line(368,198,373,203);
	
		//Fila 14
		noFill();
	stroke(1);
	strokeWeight(1);
	line(374,191,379,196);
	
	//Figura 6
	//Circulo 1
	stroke(1)
	strokeWeight(0.1)
	fill(255)
	ellipse(373,156,52);
	
		//Circulo 2
	stroke(1)
	strokeWeight(3)
	fill(1)
	ellipse(373,156,32);
	
			//Circulo 3
	stroke(181,50,49)
	strokeWeight(1)
	fill(255)
	ellipse(373,156,28);
	
			//Circulo 4
	stroke(1)
	strokeWeight(1)
	fill(181,50,49)
	ellipse(371,102,13);
}