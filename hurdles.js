class Hurdles{
    constructor(x){
        this.hurdles = [];
        this.hurdle;
        this.x = x;


    }

    createHurdles(){
        
        for(var k = 0; k< 5; k++){
           // var rand = random(0,4);
            this.hurdle = createSprite(this.x, 200, 10,10);
            textSize(20)
            text(texts[k],this.x - 10, 170);
            this.hurdle.addImage(Hurdlespng);
            this.hurdle.scale = 0.1

            this.hurdles[k] = this.hurdle
            this.x = this.x + 500


        }


    }

   






}