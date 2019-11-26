var x = 850;
var y = 200;
var w = 100;
var h = 80;
//Position of rectangle button

var cx = 900;
var cy = 400;
var csize = 100
var rad = csize/2
//Position of circle button

var ex,ey;
var xspeed;
var yspeed;
//Position and speed of moving ellipse


var click = false;
var press = false;
//Variables that allow the buttons to work 

function setup() {
	
	createCanvas(1000,1000);
	
	ex=500;
	ey=500;
	xspeed=3;
	yspeed=3;
	////Position and speed of moving ellipse
	
}

function draw() {
	
	var disx = cx-mouseX;
	var disy = cy-mouseY;
	//Distance between the mouse and the center of the circle button
	
	background(0);
	//Default black background
	
	if(click){
	background(34,171,255,100);
	} //When the rectangle button is clicked the background changes to blue
	
	if(press){
	ellipse(ex,ey,50,50);
	ex += xspeed
	ey += yspeed
	//Draws an ellipse
	
	if(ex-25 <=85 || ex+25 >= 800){
		xspeed *= -1;
	} //If the circle moves too far left or right it 'bounces' back
	
	if(ey-25 <=100 || ey+25 >= 900){
		yspeed *= -1;
	} //If the circle moves too far up or down it 'bounces' back
	} //When the circle button is pressed a circle moves around the screen

		
	fill(45);
	beginShape();
		vertex(0,0);
		vertex(1000,0);
		vertex(1000,1000);
		vertex(0,1000);
	beginContour();
		vertex(85,100);
		vertex(85,900);
		vertex(800,900);
		vertex(800,100);
		vertex(442.5,70);
	endContour();
	endShape(); //The 'screen' of the 'tv'
	
	fill(115,17,14,100);
	if (mouseX>x && mouseX<x+w && mouseY>y && mouseY<y+h){
		fill(100,38,31,39)
	}//Greys out the button when it is hovered over
	rect(x,y,w,h);
	//Rectangle button
	
	fill(255);
	textSize(25);
	text("POWER", x,y+(h/4),w,h);
	//The rectangle button is the 'Power' button
	
	fill(115,17,14,100);
	if (sqrt(sq(disx) + sq(disy)) < csize/2){
		fill (100,38,31,39)
	} //Greys out the button when it is hovered over
	ellipse(cx,cy,csize,csize)
	//Circular button 
	
	fill(255);
	textSize(15);
	text("PLAY", x+30,cy,csize,csize);
	//The circular button is the 'Play' button
}

function mousePressed(){
	
	var disx = cx-mouseX;
	var disy = cy-mouseY;
	//Distance between the mouse and the center of the circle button
	
	if (mouseX>x && mouseX<x+w && mouseY>y && mouseY<y+h){
		click = !click;
		//If the mouse is clicked inside the square 'click' becomes true
	} else if (sqrt(sq(disx) + sq(disy)) < csize/2){
		press = !press;
		//If the mouse is clicked inside the circle 'press' becomes true
	}
}