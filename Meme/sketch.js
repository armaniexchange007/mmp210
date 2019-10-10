// meme draft//

var img;

function preload() {
    img = loadImage("baby.jpeg");
}

function setup(){
    createCanvas(640, 480);
}

function draw(){
    
    image(img,0,0, width, height);
    textSize(20);
    text("When you ask your mom to bring home HoneyNut Cheerios", 20, 20);
    
    text("and she bring home Cheerios", 20, 460);
}

