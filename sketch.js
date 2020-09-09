var gameState = "starting value ";
var localGameState = "firstpage";
var start = "true";
var ground;
var problem;
var playercount = 0;
var one = 1;
var musicplay = 0;
var alltext = [];
var texts = [];
var texts2 = [];
var texts3 = [];
var texts4 = [];
var texts5 = [];



var flag2 = 0;
var textsNumber2 = [];
var textsNumber = [];
var textsNumber3 = [];
var textsNumber4 = [];
var textsNumber5 = [];




var form;

var over = 0;
var player;
var check = 0;
var rands;
var plaerindex
var points = 0;
var flag = 0;
var out = "false";
var speed = 10;
var allplayers;
//var player = [];
var index;
var rands = [];
var rands2 = [];
var rands3 = [];
var rands4 = [];
var rands5 = [];
var mario;

var fakeRands = [];
var fakeRands2 = [];
var fakeRands3 = [];
var fakeRands4 = [];
var fakeRands5 = [];
var name;


var hurdle = [];
var hurdle2 = [];


var music;
var music2;
var database;
var game;
var randomNumber;
var randomNumber2;
var randomNumber3;
var randomNumber4;
var randomNumber5;



function preload() {
  mario = loadAnimation("images/mario/mario1.png", "images/mario/mario2.png", "images/mario/mario3.png");
  pikachu = loadAnimation("images/pikachu/pikachu.1.png", "images/pikachu/pikachu.2.png", "images/pikachu/pikachu.3.png", "images/pikachu/pikachu.4.png",)
  Hurdlespng = loadImage("images/Hurdle.png");

  jump = loadSound('music/jump.mp3');
  gameOver = loadSound('music/gameOver.wav');
  stageClear = loadSound('music/stageclear.wav');
  point = loadSound('music/point.mp3');
  music = loadSound('music/airtone_-_resonance.mp3');
  music2 = loadSound('music/musica.mp3');

}



