class Form{
    constructor(){
        this.inputbox = createInput("Name");
        this.button = createButton("Enter");


    }

    display(){
        this.inputbox.position(displayWidth/2 - 100, displayHeight/2 - 100);
        this.button.position(displayWidth/2- 50, displayHeight/2);
        
        this.button.mousePressed(()=>{
            name = this.inputbox.value();

            this.inputbox.hide();
            this.button.hide();
            player.giveImages();
            gameState = 1;  





            
            playercount++;
            player.index = playercount;
            player.updateplayerinfo();
            player.updateplayercount(playercount);
            
           
            

        });
    }


}