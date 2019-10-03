// self portrait 

var x = 300;
var y = 200;
var faceSize = 300;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(300, 0, 255);
    
    square(x - 200, y - 200)
    
    fill("RED");
    noStroke();
    ellipse(x, y, faceSize, faceSize/2); // face
    
    
    stroke("BLACK");
    noFill();
    strokeWeight(5);
    fill(250, 100, 100, 100);
   
    circle(mouseX,mouseY, pmouseX, pmouseY); // left eye
    triangle(
        x - 100, y - 100, 
        x + 250, y - 50, 
        x + 200, y - 100
    ); // right eye
    
    
    
     // mouth
}
