class Hurdles{
    constructor(x){
        this.allhurdles = []
         
        this.hurdles1 = [];
        this.hurdle1;
        this.x = x;

        this.hurdles2 = [];
        this.hurdle2;
        this.x2 = x;

        this.x0 = x;
        this.y = 170;
        this.y2 = 370;

        this.allhurdles[0] = 0;
        this.allhurdles[1] = this.hurdles1;
        this.allhurdles[2] = this.hurdles2;
        


    }

    createHurdles(){
       
       // for(var e = 0; e < 2; e++){
        if(player.index === 1){
            for(var k = 0; k< 5; k++){
             //var ran = random(0,4);
             //var rand = Math.round(ran);
                this.hurdle1 = createSprite(this.x, this.y + 30, 10,10);
               
                this.hurdle1.addImage(Hurdlespng);
                this.hurdle1.scale = 0.1;

                this.hurdles1[k] = this.hurdle1;
                this.x = this.x + 500;


            }
        }
        if(player.index === 2){
            for(var k = 0; k< 5; k++){
                //var ran = random(0,4);
                //var rand = Math.round(ran);
                   this.hurdle1 = createSprite(this.x2, this.y2 +30, 10,10);
                  
                   this.hurdle1.addImage(Hurdlespng);
                   this.hurdle1.scale = 0.1;
   
                   this.hurdles1[k] = this.hurdle1;
                   this.x2 = this.x2 + 500;
   
   
               }
            }
           // this.y = this.y + 300;
           // this.x = 500;
       // }
       

    }

    createtext(x){
        if(player.index === 1){
            for(var k = 0; k< 5; k++){
                //var ran = random(0,4);
                //var rand = Math.round(ran);
                   
                   textSize(20);
                   text(texts[k],x - 10, this.y);
                
                   x     = x + 500;
    
    
               }
            }

            if(player.index === 2){
                for(var k = 0; k< 5; k++){
                    //var ran = random(0,4);
                    //var rand = Math.round(ran);
                       
                       textSize(20);
                       text(texts[k],x - 10, this.y2);
                    
                       x = x + 500;
        
        
                   }
                }
   
    }

    /*createtext2(x){
        for(var k = 0; k< 5; k++){
            //var ran = random(0,4);
            //var rand = Math.round(ran);
               
               textSize(20);
               text(texts2[k],x - 10, this.y2);
            
               x = x + 500;


           }
   
    }*/





}