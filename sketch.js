var img1,img2,ob1,ob2,ob3,ob4,ob5,ob6,ob7,ob8,ob9,ob10,ob11,ob12,ob13,ob14,ob15,ob16,ob17,ob18,ob19,ob20,ob21;
function preload(){
img1 = loadImage("wp4895721-blackpink-concert-wallpapers.jpg")
  ob2 = loadSound("BLACKPINK - Kill This Love.mp3")
  ob4 = loadSound("BLACKPINK - AS IF ITS YOUR LAST.mp3")
  ob6 = loadSound("Lovesick Girls - BLACKPINK.mp3")
  ob8 = loadSound("DDU DU DDU DU - BLACKPINK.mp3")
  ob10 = loadSound("BLACKPINK - How You Like That M V.mp3")
  ob12 = loadSound("BLACKPINK – BOOMBAYAH (붐바야) (Color Coded Han Rom Eng) by Yankat.mp3")
  ob14 = loadSound("BLACKPINK Pretty Savage (블랙핑크 프리티새비지 가사) Color Coded Han Rom Eng sub.mp3")
  ob16 = loadSound("BLACKPINK - Forever Young (Color Coded).mp3")
  ob18 = loadSound("Don t Know What To Do.mp3")
  ob20 = loadSound("휘파람 (Whistle).mp3")
}

function setup() {
  createCanvas(1000,1000)
 img2 = createSprite(500,500,1000,1000)
  img2.addImage("adding",img1)
  ob1 = createSprite(130,200,40,30)
  ob1.shapeColor = "black"
  ob3 = createSprite(910,200,40,30)
  ob3.shapeColor = "purple"
  ob5 = createSprite(250,200,40,30);
  ob5.shapeColor = "pink"
  ob7 = createSprite(370,200,40,30)
  ob7.shapeColor = "black"
  ob9 = createSprite(490,200,40,30)
  ob9.shapeColor = "pink"
  ob11 = createSprite(610,200,40,30)
  ob11.shapeColor = "black"
  ob13 = createSprite(730,200,40,30)
  ob13.shapeColor = "pink"
  ob15 = createSprite(130,300,40,30)
  ob15.shapeColor = "black"
  ob17 = createSprite(250,300,40,30);
  ob17.shapeColor = "pink"
  ob19 = createSprite(370,300,40,30)
  ob19.shapeColor = "black"
  ob21 = createSprite(490,300,40,30)
  ob21.shapeColor = "pink"
}

function draw() {
  background("black")
 if(mousePressedOver(ob1)){
   ob2.play()
   ob4.stop()
   ob6.stop()
   ob8.stop()
   ob10.stop()
   ob12.stop()
   ob14.stop()
   ob16.stop()
   ob18.stop()
   ob20.stop()
 }
 if(mousePressedOver(ob3)){
   ob2.stop()
   ob4.stop()
   ob6.stop()
   ob8.stop()
   ob10.stop()
   ob12.stop()
   ob14.stop()
   ob16.stop()
   ob18.stop()
   ob20.stop()
 }
  if(mousePressedOver(ob5)){
    ob4.play()
    ob2.stop()
    ob6.stop()
    ob8.stop()
    ob10.stop()
    ob12.stop()
    ob14.stop()
    ob16.stop()
    ob18.stop()
    ob20.stop()
  }
  if(mousePressedOver(ob7)){
    ob6.play()
    ob2.stop()
    ob4.stop()
    ob8.stop()
    ob10.stop()
    ob12.stop()
    ob14.stop()
    ob16.stop()
    ob18.stop()
    ob20.stop()
  }
  if(mousePressedOver(ob9)){
    ob8.play()
    ob6.stop()
    ob4.stop()
    ob2.stop()
    ob10.stop()
    ob12.stop()
    ob14.stop()
    ob16.stop()
    ob18.stop()
    ob20.stop()
  }
  if(mousePressedOver(ob11)){
    ob10.play()
    ob8.stop()
    ob6.stop()
    ob4.stop()
    ob2.stop()
    ob12.stop()
    ob14.stop()
    ob16.stop()
    ob18.stop()
    ob20.stop()
  }
  if(mousePressedOver(ob13)){
     ob10.stop()
    ob8.stop()
    ob6.stop()
    ob4.stop()
    ob2.stop()
    ob12.play()
    ob14.stop()
    ob16.stop()
    ob18.stop()
    ob20.stop()
  }
  if(mousePressedOver(ob15)){
    ob10.stop()
    ob8.stop()
    ob6.stop()
    ob4.stop()
    ob2.stop()
    ob12.stop()
    ob14.play()
    ob16.stop()
    ob18.stop()
    ob20.stop()
  }
  if(mousePressedOver(ob17)){
     ob10.stop()
    ob8.stop()
    ob6.stop()
    ob4.stop()
    ob2.stop()
    ob12.stop()
    ob14.stop()
    ob16.play()
    ob18.stop()
    ob20.stop()
  }
  if(mousePressedOver(ob19)){
    ob10.stop()
    ob8.stop()
    ob6.stop()
    ob4.stop()
    ob2.stop()
    ob12.stop()
    ob14.stop()
    ob16.stop()
    ob18.play()
    ob20.stop()
  }
  if(mousePressedOver(ob21)){
    ob10.stop()
    ob8.stop()
    ob6.stop()
    ob4.stop()
    ob2.stop()
    ob12.stop()
    ob14.stop()
    ob16.stop()
    ob18.stop()
    ob20.play()
  }
 drawSprites()
  fill("pink")
  textFont("century gothic")
  text("KILL THIS LOVE",90,180)
  text("AS IF IT'S YOUR LAST",200,230)
  text("LOVESICK GIRLS",330,180)
  text("DDU DU DDU DU",450,230)
  text("HOW YOU LIKE THAT",550,180)
  text("BOOMBAYAH",690,230)
  text("PRETTY SAVAGE",90,280)
  text("FOREVER YOUNG",210,330)
  text("DON'T KNOW WHAT TO DO",290,280)
  text("WHISTLE",470,330)
  fill("WHITE")
  text("STOP",895,180)
}