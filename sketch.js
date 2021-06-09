var canvas, bg
var together
var tom, tomimage1, tomimage2, jerry, jerryimage1, jerryimage2
function preload() {
    //load the images here
    bg = loadImage("images/garden.png")
    tomimage1 = loadAnimation("images/cat1.png")
    tomimage2 = loadAnimation("images/cat2.png","images/cat3.png")
    tomimage3 = loadAnimation("images/cat4.png")
    jerryimage1 = loadAnimation("images/mouse1.png")
    jerryimage2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    jerryimage3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600)
    tom.addAnimation("tomsleeping",tomimage1)
    tom.scale = 0.2
    jerry = createSprite(200,600)
    jerry.addAnimation("jerrystanding",jerryimage1)
    jerry.scale = 0.15

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width) / 2)
    {
        tom.velocityX = 0
        tom.addAnimation("tomlastimage",tomimage3)
        tom.x = 300
        tom.scale = 0.2
        tom.changeAnimation("tomlastimage")
        jerry.addAnimation("jerrylastimage",jerryimage3)
        jerry.scale = 0.15
        jerry.changeAnimation("jerrylastimage")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW)
  {
      tom.velocityX = -5
      tom.addAnimation("tomrunning",tomimage2)
      tom.changeAnimation("tomrunning")
      jerry.addAnimation("jerryteasing",jerryimage2)
      jerry.frameDelay = 25
      jerry.changeAnimation("jerryteasing")
  }


}
