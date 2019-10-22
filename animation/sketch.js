function setup() {
    createCanvas(500, 400);
}


var x = 100;
var speed = 5;
function draw() {
    background("Red");
    fill(300, 200);
    textSize(50);
    textFont("Comic Sans MS");
	text("Dajon", x, 50, 50);
    x += speed;
    text("X",  200, 200);
    
    
    text("Riley", x, 300, 300);
	if (x > width || x < 0) {
		speed *= -2;
	}
}