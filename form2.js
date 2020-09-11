class Form2{
    constructor(){

        let col = color(25, 23, 150, 255);

        this.play = createButton("Play");
        this.play.style('background-color', col);
        this.play.size(150,50);
        this.play.style('color', "white");
        this.play.style('font-size','20px');

        this.controls = createButton("Controls");
        this.controls.style('background-color', col);
        this.controls.size(150,50);
        this.controls.style('color', "white");
        this.controls.style('font-size','20px');

        this.reset = createButton("Reset");
        this.reset.style('background-color', col);
        this.reset.size(150,50);
        this.reset.style('color', "white");
        this.reset.style('font-size','20px');

        this.settings = createButton("Settings");
        this.settings.style('background-color', col);
        this.settings.size(150,50);
        this.settings.style('color', "white");
        this.settings.style('font-size','20px');

        this.musictrue = createButton("Turn On / Turn Off Music");
        this.musictrue.style('background-color', col);
        this.musictrue.hide();
        this.musictrue.size(150,50);
        this.musictrue.style('color', "white");
        this.musictrue.style('font-size','20px');

        this.goBack = createButton("Go Back!");
        this.goBack.hide();
        this.goBack.style('background-color', col);
        this.goBack.size(150,50);
        this.goBack.style('color', "white");
        this.goBack.style('font-size','20px');

        this.entername = createInput("Enter Name Here");
        this.entername.hide();
        this.entername.style('background-color', col);
        this.entername.size(200,50);
        this.entername.style('color', "white");
        this.entername.style('font-size','20px');


        this.button = createButton("Enter");
        this.button.hide();
        this.button.size(150,50);
        this.button.style('color', "white");
        this.button.style('font-size','20px');
        
        this.button.style('background-color', col);
        //this.button.style('font-size', '20px');

    }

    display(){
        this.play.position(displayWidth/2 - 50, displayHeight/2 - 100);
        this.controls.position(displayWidth/2- 50, displayHeight/2);
        this.reset.position(displayWidth/2- 50, displayHeight/2 + 100);
        this.settings.position(displayWidth/2- 50, displayHeight/2+200);

        this.musictrue.position(displayWidth/2- 50, displayHeight/2  - 200);
        this.goBack.position(displayWidth/2- 50, displayHeight/2 + 200);


        this.entername.position(displayWidth/2 - 75, displayHeight/2 - 100);
        this.button.position(displayWidth/2- 50, displayHeight/2);

        if (localGameState === "firstpage"){
            this.play.mousePressed(()=>{
            localGameState = "play";
            });
    }

        this.settings.mousePressed(()=>{
            localGameState = "settings";
            this.hidestartbuttons();
            this.musictrue.show();
            this.goBack.show();



        });

        this.musictrue.mousePressed(()=>{
            if (musicplay === 1){
                musicplay = 0;


            }else{

                musicplay = 1;
            }

        });

        this.goBack.mousePressed(()=>{
            this.musictrue.hide();
            this.goBack.hide();
            this.entername.hide();
            this.showstartbuttons();
            localGameState = "firstpage";

        });



        this.reset.mousePressed(()=>{
           
            player.updateplayercount(0);
            game.updategameState(0);
            location.reload();
            localGameState = "firstpage";

        });

    
        this.controls.mousePressed(()=>{
            localGameState = "controls";
            this.hidestartbuttons();
           
            
            this.goBack.show();
    
    
    
        });
    
        this.play.mousePressed(()=>{
            player.getplayercount();
            localGameState = "play";
            this.hidestartbuttons();
           this.entername.show();
           this.button.show();
            
            this.goBack.show();
    
    
    
        });

        if (localGameState === "play"){
            this.button.mousePressed(()=>{
                localGameState = "play2";
                player.name = this.entername.value();

                this.entername.hide();
                //this.button.hide();
                this.goBack.hide();
                
                playercount++;
              
                player.index = playercount;
            // player.giveImages();
                player.updateplayercount(playercount);
                player.updateplayerinfo();
                

            });
        }

        if (localGameState === "play2"){
            this.button.mousePressed(()=>{
                localGameState = "playtrue";
                player.name = this.entername.value();
    
                this.entername.hide();
                this.button.hide();
                this.goBack.hide();

                player.player1.visible = true;
                player.player2.visible = true;

                player.giveImages();
                
    
               // player.giveImages();
                player.updateplayercount(playercount);
                player.updateplayerinfo();
                
    
            });

            
        }


    }





    hidestartbuttons(){
        this.play.hide();
        this.controls.hide();
       // this.reset.hide();
        this.settings.hide();

    }
    showstartbuttons(){
        this.play.show();
        this.controls.show();
        this.reset.show();
        this.settings.show();

    }


}