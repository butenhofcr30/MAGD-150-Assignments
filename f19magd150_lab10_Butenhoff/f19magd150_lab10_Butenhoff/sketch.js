//This sketch creates a virtual "movie theater" that plays a video when the user clicks.
var fball;
var stats;

function setup() {
	createCanvas(1000,1000,WEBGL);

	fball = createVideo(['American Football - 5493.mp4']);
	fball.hide();
	stats = loadTable("manning.csv");
}

function draw() {

	background(0);

	ambientLight(150);

	pointLight(255,255,255,0,0,0);

	let camX = map(mouseX,0,width,-1000,0);
	let camY = map(mouseY,0,height,-1000,0);

	camera(camX,camY,(height/2)/tan(PI/6),0,0,0,0,1,0);
	//This camera moves around the center of the sketch. It is largely taken from The Coding Train "18.5: Camera and Perspective - WebGL and p5.js Tutorial"

	ambientMaterial(250);
	texture(fball);
	box(500,200);
	//The "movie screen"


	ambientMaterial(255,0,0);
	beginShape();
	vertex(-250,-250);
	vertex(250,-250);
	vertex(300,-200);
	vertex(350,0);
	vertex(300,200);
	vertex(250,250);
	vertex(-250,250);
	vertex(-300,200);
	vertex(-350,0);
	vertex(-300,-200);
	endShape(CLOSE);
	//The wall the screen is on

	push();
	translate(0,250,0);
	rotateX(1.57);
	normalMaterial();
	plane(500,500);
	pop();
	//The floor of the movie theater

}

function mousePressed(){
	fball.loop();
}
//Plays the "movie on the screen"