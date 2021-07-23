    var pathImage,invisibleGround1,invisibleGround2;
    var manImage,man_Running,edges;
    var bottleImage;
    var bombImage;
    var coinImage;


    function preload(){

    pathImage = loadImage("path.png");
    man_Running = loadAnimation("Runner-1.png","Runner-2.png");
    bottleImage = loadAnimation("energyDrink.png");
    bombImage = loadAnimation("bomb.png");
    coinImage = loadAnimation("coin.png");
    }

    function setup(){
    createCanvas(400,400);

    path = createSprite(200,200,200,200);
    path.addImage (pathImage);
    path.scale = 1.2;
    path.velocityY = 3;

    man = createSprite(194,324);
    man.addAnimation("Running",man_Running);
    man.scale = 0.07;

    invisibleGround1 = createSprite(308,50,10,400);
    invisibleGround1.visible = false;

    invisibleGround2 = createSprite(26,190,10,400);
    invisibleGround2.visible = false;

    bottle = createSprite(200,89);
    bottle.addAnimation("bottleImage",bottleImage);
    bottle.scale = 0.1;
    bottle.velocityY = 1;

    bomb = createSprite(90,20);
    bomb.addAnimation("bombImage",bombImage);
    bomb.scale = 0.1;
    bomb.velocityY = 1;

    coin = createSprite(314,12);
    coin.addAnimation("coinImage",coinImage);
    coin.scale = 0.3;
    coin.velocityY = 1;

    }
    function draw(){
    background("black");
    man.x = World.mouseX;

    edges= createEdgeSprites();
    man.collide(edges);

    path.velocityY = 3;
    if(path.y > 600){path.y=path.height/-9}    

    if(man.isTouching(bottle))
    bottle.destroy();

    if(man.isTouching(bomb)){
    text("YOU LOSE",198,196);
    fillColor("red");
    man.destroy();
    }


    if(man.isTouching(coin)){  
    text("YOU WIN",198,196);
    fillColor("red");
    coin.destroy();
    }


    man.collide(invisibleGround1);
    man.collide(invisibleGround2);
    drawSprites();
    }
