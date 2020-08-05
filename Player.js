class Player{

    constructor(){
        this.name = null;
        this.hurdlesPassed = 0;
        this.distance = 0;
        this.level = 0;
        this.player = createSprite( 200,200,50,50);
        this.player.visible = false;
        this.player.veliocityY = 1


    }

    giveImages(){
        this.player.visible = true;
        this.player.addAnimation("mario", mario);
        this.player.scale = 0.5;



    }

    getPlayerCount(){
        var playecountref = database.ref("PlayerCount");
        playecountref.on("value",(data)=>{

            playercount = data.val();

        })


    }

    storePlayerDetails(){




    }






}