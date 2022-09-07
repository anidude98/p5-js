function setup() {
  createCanvas(400, 400);
  ellipseMode(RADIUS);
  stroke(200)
  n = 1;
  c = 1;
}

function draw() {
  if(n>199 | n<1){ c=c*-1;}
  n=n+c;
  strokeWeight(200-n);
  
  background(155,155,250);
  ellipse(200,200, n);
    
}