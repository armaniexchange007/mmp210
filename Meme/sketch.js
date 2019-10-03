// meme version 1 10.3.19//

var img;

function preload() {
	img = loadImage("baby.jpeg");
    
}
function setup() {
 var canvas = createCanvas (640, 400); 
    canvas.drawingContext.miterLimit = 2; // fix for stroke edges
	background(254);
    

}

function draw(){
    background("white")
    textSize(100);
    text("why", 20, 100);
    
    
    
   
    image(img,0,0, width, height,);
    
}