function draw() {
    createCanvas(800,800)
	background("white");
	strokeWeight(2);
	fill("plum");

	var x = mouseX;
	var y = mouseY;
	line(x, y, 0, 0);

	
	circle(x, y, 40);
}