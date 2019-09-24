// self portrait 
function setup() {
	createCanvas(200, 200);
	background(220);

	var eyeSize = 25;
	var faceColor = "plum";
	
	noStroke();
	fill(faceColor);
	ellipse(100, 100, 100); // face

	fill("yellow");
	ellipse(75, 100, eyeSize); // right eye
	ellipse(125, 100, eyeSize); // left eye

	fill(faceColor);
	ellipse(75, 100, eyeSize / 2); // right pupil
	ellipse(125, 100, eyeSize / 2); // left pupil

	noFill();
	stroke("#ffddff");
	strokeWeight(4);
	rect(75, 125, 50, 10, 10); // mouth	
}
