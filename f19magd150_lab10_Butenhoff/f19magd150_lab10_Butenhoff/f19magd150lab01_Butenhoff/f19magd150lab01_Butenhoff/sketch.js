function setup() {
	createCanvas(1000,1000);
	background(0);
	/*This section of code creates the canvas on which 
	the drawing will be drawn on. I set the bacground color to black because 
	I wanted to depict a city scape at night.*/
}

function draw() {
	ellipseMode(CENTER);
	fill(255);
	stroke(1)
	strokeWeight(1);
	ellipse(800,200,300,300);
	/*This ellipse is the moon in my drawing of a city scape.*/
	
	noFill();
	ellipse(870,280,70,70);
	/*This ellipse is a crater on the moon, it has no fill so you can see 
	through it to the color of the moon.*/
	
	fill(255);
	strokeWeight(30)
	stroke(1)
	point(750,150);
	/*This point is another crater than the moon.*/
	
	strokeWeight(45)
	point(780,120);
	/*This point is also another crater on the moon, it is a different
	size and position of the other point to give it a more realistic feel*/
	
	rectMode(CORNERS);
	fill(200);
	strokeWeight(1);
	rect(15,975,220,400);
	/*This is the left most building. I built the buildings in corner mode because that 
	is what made the most sense to me when positioning them on the canvas.*/
	
	rectMode(CENTER);
	fill(200);
	rect(117.5,365,150,70);
	/*This is the bottom portion of the spire, I built the pieces of the spire in
	center mode because it allowed for easier postioning of the shape in relation to the
	building they were on.*/
	
	rect(117.5,318.5,100,25)
	/*This is the middle portion of the spire*/
	
	fill(100);
	rect(117.5,200,20,212.5);
	/*This is the tall part of the spire. I put it in a different shade to draw
	attention to it in comparision to the rest of the building*/
	
	strokeWeight(1)
	line(117.5,975,117.5,400)
	/*This line divides the first builing in half vertically, in order to make it look
	more interesting*/
	
	rectMode(CORNERS);
	
	fill(150);
	strokeWeight(1);
	rect(225,975,530,235);
	/*This is the second building from the left. The buildings are in different sized rectangles
	with differnt shadesto give the eye something different to look at when 
	looking over the image.*/
	
	fill(100);
	strokeWeight(1);
	rect(537,975,700,380);
	/*This is the second building from the right.*/
	
	strokeWeight(4);
	line(545,580,690,580);
	/*This line adds some decoration to the second building from the right.*/
	
	fill(210);
	strokeWeight(1);
	rect(707,975,983,505);
	/*This is the building on the far right*/
}