function setup() {
  //textMode(CENTER);
  alltext[0] = texts;
alltext[1] = texts2;
alltext[2] = texts3;
alltext[3] = texts4;
alltext[4] = texts5;


randomN1 = Math.round(random(10, 20));

randomN2 = Math.round(random(10, 20));

randomN3 = Math.round(random(10, 20));

randomN4 = Math.round(random(10, 20));

randomN5 = Math.round(random(10, 20));

randomN = [];
randomN[0] = randomN1;
randomN[1] = randomN2;
randomN[2] = randomN3;
randomN[3] = randomN4;
randomN[4] = randomN5;


  // music2 = loadSound('/airtone_-_forgottenland.mp3');
  /*var rand1 = random(0,7);
  var rand1 = random(0,7);
  var rand1 = random(0,7);*/


  database = firebase.database();


  // for numbers and text
  for (var k = 0; k < 5; k++) {
     randomNumber = Math.round(random(1, 2));

    if (randomNumber === 1) {
      rands[k] = Math.round(random(20, 26));
      fakeRands[k] = Math.round(random(1, 15));


      texts[k] = rands[k] + " - " + (rands[k] - randomN1);
      textsNumber[k] = rands[k] - (rands[k] - randomN1);
    }
    else {
      rands[k] = Math.round(random(20, 26));
      fakeRands[k] = Math.round(random(1, 15));
      texts[k] = rands[k] + " - " + (rands[k] - fakeRands[k]);
      textsNumber[k] = rands[k] - (rands[k] - fakeRands[k]);

    }

  }




   // for numbers and text 2
   for (var k = 0; k < 5; k++) {
    randomNumber2 = Math.round(random(1, 2));

    if (randomNumber2 === 1) {
      rands2[k] = Math.round(random(20, 26));
      fakeRands2[k] = Math.round(random(1, 15));


      texts2[k] = (rands2[k] - randomNumber2 )  + " + " +  randomNumber2;
      textsNumber2[k] = (  rands2[k] - randomNumber2  ) + randomNumber2;
    }
    else {
      rands2[k] = Math.round(random(20, 26));
      fakeRands2[k] = Math.round(random(1, 15));
      texts2[k] = (rands2[k] - randomNumber2)  + " + " +  fakeRands2[k];
      textsNumber2[k] = (rands2[k] - randomNumber2) + fakeRands2[k];
    }

  }
//




  

//still nead to change







   for (var k = 0; k < 5; k++) {
    randomNumber3 = Math.round(random(1, 2));

    if (randomNumber3 === 1) {
      rands3[k] = Math.round(random(20, 26));
      fakeRands3[k] = Math.round(random(1, 15));


      texts3[k] = rands3[k] + " - " + (rands3[k] - randomN3);
      textsNumber3[k] = rands3[k] - (rands3[k] - randomN3);
    }
    else {
      rands3[k] = Math.round(random(20, 26));
      fakeRands3[k] = Math.round(random(1, 15));
      texts3[k] = rands3[k] + " - " + (rands3[k] - fakeRands3[k]);
      textsNumber3[k] = rands3[k] - (rands3[k] - fakeRands3[k]);

    }

  }
  for (var k = 0; k < 5; k++) {
    randomNumber4 = Math.round(random(1, 2));

    if (randomNumber4 === 1) {
      rands4[k] = Math.round(random(20, 26));
      fakeRands4[k] = Math.round(random(1, 15));


      texts4[k] = rands4[k] + " - " + (rands3[k] - randomN4);
      textsNumber4[k] = rands4[k] - (rands4[k] - randomN4);
    }
    else {
      rands4[k] = Math.round(random(20, 26));
      fakeRands4[k] = Math.round(random(1, 15));
      texts4[k] = rands4[k] + " - " + (rands4[k] - fakeRands3[k]);
      textsNumber4[k] = rands4[k] - (rands4[k] - fakeRands4[k]);

    }

  }
  for (var k = 0; k < 5; k++) {
    randomNumber5 = Math.round(random(1, 2));

    if (randomNumber5 === 1) {
      rands5[k] = Math.round(random(20, 26));
      fakeRands5[k] = Math.round(random(1, 15));


      texts5[k] = rands5[k] + " - " + (rands5[k] - randomN5);
      textsNumber5[k] = rands5[k] - (rands5[k] - randomN5);
    }
    else {
      rands5[k] = Math.round(random(20, 26));
      fakeRands5[k] = Math.round(random(1, 15));
      texts5[k] = rands5[k] + " - " + (rands5[k] - fakeRands5[k]);
      textsNumber5[k] = rands5[k] - (rands5[k] - fakeRands5[k]);

    }

  }

  // f







  createCanvas(displayWidth, displayHeight - 150);


  game = new Game();
  fill(152, 5, 5);

    //textMode(CENTER);


  //createSprite(400, 200, 50, 50);
}


