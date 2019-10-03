// meme version 1 10.3.19//

var cat;

function preload(){
    cat = loadImage("cat.jpg");
}

function setup() {
 var canvas = createCanvas (640, 400); 
    canvas.drawingContext.miterLimit = 2; // fix for stroke edges
	background(254);
}

function draw(){
    background("white")

   textSize(100);
    text("Hello world", 20, 100);
    
    textSize(20);
    text("MMP CLASS",20, 200);
    
}