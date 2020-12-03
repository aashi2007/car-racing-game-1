class Game
{
    constructor()
    {

    }
    getState()
    {
       var gameStateref = database.ref('gameState')
       //create a listener and read the data through a anonymous function
       gameStateref.on("value",function(data)
       {
           gameState = data.val();
       });
       
    }
    update(state)
    {
        database.ref('/').update
        ({
            gameState:state
        });
    }

    //async is used to run the function in asynchronous mode
    //whenever async is used await should also be used 
    async start()
    {
        if(gameState === 0)
        {
            player = new Player();
            var playerCountref = await database.ref('playerCount').once("value")
            if(playerCountref.exists()){
                playerCount = playerCountref.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }

        car1 = createSprite(100, 200);
        car1.addImage(car1Img);
        car2 = createSprite(300, 200);
        car2.addImage(car2Img);
        car3 = createSprite(500, 200);
        car3.addImage(car3Img);
        car4 = createSprite(700, 200);
        car4.addImage(car4Img);
        cars = [car1, car2, car3, car4]

    }

 play()
 {
    form.hide();
    
    //gives information of all the players 
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined)
    {
        background("brown");
        image(groundImg, 0, -displayHeight * 4, displayWidth, displayHeight * 5);

        // var display_position = 150;
        var index = 0;
        var x = 200;
        var y;
        
        for(var plr in allPlayers)
        {
            index = index+1;
            x = x + 200;
            y = displayHeight - allPlayers[plr].distance;
            cars[index-1].x = x;
            cars[index-1].y = y;

            if(index === player.index)
            {
               cars[index-1].shapeColor = "red";
               camera.position.x = displayWidth/2;
               camera.position.y = cars[index-1].y  
            }
            
           // display_position = display_position +20;
           //textSize(15);
           // text(allPlayers[plr].name + "=" + allPlayers[plr].distance,150, display_position)
        }
    } 
    if(keyIsDown(UP_ARROW)&& player.index !== null)
    {
        player.distance = player.distance + 10;
        player.update();
        console.log(player.distance);
    }  
    if (player.distance>4000)
    {
      gameState = 2;
    }
    drawSprites();     
  }    
    end()
    {
       console.log("game ended");
    }
}

/*for(plr in allPlayers)
plr = player1 - name, distance, index
car[0] .x =200
cars[0].y = canvas-distance
cars[1] .x = 200
plr = player2 - name, distance, index
plr = player3 - name, ", ";
0,1,2,3*/
