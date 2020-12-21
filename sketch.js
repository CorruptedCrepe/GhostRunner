var door, doorImage;
var climber, climberImage;
var invisClimbler, invisClimberImage;
var tower, towerImage;
var ghost, ghostImage;
var doorGroup, climberGroup, invisClimberGroup

function preload () {
  towerImage = loadImage ("tower.png");
  ghostImage = loadImage ("ghost-jumping.png");
  doorImage = loadImage ("door.png");
  climberImage = loadImage ("climber.png");
  
}

function setup () {
  createCanvas (800, 800);
  tower = createSprite (300,300);
  tower.addImage ("asdf", towerImage);
  tower.velocityY = 1;
  
  ghost = createSprite (200, 200, 50, 50);
  ghost.addImage (";lkj", ghostImage);
  ghost.scale = 0.3;
  
   climberGroup = new Group ()
  invisClimberGroup = new Group ()
  doorGroup = new Group ()
}

function draw () {
  if (tower.y > 600) {
    tower.y = 400
  }
  if (keyDown ("SPACE")) {
    ghost.velocityY = -1
  }
  ghost.velocityY = ghost.velocityY +0.5;
  spawnDoor ();
 
 if (invisClimber.istouching (ghost) || (ghost.y > 800)) {
   
 }
  drawSprites ();
}

function spawnDoor () {
  if (frameCount%240 === 0) {
    
  
  door = createSprite (200, -50);
  door.addImage ("poiu", doorImage);
  door.x = Math.round (random(50,400));
  door.velocityY = 1;
    doorGroup.add(door);
  
    climber = createSprite (200, 10);
    climber.addImage ("qwer", climberImage)
    climber.x = door.x
    climber.velocityY = 1
    climberGroup.add(climber);
    
    invisClimber = createSprite (200, 15, climber.width, 2);
    invisClimber.x = climber.x;
    invisClimber.debug = true;
    invisClimber.velocityY = 1;
    invisClimberGroup.add(invisClimber);
    

}}
}