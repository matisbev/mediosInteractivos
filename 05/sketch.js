var o=0
var o1=0
var o2=0
var o3=0
var o4=0


function setup() {
  createCanvas(500, 700);
  
}

function draw() {
  background(255);
  var h= hour()
var m= minute()
  var s= second()
  var r= day()
  
  //Torso
  fill(205,147,107)
  noStroke()
  beginShape()
  vertex(199,423)
  vertex(199,285)
  vertex(204,250)
  vertex(241,233)
  vertex(263,233)
  vertex(304,250)
  vertex(309,285)
  vertex(309,423)
  endShape(CLOSE)
  
  //Brazos
   beginShape()
  vertex(56,223)
  vertex(66,200)
  vertex(204,250)
  vertex(199,285)
  endShape(CLOSE)
  
  beginShape()
  vertex(453,223)
  vertex(442,200)
  vertex(304,250)
  vertex(309,285)
  endShape(CLOSE)
  
  ellipse(53,208,34)
  ellipse(456,208,34)
  
  //Piernas
  
    beginShape()
  vertex(183,579)
  vertex(199,423)
  vertex(309,423)
  vertex(326,579)
  vertex(282,579)
  vertex(269,443)
  vertex(239,443)
  vertex(227,579)
  endShape(CLOSE)
  
  //Pies
  rect(199,574,28,15)
  rect(282,574,28,15)
  
  rect(162,583,65,27,50,0,0,0)
  rect(282,583,65,27,0,50,0,0)
  
  
  
  
  
  //El cuello del Personaje
  fill(170,119,85)
  noStroke()
  rect(241,201,22,43,35)
  //La Cara del personaje 
  fill(205,147,107)
  noStroke()
  rect(195,110,113,106,35)
  //las Orjeas
    fill(205,147,107)
  ellipse(194,166,21)
  
     fill(205,147,107)
  ellipse(308,166,21)
  //El pelo
  	fill(1)
  ellipse(193,131,19)
  ellipse(201,115,25)
  ellipse(219,105,27)
  ellipse(239,103,28)
  ellipse(261,103,28)
  ellipse(284,107,23)
  ellipse(300,118,23)
  ellipse(305,125,20)
  
    //La boca
    	fill(255)
  ellipse(252,186,36)
  		fill(205,147,107)
  rect(230,170,40,21)
  
  //Cejas
  	noFill()
  stroke(1)
  strokeWeight(3)
  ellipse(230,161,26)
  ellipse(271,161,26)
  	fill(205,147,107)
 		 noStroke()
 rect(210,153,88,24)
  
   //Ojos
  
  fill(1)
 		 noStroke()
   ellipse(232,163,7,11)
   ellipse(270,163,7,11)
  
  //De 10pm A 7am el personaje usa la pijama azul h>=22 | h<7)
  if(h>=22 | h<7){
     stroke(9,71,89,o)
    strokeWeight(1)
    fill(220,232,243,o)
    
    //Camisa Pijama
     beginShape()
  vertex(199,423)
  vertex(199,285)
    vertex(72,230)
    vertex(81,205)
  vertex(204,250)
  vertex(241,233)
    vertex(252,258)
  vertex(263,233)
  vertex(304,250)
    vertex(425,206)
    vertex(435,230)
  vertex(309,285)
  vertex(309,423)
  endShape(CLOSE)
    //Cuello pijama
    line(250,259,250,423)
    
     stroke(9,71,89,o)
    strokeWeight(0.5)
    fill(255,255,255,o)
    
    beginShape()
    vertex(241,233)
    vertex(252,258)
  	vertex(263,233)
    vertex(284,252)
    vertex(266,246)
    vertex(271,254)
    vertex(252,261)
    vertex(234,254)
    vertex(239,246)
    vertex(221,252)
    endShape(CLOSE)
    
    //Botones
    noStroke()
      fill(9,71,89,o)
    ellipse(256,291,7)
    ellipse(256,326,7)
    ellipse(256,362,7)
    ellipse(256,397,7)
    //Bolsillo
    rect(213,285,26,6)
    noFill()
    stroke(9,71,89,o)
    rect(213,291,26,18,0,0,50,50)
    
  
    //Pantalon pijama
    stroke(9,71,89,o)
    strokeWeight(1)
    fill(220,232,243,o)
     beginShape()
  vertex(183,579)
  vertex(199,423)
  vertex(309,423)
  vertex(326,579)
  vertex(282,579)
  vertex(269,443)
  vertex(239,443)
  vertex(227,579)
  endShape(CLOSE)

  //Transicion ropa 
    o=o+1}
  
    //De 7am A 11am el personaje usa camiseta, chaqueta negra, jeans, tenis y bufanda h>=7 && h<11
  if(h>=7 && h<11){
    
   //Camiseta
    noStroke()
    fill(202,220,71,o1)
         beginShape()
  vertex(199,423)
  vertex(199,285)
    vertex(169,273)
    vertex(181,240)
  vertex(204,250)
  vertex(241,233)
    vertex(252,258)
  vertex(263,233)
  vertex(304,250)
    vertex(324,242)
    vertex(333,276)
  vertex(309,285)
  vertex(309,423)
  endShape(CLOSE)
    
    //Chaqueta
    noStroke()
		fill(1,1,1,o1)   
    
  beginShape()
  vertex(199,423)
  vertex(199,285)
    vertex(71,233)
    vertex(83,200)
  vertex(204,250)
  vertex(241,233)
  vertex(230,260)
  vertex(230,423)
  endShape(CLOSE)
    
   beginShape()
  vertex(263,233)
  vertex(304,250)
    vertex(423,200)
    vertex(438,237)
  vertex(309,285)
  vertex(309,423)
    vertex(277,423)
    vertex(277,260)
  endShape(CLOSE)
    
    //Bufanda
    noStroke()
		fill(173,66,37,o1)   
    
  beginShape()
  vertex(216,245)
  vertex(235,235)
  vertex(235,378)
  vertex(223,366)
  vertex(216,373)
  endShape(CLOSE)
    
  beginShape()
  vertex(267,234)
  vertex(287,243)
  vertex(287,389)
  vertex(280,382)
  vertex(267,395)
  endShape(CLOSE)
    

    
    //Jeans
    noStroke()
    fill(35,86,166,o1)
     beginShape()
  vertex(183,579)
  vertex(199,423)
  vertex(309,423)
  vertex(326,579)
  vertex(282,579)
  vertex(269,443)
  vertex(239,443)
  vertex(227,579)
  endShape(CLOSE)
    
    //Tenis
    fill(100,100,100,o1)
  rect(162,583,65,27,50,0,0,0)
  rect(282,583,65,27,0,50,0,0)
  
 //Transicion ropa
    o1=o1+1
  }
  
  //De 11am A 5pm el personaje usa camiseta, jeans, tenis y gafas de sol h>=11 && h<17
  if(h>=11 && h<17){
     //Camiseta
    noStroke()
    fill(202,220,71,o2)
         beginShape()
  vertex(199,423)
  vertex(199,285)
    vertex(169,273)
    vertex(181,240)
  vertex(204,250)
  vertex(241,233)
    vertex(252,258)
  vertex(263,233)
  vertex(304,250)
    vertex(324,242)
    vertex(333,276)
  vertex(309,285)
  vertex(309,423)
  endShape(CLOSE)
    
  
    //Jeans
    noStroke()
    fill(35,86,166,o2)
     beginShape()
  vertex(183,579)
  vertex(199,423)
  vertex(309,423)
  vertex(326,579)
  vertex(282,579)
  vertex(269,443)
  vertex(239,443)
  vertex(227,579)
  endShape(CLOSE)
    
    
    //Gafas de sol
    stroke(1)
    strokeWeight(1)
    line(194,154,218,168)
    line(283,168,309,154)
    strokeWeight(4)
    line(230,164,271,164)
      stroke(100)
    strokeWeight(1)
    fill(1)
    rect(217,155,25,25,10)
    rect(257,155,25,25,10)
    
    //Tenis
    fill(100,100,100,o2)
  rect(162,583,65,27,50,0,0,0)
  rect(282,583,65,27,0,50,0,0)
    
    //Transicion ropa
    o2=o2+1
  }
  
   //De 5pm A 7pm el personaje usa camiseta, jeans, tenis y chaqueta h>=17 && h<19 
  if(h>=17 && h<19 ){
   //Camiseta
    noStroke()
    fill(202,220,71,o3)
         beginShape()
  vertex(199,423)
  vertex(199,285)
    vertex(169,273)
    vertex(181,240)
  vertex(204,250)
  vertex(241,233)
    vertex(252,258)
  vertex(263,233)
  vertex(304,250)
    vertex(324,242)
    vertex(333,276)
  vertex(309,285)
  vertex(309,423)
  endShape(CLOSE)
    
    //Chaqueta
    noStroke()
		fill(1,1,1,o3)   
    
  beginShape()
  vertex(199,423)
  vertex(199,285)
    vertex(71,233)
    vertex(83,200)
  vertex(204,250)
  vertex(241,233)
  vertex(230,260)
  vertex(230,423)
  endShape(CLOSE)
    
   beginShape()
  vertex(263,233)
  vertex(304,250)
    vertex(423,200)
    vertex(438,237)
  vertex(309,285)
  vertex(309,423)
    vertex(277,423)
    vertex(277,260)
  endShape(CLOSE)
    
 
    //Jeans
    noStroke()
    fill(35,86,166,o3)
     beginShape()
  vertex(183,579)
  vertex(199,423)
  vertex(309,423)
  vertex(326,579)
  vertex(282,579)
  vertex(269,443)
  vertex(239,443)
  vertex(227,579)
  endShape(CLOSE)
    

    
    //Tenis
    fill(100,100,100,o3)
  rect(162,583,65,27,50,0,0,0)
  rect(282,583,65,27,0,50,0,0)
    
    //Transicion ropa
  o3=o3+1
  }
  
  //De 7pm A 10pm el personaje usa camiseta y pantaloneta h>=19 && h<22
  if(h>=19 && h<22){
    
    //Camiseta
    noStroke()
    fill(202,220,71,o4)
         beginShape()
  vertex(199,423)
  vertex(199,285)
    vertex(169,273)
    vertex(181,240)
  vertex(204,250)
  vertex(241,233)
    vertex(252,258)
  vertex(263,233)
  vertex(304,250)
    vertex(324,242)
    vertex(333,276)
  vertex(309,285)
  vertex(309,423)
  endShape(CLOSE)
    
    
    
    //Pantaloneta
        noStroke()
    fill(137,118,88,o4)
     beginShape()
  vertex(189,522)
  vertex(199,423)
  vertex(309,423)
  vertex(320,522)
  vertex(277,522)
  vertex(269,443)
  vertex(239,443)
  vertex(233,522)
  endShape(CLOSE)
    
     //Transicion ropa
    o4=o4+1
  }
    
}