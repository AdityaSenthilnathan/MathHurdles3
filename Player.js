class Player{

    constructor(){
        this.name = null;
        this.hurdlesPassed = 0;
        this.distance = 0;
        this.level = 1;
        this.player = []
        this.player1 = createSprite( 200,200,50,50);
        this.player2 = createSprite( 200,400,50,50);
       
        this.player[0] = this.player1;
        this.player[1] = this.player1;


        this.life = 3; 
        this.player[2] = this.player2;

       

        this.player1.visible = false;
        this.player2.visible = false;
        this.index = 1;
      


    }

    giveImages(){


        this.player[1].visible = true;
        this.player[1].addAnimation("mario", mario);
        this.player[1].scale = 0.5;
        


        this.player[2].visible = true;
        this.player[2].addAnimation("pikachu",pikachu);
        this.player[2].scale = 0.5;
        


    }

    getplayercount(){
        var playecountref = database.ref("playerCount");
        playecountref.on("value", (data) => {

            playercount = data.val();

        });


    }

    storePlayerDetails(){




    }

    updateplayerlevel(){
        var playerlevelref = database.ref("players/player" + this.index)
     playerlevelref.update({
           Level: this.level
        

     });



    }   


   /* static getplayersFinished(){
        database.ref("PlayersFinished").on("value", (data) => {
           this.level = data.val();
        });
    }  */ 

    updateplayercount(count){

        var playercountref = database.ref('/');
            playercountref.update({
            playerCount: count
        });

    }


  /*  updateplayer(count){

        var playercountref = database.ref('/');
            playercountref.update({
            players: count
        });

    }

    static updateplayersFinished(count){

        var PlayersFinishedref = database.ref('/');
             PlayersFinishedref.update({
            PlayersFinished: count
        });

    }
    */

    updateplayerinfo(){
        var playerindex = "players/player" + this.index;
        var playerindexref = database.ref(playerindex);
        playerindexref.set({
            name: this.name,
            distance: this.player[this.index].x,
            yposition: this.player[this.index].y,
            Level: this.level
        });


    }

    /*updateplayerrankinfo(playerrank){
        var playerindex = "players/player" + this.index;
        var playerindexref = database.ref(playerindex);
        playerindexref.set({
            distance: this.player.x,
            name: this.name,
            level: playerlevel
            
        });


    }*/

    static getallplayerinfo(){
        var playerinforef = database.ref("players");
        playerinforef.on("value", (data) => {
            allplayers = data.val();

          });


    }    






}



