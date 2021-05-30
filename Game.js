class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        
      }
  
 
    }
  
    play(){
      
  
      Player.getPlayerInfo();
      background("black")
  createEdgeSprites();
  carrom = createSprite(780,360,20,20)
  carrom.addImage(carromboardImage)
  carrom.scale = 0.72;



  wcoin1 = createSprite(760,342,20,20)
  wcoin1.addImage(wcoinImage)
  wcoin1.scale = 0.095
  wcoin1.friction = 0.02
  wcoin1.setCollider("circle",10,-10,150)

  wcoin2 = createSprite(807,356,20,20)
  wcoin2.addImage(wcoinImage)
  wcoin2.scale = 0.095
  wcoin2.friction = 0.02
  wcoin2.setCollider("circle",10,-10,150)

  wcoin3 = createSprite(772,390,20,20)
  wcoin3.addImage(wcoinImage)
  wcoin3.scale = 0.095
  wcoin3.friction = 0.02
  wcoin3.setCollider("circle",10,-10,150)
  


  bcoin1 = createSprite(789,331,20,20)
  bcoin1.addImage(bcoinImage)
  bcoin1.scale = 0.172
  bcoin1.friction = 0.02
  bcoin1.setCollider("circle",-6,9,80)

  bcoin2 = createSprite(799,379,20,20)
  bcoin2.addImage(bcoinImage)
  bcoin2.scale = 0.172
  bcoin2.friction = 0.02
  bcoin2.setCollider("circle",-6,9,80)

  bcoin3 = createSprite(754,366,20,20)
  bcoin3.addImage(bcoinImage)
  bcoin3.scale = 0.172
  bcoin3.friction = 0.02
  bcoin3.setCollider("circle",-6,9,80)




  rcoin = createSprite(783,361,20,20)
  rcoin.addImage(rcoinImage)
  rcoin.scale = 0.12
  rcoin.setCollider("circle",-20,-10,125)
  

  striker1 = createSprite(780,597,20,20)
  striker1.addImage(strikerImage)
  striker1.scale = 0.03
  striker1.velocityX = 0
  striker1.velocityY = 0
  striker1.friction = 0.02

  hole = createSprite(1080,50,20,20)
    }
  }