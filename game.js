class Game{
    constructor(){



    }

    start(){
  
            //player = new Player();
            player.getplayercount();
            //form = new Form();
          //  form.display();
       // text("forgottenland by airtone (c) copyright 2020 Licensed under a Creative Commons Attribution Noncommercial  (3.0) license. http://dig.ccmixter.org/files/airtone/61959 ",250 , 720)
        //image(img1, 50, 50);

  
       
    

        if (playercount === 2){

            gameState = "play";
            this.updategameState(gameState);
           // music2.stop();

        }

         
    }

    play(){
       if (musicplay === 1){
        music2.stop();
        musicplay = 2
       }

        if(musicplay === 2  ){
            if (music.isPlaying()){
      
              
      
            }
            else{
      
              music.play();
            }
          }
          else{
            music.stop();
      
          }
        Player.getallplayerinfo();
       // Player.getplayersFinished();
       if(allplayers != undefined){

       for(var index = 1; index < 3; index++){

        if (player.index != index){
          //var playerindex = window["player" + index];
          var playerindex = [];
          playerindex[0] = allplayers.player1
          playerindex[1] = allplayers.player2
           
          player.player[index].x = playerindex[index - 1].distance;
          player.player[index].y = playerindex[index - 1].yposition;
      
        }
      }
    }

       /* for(var plr in allplayers){
             if (plr === "player" + player.index){
              fill("red");
         }
         else{
              fill("blue");
              player.player[player.index].x = allplayers[plr]["distance"];
              player.player[player.index].y = allplayers[plr]["yposition"];
              
       
          //players[index].position.x = xposition;
          //players[index].y = yposition;
         }
        
          index = index + 1;
        */
        /*  if (index === player.index){
              cars[index - 1].shapeColor = "red";
              camera.position.x =  cars[index - 1].y
              camera.position.y = displayHeight/2 
              


          }
        }*/
        /*if(player.index != null && person != null){
        for (var i = 0; i < hurdles.sprites.length; i++) {
            if (person.isTouching(hurdles.sprites[i])){
                gameState = 4;
            }

        }
    }*/

       /* for (var i = 0; i < 4; i++){
            index = index + 1;
            
            
        }*/

        
        

        if (player.player[player.index].x%3000 === 0){
            
            player.level++;
            strokeWeight(30);
            player.updateplayerlevel();
            console.log(player.level);

            if ((player.level - points) > 0){
                this.end()


            }
            //Player.updateplayersFinished(player.rank);
            //player.updateplayerrankinfo(player.rank);
           
        }
    }
    end(){
       console.log("Game Ended! Thanks for Playing!");
        

    }
    
    getGameState() {
     var gamestateref = database.ref("gameState");
            gamestateref.on("value", function(data){
            gamestate = data.val();
    
     });
    
    }

    updategameState(state){
        var gamestateref = database.ref('/');
        gamestateref.update({
             gameState: state
        });


    }
}
/*
    start(){

        if (gamestate === 0){
            player = new Player();
            player.getplayercount();
            form = new Form();
            form.display();

        }

        car1 = createSprite(displayWidth - 900, displayHeight - 180);
        car1.addImage(carIMG1);

        car2 = createSprite(displayWidth - 500, displayHeight - 180);
        car2.addImage(carIMG2);
        
        cars = [car1, car2];
    }

    play(){
        form.hide();
        text("Press the UP arrow to go forward", 250, 30);
        Player.getallplayerinfo();
        if (allplayers !==undefined){
            var yposition = 130;
            var index = 0;
            var x = 500;
            image(track, 0, -displayHeight * 4, displayWidth, displayHeight * 8);

            for(var plr in allplayers){

              /* if (plr === "player" + player.index){
                fill("red");

           }
           else{
                fill("blue");
           }/
            yposition = displayHeight - allplayers[plr].distance
   
       

            cars[index].x = x
            cars[index].y = yposition
            //console.log(cars[index].y);
            index = index + 1
          
            if (index === player.index){
                //cars[index - 1].shapeColor = "red";
                camera.position.x =  displayWidth/2
                camera.position.y =  cars[index - 1].y
                


            }
            x = x + 440;
            }
        }
        if (keyIsDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 20;
            player.updateplayerinfo();


        }

        if (player.distance === 4100){
            gamestate = 2;


        }

    }

    end(){
        console.log("Game Over!");

        game.updategameState(2);



    }
    */
