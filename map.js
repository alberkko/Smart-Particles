var population;
var jeta = 600;
var jetaP;
var count = 0;
var target;
var forca_max = 1;

var r1x = 400;
var r1y = 200;
var r1w = 600;
var r1h = 10;

var r2x = 000;
var r2y = 400;   
var r2w = 600;
var r2h = 10;

function setup() {
  createCanvas(1000, 700);
  population = new Population();
  jetaP = createP();
  target = createVector(width / 2, 50);

}   

function draw() {
  background(16);
  population.run();
  jetaP.html(count);

  count++;
  if (count == jeta) {
    population.evaluate();
    population.selection();
    count = 0;
  }

  fill(255);
  rect(r1x, r1y, r1w, r1h);
  rect(r2x, r2y, r2w, r2h);
  ellipse(target.x, target.y, 16, 16);
}