function draw() {
  background(100);



  if (start === "true") {

    if(musicplay === 1){

      if (music2.isPlaying()){

        

      }
      else{

        music2.play();
      }
    }
    else{
      music2.stop();

    }
  


    if (flag2 === 0) {
    
      //music2.play();
      player = new Player();
      form2 = new Form2();
      //form = new Form();
      flag2 = 1;
    }

    form2.display();

    if(localGameState === "controls"){
      textSize(35);
      textAlign(CENTER, CENTER)
      text("    you will start of with a slow speed just to start things off, then press the right arrow \n on your keyboard to get start, press up to jump over hurdles whos answer is not eqaul\nto the value on the screen, to earn point pass through the hurdles with the correct answer", displayWidth/2, displayHeight/2 );

    }
    
    if(localGameState === "play"){
     // form.display();


    }
    // form.display();

  }

  if (localGameState === "play2") {

    text(player.name + " always wanted to earn the olympic gold medal and he just got into the finals for Math Hurdles,\n but there is many tough qeustions in his way and one last tough oppponent, can you help " + player.name+ " to win?!",displayWidth/2, displayHeight/2 );
  }

  
  if (localGameState === "playtrue") {

    


    game.start();

    textSize(23);
    text("Hurdles Math Game!!", 100, 100);
    textSize(13);
    text("Enter Your Name", 100, 200);

    // form.display();

  }

  if (gameState === "play") {

    game.play();

    if (flag === 0) {

     
     

      player.updateplayerinfo();

      ground = createSprite(5000, 240, 100000, 1);
      ground2 = createSprite(5000, 440, 100000, 1);

  

    
     


      for (var c = 0; c < 5; c++) {

        hurdle[c] = new Hurdles((c * 3000) + 500, c);
        hurdle[c].createHurdles();


      }

      flag = 1
    }

    player.player[player.index].collide(ground);
    player.player[player.index].collide(ground2);
    player.player[player.index].velocityY = player.player[player.index].velocityY + 0.5;

    for (var e = 0; e < 5; e++) {
      hurdle[e].createtext((e * 3000) + 500, e
      );
    }
    
    textSize(20);
    text(points, player.player[player.index].position.x - 20, 50);

    camera.position.x = player.player[player.index].x + 500;




    // textsNumber[4] = rand5 - (rand5 - 18);

    text(name, player.player[player.index].position.x - 20, player.player[player.index].position.y - 50)
    textSize(15);
    text("resonance by airtone (c) copyright 2020 Licensed under a Creative Commons Attribution Noncommercial  (3.0) license. http://dig.ccmixter.org/files/airtone/61321 ", player.player[player.index].position.x + 50, 720);
    textSize(20);
    //hurdle1.createHurdles();
    //hurdle2 = new Hurdles(500);
    //hurdle3 = new Hurdles(500);
    //hurdle4 = new Hurdles(500);
    //hurdle5 = new Hurdles(500);
    if (out === "false") {
      text(randomN1, player.player[player.index].x + 500, 100)

    }



    for (var b = 0; b < 5; b++) {


      for (var a = 0; a < hurdle[b].hurdles1.length; a++) {

        if (player.player[player.index].isTouching(hurdle[b].hurdles1[a]) && textsNumber[a] != randomN[b]) {
          /*  push();
            angleMode(DEGREES);
            rotate(90);
            
            hurdle[b].hurdles1[a]
            pop();*/

          hurdle[b].hurdles1[a].rotation = 90;


          if (player.life === 0) {
            if (over === 0) {
              musicplay = 0;
              gameOver.play();

              over = 1;
            }

            out = "true"
            player.player[player.index].velocityX = 0;
            text("Wrong, the correct answer to " + texts[a] + " is: " + textsNumber[a] + ", not "+randomN1, player.player[player.index].x + 200, 100);

          }
          else {

            respawn();
            player.life = player.life - 1;
          }
        }
        if (player.player[player.index].isTouching(hurdle[b].hurdles1[a]) && textsNumber[a] === randomN1 && hurdle[b].hurdles1[a].x === player.player[player.index].x) {
          //speed = speed + 1;
          //player.player[player.index].velocityX = speed;
          points++;


          point.play();


        }

      }




    }




  }

  drawSprites();




}

function keyPressed() {
  if (out === "false") {
    if (keyCode === RIGHT_ARROW) {
      //player.distance = player.distance + speed;
      //player.player.x = player.distance;

      player.player[player.index].velocityX = speed;
      player.updateplayerinfo();

    }
    if (keyCode === UP_ARROW) {
      jump.play();
      player.player[player.index].velocityY = -10
      player.updateplayerinfo();


    }

    /* if (keyCode === DOWN_ARROW) {
       jump.play();  
       player.player.velocityY = 10
 
     }*/
  }


}

function respawn() {





  switch (player.level) {
    case 1:
      player.player[player.index].x = 1;
      player.player[player.index].velocityX = 1;
      break;
    case 2:
      player.player[player.index].x = 3001;
      player.player[player.index].velocityX = 1;
      break;
    case 3:
      player.player[player.index].x = 6001;
      player.player[player.index].velocityX = 1;
      break;
    case 4:
      player.player[player.index].x = 9001;
      player.player[player.index].velocityX = 1;
      break;
    case 5:
      player.player[player.index].x = 12001;
      player.player[player.index].velocityX = 1;
      break;

  }

  player.updateplayerinfo();






}