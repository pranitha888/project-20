var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;
var bgImg;

function preload() {
    //load the images here
     bgImg = loadImage("images/garden.png");

    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadImage("images/cat4.png")

    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(500,600,20,20);
    cat .addAnimation("sitting",catImg2);
    cat.scale=0.2;

    mouse = createSprite(100,600,20,20);
    mouse .addAnimation("sit",mouseImg2);
    mouse.scale=0.15;
}
function draw() {
    
    background(bgImg);


    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width- mouse.width)/2){
        cat.velocityX=0;
        cat .addAnimation("lastImg",catImg3);
        cat.x=300;
        cat.scale=0.2;
        cat.changeAnimation("lastImg");

        mouse . addAnimation("mouseLastImg",mouseImg3);
        mouse.scale=0.15;
        mouse . changeImage("mouseLastImg")
        
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("running",catImg2);
    cat.changeAnimation("running");
    
    mouse.addAnimation("run",mouseImg2);
    mouse.frameDelay=25;
    mouse.changeAnimation("run")
}

}
