var bg, sleep, brush, gym, eat, bath, move;
var astronaut;

function preload() {
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png", "images/gym1.png", "images/gym2.png", "images/gym2.png");
  eat = loadAnimation("images/eat1.png", "images/eat1.png", "images/eat1.png", "images/eat2.png", "images/eat2.png", "images/eat2.png");
  bath = loadAnimation("images/bath1.png", "images/bath1.png", "images/bath1.png", "images/bath2.png", "images/bath2.png", "images/bath2.png");
  move = loadAnimation("images/move.png", "images/move.png", "images/move1.png", "images/move1.png");
}

function setup() {
  createCanvas(800, 400);
  
  astronaut = createSprite(400,300);
  astronaut.addAnimation("s",sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(bg);
  var edges = createEdgeSprites();
  astronaut.bounceOff(edges);

  textSize(20);
  fill("white")
  text("Instructions:",20, 35);
  textSize(15);
  text("Up Arrow => Brushing",20, 55);
  text("Down Arrow => Gymming",20, 70);
  text("Left Arrow => Eating",20, 85);
  text("Right Arrow => Bathing",20, 100);
  text("M key = Moving",20, 115);

  if(keyDown("up")){
    console.log("Up");
    astronaut.addAnimation("br",brush);
    astronaut.changeAnimation("br");
    astronaut.x = 350;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }

  if(keyDown("down")){
    console.log("Down");
    astronaut.addAnimation("g",gym);
    astronaut.changeAnimation("g");
    astronaut.x = 700;
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }


  if(keyDown("left")){
    console.log("Left");
    astronaut.addAnimation("e",eat);
    astronaut.changeAnimation("e");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }

  if(keyDown("right")){
    console.log("Right");
    astronaut.addAnimation("b",bath);
    astronaut.changeAnimation("b");
    astronaut.x = 600;
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")){
    astronaut.addAnimation("m", move);
    astronaut.changeAnimation("m");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

  drawSprites();
}