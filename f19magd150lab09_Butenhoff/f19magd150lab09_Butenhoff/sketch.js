var dogR;
var dogL;
var puppy;
var bigDog;

function setup() {
	createCanvas(1000,1000);

	soundFormats('wav');

	reverb = new p5.Reverb();

	dogR = loadImage("dog_right.jpg");
	dogL = loadImage("dog_left.jpg");
	puppy = loadSound("puppybark.wav");
	bigDog = loadSound("dogbark.wav");
	//These variables load the image files and sound files into the sketch

}

function draw() {

	dogL.filter(GRAY);
	dogR.filter(GRAY);
	//Filter sets the images to gray-scale.
	dogR.resize(500,1000)
	image(dogR,width/3,0,width,height);
	image(dogL,0,0,width/2,height);
	//These images are meant to represent a dog as a mirror image.
	//It is intended to show an older dog looking in a mirror and seeing a younger version of itself.
	bark();
	//Calls the bark function into the draw function. 

}

function bark() {
	//THe bark function plays a puppy bark if the user clicks the puppy and a dog bark if the user clicks the older dog.
	if (mouseX>width/2 && mouseIsPressed){
		reverb.process(puppy,3,2);
		//Adds an echo to the puppy bark.
		puppy.pan(1);
		//Pans the puppy bark to the right.
		puppy.play();
	} else if (mouseX<width/2 && mouseIsPressed){
		reverb.process(bigDog,3,2);
		//Adds an echo to the dog bark.
		bigDog.pan(-1);
		//Pans the dog bark to the left.
		bigDog.play();
	}

}