var starImg,bgImg;
var star, starBody;
var fairy,fairyImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{ 
 //loads images and sound
 starImg = loadImage("images/star.png");
 bgImg = loadImage("images/starNight.png");
 fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
 music = loadSound("sound/JoyMusic.mp3");
}

function setup() {
 createCanvas(800, 750);
 // plays the background sound
 music.play();
 //create fairy sprite
 fairy= createSprite(130,520);
 fairy.addAnimation("fairy",fairyImg);
 fairy.scale = 0.2;
 //create star sprite
 star = createSprite(650,30);
 star.addImage(starImg);
 star.scale = 0.2;
 engine = Engine.create();
 world = engine.world;
 starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
 World.add(world, starBody);
 Engine.run(engine);
}

function draw() {
 //adding background	
 background(bgImg);
 star.x= starBody.position.x 
 star.y= starBody.position.y 
 console.log(star.y);
 if(star.y > 480 && starBody.position.y > 480){
     Matter.Body.setStatic(starBody,true);
 }
 drawSprites();
}

function keyPressed() {
 //stars falls when down arrow is pressed
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(starBody,false); 
}
//moves fairy to left if left arrow is pressed
if(keyCode === LEFT_ARROW){
	 fairy.x = fairy.x - 20;
}
//moves fairy to right if right arrow is pressed
if(keyCode === RIGHT_ARROW){
	fairy.x = fairy.x + 20;
}
	
}
