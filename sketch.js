var touchB = false;//tried to make touch mouse but failed
var touchX;
var touchY;
let button;
let button2;

function mousePressed() { touchStarted(); }
function mouseDragged() { touchMoved(); }
function mouseReleased() { touchEnded(); }
function touchStarted() { }
function touchMoved() { }
function touchEnded() { }

let mass = 30; //size of the balls
let rodlength = 100; //length of the rod/string
let a1, a2; //angular momentum of the balls at the end
let angle1, angle2;
let gravity = 9.81; //gravitational constant
let v1 = 0; // initial velocity of farrightball ball
let v2 = 0; //initial velocity of far end farleftball ball
let x=0, y=0, x2=0, y2=0;
let time = 0;
let position = true;


function setup() {
  createCanvas(400, 400);
  textSize(32);
  textAlign(RIGHT);
  angle1 = PI / 4;
  angle2 = PI / 4;
  button = createButton('increase mass')
  button.position(420,480)
  button.mousePressed(inc_mass);
  button2 = createButton('decrease mass')
  button2.position(420,500)
  button2.mousePressed(dec_mass);
}

function inc_mass() {
  mass++;
  if (mass >= 100) {
    mass = 100;
  }
}

function dec_mass() {
  mass--;
  if (mass <= 1) {
    mass = 1;
  }
}

function farleftball() {

  x22 = rodlength * sin(angle2);
  y2 = rodlength * cos(angle2);

  if (x22 <= 0) {
    x2 = x22;
  } else {
    y2 = rodlength;
  }
}


function farrightball() {
  x1 = rodlength * sin(angle1);
  y = rodlength * cos(angle1);

  if (x1 >= 0) {
    x = x1;
  } else {
    y = rodlength;
   position = false;
  }
}


function draw() {
  background(220);


  fill(0, 102, 153)
  text('Current Mass: ' + parseInt(mass) + ' grams', 375, 32)
  if (position == true) {
    fx = 140;
    fy = 100+rodlength;
    line(140, 100, fx, fy);
    ellipse(fx, fy, mass, mass);
  }

  farleftball();
  farrightball();

  translate(230, 100);
  line(0, 0, x, y);
  ellipse(x, y, mass, mass);

  translate(-mass, 0); // duplicating the nonmoving balls
  line(0, 0, 0, rodlength);
  ellipse(0, rodlength, mass, mass);

  translate(-mass, 0);
  line(0, 0, 0, rodlength);
  ellipse(0, rodlength, mass, mass);

  translate(-mass, 0);
  line(0, 0, 0, rodlength);
  ellipse(0, rodlength, mass, mass);

  translate(-mass, 0);
  line(0, 0, x2, y2);
  ellipse(x2, y2, mass, mass);

  a1 = -gravity / rodlength * sin(angle1); //Newton's Second Law for rotations
  v1 += a1;
  angle1 += v1;

  a2 = -gravity / rodlength * sin(angle2);
  v2 += a2;
  angle2 += v2;


}
