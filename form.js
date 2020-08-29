class Form{
    constructor(){
        this.inputbox = createInput("Name");
        this.button = createButton("Enter");
        this.reset = createButton("Reset");


    }

    display(){
        this.inputbox.position(displayWidth/2 - 100, displayHeight/2 - 100);
        this.button.position(displayWidth/2- 50, displayHeight/2);
        this.reset.position(displayWidth/2- 50, displayHeight/2 + 100);
        
        this.button.mousePressed(()=>{
            player.name = this.inputbox.value();

            this.inputbox.hide();
            this.button.hide();

        





            
            playercount++;
            player.index = playercount;
            player.giveImages();
            player.updateplayercount(playercount);
            player.updateplayerinfo();
            
            
            
           
            

        });



        this.reset.mousePressed(()=>{
           
            player.updateplayercount(0);
            game.updategameState(0);

            
            
            
           
            

        });
    }


}