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
var ua = 0
var l = 0

function setup() {
createCanvas(windowWidth, windowHeight);
background(7, 15, 40);



fill(255)

}

function draw() {

//Estrellas del fondo
background(5, 10, 25)
noStroke()
fill(255)

ellipse((x + 10) * width / 900, (y) * height / 600, (s) * width / 900, (s))
ellipse((x + 50) * width / 900, (y + 30) * height / 600, (s - 5) * width / 900, (s - 5) * height / 600)
ellipse((x + 200) * width / 900, (y + 150) * height / 600, (s - 4) * width / 900, (s - 4) * height / 600)
ellipse((x + 20) * width / 900, (y + 400) * height / 600, (s) * width / 900, (s) * height / 600)
ellipse((x + 600) * width / 900, (y + 300) * height / 600, (s) * width / 900, (s) * height / 600)
ellipse((x + 600) * width / 900, (y + 500) * height / 600, (s - 5) * width / 900, (s - 5) * height / 600)
ellipse((x + 200) * width / 900, (y + 150) * height / 600, (s - 4) * width / 900, (s - 4) * height / 600)
ellipse((x + 100) * width / 900, (y + 500) * height / 600, (s - 2) * width / 900, (s - 2) * height / 600)
ellipse((x + 300) * width / 900, (y + 220) * height / 600, (s - 4) * width / 900, (s - 4) * height / 600)
ellipse((x + 400) * width / 900, (y + 30) * height / 600, (s - 5) * width / 900, (s - 5) * height / 600)
ellipse((x + 200) * width / 900, (y + 30) * height / 600, (s - 4) * width / 900, (s - 4) * height / 600)
ellipse((x + 20) * width / 900, (y + 400) * height / 600, (s) * width / 900, (s) * height / 600)
ellipse((x + 700) * width / 900, (y + 100) * height / 600, (s) * width / 900, (s) * height / 600)
ellipse((x + 65) * width / 900, (y + 326) * height / 600, (s - 5) * width / 900, (s - 5) * height / 600)
ellipse((x + 450) * width / 900, (y + 259) * height / 600, (s - 4) * width / 900, (s - 4) * height / 600)
ellipse((x + 322) * width / 900, (y + 109) * height / 600, (s - 2) * width / 900, (s - 2) * height / 600)
ellipse((x + 222) * width / 900, (y + 276) * height / 600, (s - 4) * width / 900, (s - 4) * height / 600)

ellipse((x + 248) * width / 900, (y + 30) * height / 600, (s - 5) * width / 900, (s - 5) * height / 600)
ellipse((x + 670) * width / 900, (y + 150) * height / 600, (s - 4) * width / 900, (s - 4) * height / 600)
ellipse((x + 20) * width / 900, (y + 400) * height / 600, (s) * width / 900, (s) * height / 600)
ellipse((x + 600) * width / 900, (y + 300) * height / 600, (s) * width / 900, (s) * height / 600)
ellipse((x + 600) * width / 900, (y + 500) * height / 600, (s - 5) * width / 900, (s - 5) * height / 600)
ellipse((x + 134) * width / 900, (y + 150) * height / 600, (s - 4) * width / 900, (s - 4) * height / 600)
ellipse((x + 657) * width / 900, (y + 500) * height / 600, (s - 2) * width / 900, (s - 2) * height / 600)
ellipse((x + 512) * width / 900, (y + 220) * height / 600, (s - 4) * width / 900, (s - 4) * height / 600)
ellipse((x + 556) * width / 900, (y + 30) * height / 600, (s - 5) * width / 900, (s - 5) * height / 600)
ellipse((x + 746) * width / 900, (y + 30) * height / 600, (s - 4) * width / 900, (s - 4) * height / 600)
ellipse((x + 225) * width / 900, (y + 400) * height / 600, (s) * width / 900, (s) * height / 600)
ellipse((x + 800) * width / 900, (y + 100) * height / 600, (s) * width / 900, (s) * height / 600)
ellipse((x + 165) * width / 900, (y + 326) * height / 600, (s - 5) * width / 900, (s - 5) * height / 600)
ellipse((x + 123) * width / 900, (y + 259) * height / 600, (s - 4) * width / 900, (s - 4) * height / 600)
ellipse((x + 873) * width / 900, (y + 109) * height / 600, (s - 2) * width / 900, (s - 2) * height / 600)
ellipse((x + 299) * width / 900, (y + 276) * height / 600, (s - 4) * width / 900, (s - 4) * height / 600)


ellipse((p + 50) * width / 900, (y + 30) * height / 600, (s - 5) * width / 900, (s - 5) * height / 600)
ellipse((p + 200) * width / 900, (y + 200) * height / 600, (s - 4) * width / 900, (s - 4) * height / 600)
ellipse((p + 20) * width / 900, (y + 400) * height / 600, (s) * width / 900, (s) * height / 600)
ellipse((p + 600) * width / 900, (y + 300) * height / 600, (s) * width / 900, (s) * height / 600)
ellipse((p + 600) * width / 900, (y + 500) * height / 600, (s - 5) * width / 900, (s - 5) * height / 600)
ellipse((p + 200) * width / 900, (y + 150) * height / 600, (s - 4) * width / 900, (s - 4) * height / 600)
ellipse((p + 100) * width / 900, (y + 500) * height / 600, (s - 2) * width / 900, (s - 2) * height / 600)
ellipse((p + 300) * width / 900, (y + 220) * height / 600, (s - 4) * width / 900, (s - 4) * height / 600)
ellipse((p + 400) * width / 900, (y + 30) * height / 600, (s - 5) * width / 900, (s - 5) * height / 600)
ellipse((p + 200) * width / 900, (y + 30) * height / 600, (s - 4) * width / 900, (s - 4) * height / 600)
ellipse((p + 20) * width / 900, (y + 400) * height / 600, (s) * width / 900, (s) * height / 600)
ellipse((p + 700) * width / 900, (y + 100) * height / 600, (s) * width / 900, (s) * height / 600)
ellipse((p + 65) * width / 900, (y + 326) * height / 600, (s - 5) * width / 900, (s - 5) * height / 600)
ellipse((p + 450) * width / 900, (y + 259) * height / 600, (s - 4) * width / 900, (s - 4) * height / 600)
ellipse((p + 322) * width / 900, (y + 109) * height / 600, (s - 2) * width / 900, (s - 2) * height / 600)
ellipse((p + 222) * width / 900, (y + 276) * height / 600, (s - 4) * width / 900, (s - 4) * height / 600)

ellipse((p + 248) * width / 900, (y + 300) * height / 600, (s - 5) * width / 900, (s - 5) * height / 600)
ellipse((p + 670) * width / 900, (y + 150) * height / 600, (s - 4) * width / 900, (s - 4) * height / 600)
ellipse((p + 20) * width / 900, (y + 400) * height / 600, (s) * width / 900, (s) * height / 600)
ellipse((p + 600) * width / 900, (y + 300) * height / 600, (s) * width / 900, (s) * height / 600)
ellipse((p + 600) * width / 900, (y + 500) * height / 600, (s - 5) * width / 900, (s - 5) * height / 600)
ellipse((p + 134) * width / 900, (y + 150) * height / 600, (s - 4) * width / 900, (s - 4) * height / 600)
ellipse((p + 657) * width / 900, (y + 500) * height / 600, (s - 2) * width / 900, (s - 2) * height / 600)
ellipse((p + 512) * width / 900, (y + 220) * height / 600, (s - 4) * width / 900, (s - 4) * height / 600)
ellipse((p + 556) * width / 900, (y + 30) * height / 600, (s - 1) * width / 900, (s - 1) * height / 600)
ellipse((p + 746) * width / 900, (y + 30) * height / 600, (s - 4) * width / 900, (s - 4) * height / 600)
ellipse((p + 225) * width / 900, (y + 400) * height / 600, (s) * width / 900, (s) * height / 600)
ellipse((p + 800) * width / 900, (y + 100) * height / 600, (s) * width / 900, (s) * height / 600)
ellipse((p + 165) * width / 900, (y + 326) * height / 600, (s - 5) * width / 900, (s - 5) * height / 600)
ellipse((p + 123) * width / 900, (y + 259) * height / 600, (s - 4) * width / 900, (s - 4) * height / 600)
ellipse((p + 873) * width / 900, (y + 109) * height / 600, (s - 6) * width / 900, (s - 6) * height / 600)
ellipse((p + 299) * width / 900, (y + 276) * height / 600, (s - 4) * width / 900, (s - 4) * height / 600)




//COHETE
//Fueguito del cohete
noStroke()
fill(249, 166, 0)
triangle((650 + w + l) * width / 900, (300 - u - b - ua) * height / 600, (550 + w + l) * width / 900, (350 - u - b - ua) * height / 600, (650 + w + l) * width / 900, (400 - u - b - ua) * height / 600)
triangle((700 + w + l) * width / 900, (280 - u - b - ua) * height / 600, (600 + w + l) * width / 900, (350 - u - b - ua) * height / 600, (700 + w + l) * width / 900, (420 - u - b - ua) * height / 600)
//Alas del cohete
noStroke()
fill(100)
triangle((550 + w + l) * width / 900, (250 - u - b - ua) * height / 600, (450 + w + l) * width / 900, (350 - u - b - ua) * height / 600, (550 + w + l) * width / 900, (450 - u - b - ua) * height / 600)
triangle((600 + w + l) * width / 900, (320 - u - b - ua) * height / 600, (500 + w + l) * width / 900, (350 - u - b - ua) * height / 600, (600 + w + l) * width / 900, (380 - u - b - ua) * height / 600)
//Cuerpo
noStroke()
fill(200)
rect((350 + w + l) * width / 900, (300 - u - b - ua) * height / 600, 220 * width / 900, 100 * height / 600)
fill(198, 34, 43)
//Nariz Cohete
triangle((350 + w + l) * width / 900, (300 - u - b - ua) * height / 600, (250 + w + l) * width / 900, (350 - u - b - ua) * height / 600, (350 + w + l) * width / 900, (400 - u - b - ua) * height / 600)
//Ventanas
stroke(1)
strokeWeight(3)
fill(101, 200, 239)
ellipse((400 + w + l) * width / 900, (350 - u - b - ua) * height / 600, 50 * width / 900, 50 * height / 600)
ellipse((460 + w + l) * width / 900, (350 - u - b - ua) * height / 600, 50 * width / 900, 50 * height / 600)
ellipse((520 + w + l) * width / 900, (350 - u - b - ua) * height / 600, 50 * width / 900, 50 * height / 600)



//Para que el cohete entre
if (frameCount > 80) {
w = w - vel
}
//Para que el cohete se detenga
if (w < 10 * width / 900) {
w = 0 * width / 900
}
//Para que el cohete suba y salga el planeta
if (frameCount > 190) {

u = u + velss
stroke(196, 30, 94)
strokeWeight(15)
fill(216, 0, 247)
ellipse((-400 + f) * width / 900, 500 * height / 600, 300 * width / 900, 300 * height / 600)
noStroke()
fill(211, 13, 74, 90)
ellipse((-400 + f) * width / 900, 500 * height / 600, 400 * width / 900, 400 * height / 600)
f = f + vel
}
//Para que el cohete se detenga
if (u > 200 * height / 600) {
u = 200 * height / 600
}
//Para que el cohete baje y salga el planeta
if (frameCount > 300) {

b = b - velss
stroke(196, 30, 94)
strokeWeight(15)
fill(229, 234, 218)
ellipse((-400 + f1) * width / 900, 100 * height / 600, 300 * width / 900, 300 * height / 600)
stroke(138, 186, 32)
fill(129, 239, 55, 50)
ellipse((-400 + f1) * width / 900, 100 * height / 600, 400 * width / 900, 400 * height / 600)
f1 = f1 + vel
}
//Para que el cohete pare
if (frameCount > 360) {
b = -300

}
//para que el cohete suba
if (frameCount > 400) {
ua = ua + velss
}
//Para que el cohete se detenga
if (ua > 150 * height / 600) {
ua = 150 * height / 600

}
//Para que le salga mas fuego al cohete
if (frameCount > 450) {
noStroke()
fill(249, 166, 0)
triangle((750 + w + l) * width / 900, (260 - u - b - ua) * height / 600, (650 + w + l) * width / 900, (350 - u - b - ua) * height / 600, (750 + w + l) * width / 900, (440 - u - b - ua) * height / 600)
}
//Para que el Cohete acelere 
if (frameCount > 460) {
l = l - vels / 2
}
//Para que el fondo se mueva mas rapido
if (frameCount > 460) {
vel = 40
}
//Para cerrar con fondo Blanco
if (frameCount > 580) {
background(255)
}



//Para que las dos tandas de estrellas se muevan en el fondo
p = p + vel  
x = x + vel
//Para reiniciar el movimiento de las estrellas
if (x > width + 10 * width / 900) {
x = -900 * width / 900
}
if (p > width + 10) {
p = -900 * width / 900}
}
