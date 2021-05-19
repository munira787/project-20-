var bgImg, bg;
var mouse, mouseImg, mouseImg2, mouseImg3;
var cat, catImg, catImg2, catImg3;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catImg = loadAnimation("cat1.png");
    mouseImg = loadAnimation("mouse1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    mouseImg2 = loadAnimation("mouse2.png", "mouse3.png");
    catImg3 = loadAnimation("cat4.png");
    mouseImg3 = loadAnimation("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     cat = createSprite(870, 600);
     cat.addAnimation("sittingCat",catImg);
     cat.scale = 0.2;

     mouse = createSprite(200, 600);
     mouse.addAnimation("standingMouse",mouseImg);
     mouse.scale = 0.15;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
      cat.x = 300;
      cat.velocityx = 0;
      cat.scale = 0.2;
      cat.addAnimation("cathappy",catImg3);
      cat.changeAnimation(catImg3);

      mouse.addAnimation("mousehappy", mouseImg3);
      mouse.changeAnimation(mouseImg3);
      mouse.scale = 0.15;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW) {
      cat.addAnimation("catWalking", catImg2);
        cat.changeAnimation("catWalking");
        cat.velocityX = -5;  
       
       
        mouse.addAnimation("mouseTeasing", mouseImg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.FrameDelay = 25; 

        
    }

}
