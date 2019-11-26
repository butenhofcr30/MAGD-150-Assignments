	var mpressed=0; //a variable necessary for the mousePressed function
	var mpressedState=0; //a variable necessary for the mousePressed function
	var kpressed=0; //a variable necessary for the kPressed function
	var kpressedState=0; //a variable necessary for the kPressed function
	var xpos=0 //a variable that allows the xposition to move
function setup() {
	createCanvas(1000,1000);
}

function draw() {
	
	background(171,9,0); //written in draw so the moving object appears to move instead of re-draw
	
	fill(242,213,143);
	ellipse(width/2,height/2,420,420); //the crust of the pizza
	
	fill(219,18,0);
	ellipse(width/2,height/2,390,390); //the sauce of the pizza
	
	fill(255,255,220); 
	ellipse(width/2,height/2,365,365); //the cheese of the pizza
	
		
	for(let x=0; x<300; x=x+60){
		fill(90,21,0);
		ellipse(380+x,390,35,35);
	} //draws 5 'pepperonis' 60 pixels apart
	
	for(let x=0; x<300; x=x+60){
		fill(90,21,0);
		ellipse(380+x,500,35,35);
	} //draws 5 'pepperonis' 60 pixels apart
	
	for(let x=0; x<300; x=x+60){
		fill(90,21,0);
		ellipse(380+x,610,35,35);
	} //draws 5 'pepperonis' 60 pixels apart
	
	
	if(mpressedState==1){
		line(width/2,(height/2)-210,width/2,(height/2)+210);
	} //'cuts' the pizza in half by drawing a line when the mouse is clicked
	
	if(kpressedState==1){
		line((width/2)-210,height/2,(width/2)+210,height/2);
	} //'cuts' the pizza in half by drawing a line when a key is pressed
	
	if(mpressedState==1&kpressedState==1){
		line(641,661,361,341);
		line(361,661,641,341);
	} //finsishes 'cutting' the pizza after both the mouse is clicked and a key is pressed

	xpos = xpos+2;
	if(xpos>width){
		xpos=0;
	} //resets the xpos to 0 when it reaches the end of the page
	
	fill(242,213,143);
	ellipse(xpos,805,85,85); //the crust of the rolling pizza
	
	fill(219,18,0);
	ellipse(xpos,805,75,75); //the sauce of the rolling pizza
	
	fill(255,255,220);
	ellipse(xpos,805,65,65); //the cheese of the rolling pizza

}
function mousePressed(){
	mpressed=mpressed+1;
	mpressedState=(mpressed%2); //the function of the mouse being pressed
	
}
function keyPressed(){
	kpressed=kpressed+1;
	kpressedState=(kpressed%2); //the function of a key being pressed
}