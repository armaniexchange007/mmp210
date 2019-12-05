

function setup() {
    createCanvas(300, 300);
}


function draw() {
	background(220);
	rectMode(CENTER);

	// AND
	if (mouseIsPressed && mouseX > width/2) {
		textSize(100);
        text("Dajon", 20, 250);
	}	
}