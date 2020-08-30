var gameState = 0;
var ground;
var problem;
var playercount = 0;
var one = 1;
var texts = [], text;
var texts2 = [], tex2;

var textsNumber2 = [];
var textsNumber = [];

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
var mario;

var fakeRands = []
var fakeRands2 = []
var name;


var hurdle = [];
var hurdle2 = [];


var music;
var music2;
var database;
var game;
var randomNumber;

function preload() {
  mario = loadAnimation("images/mario/mario1.png", "images/mario/mario2.png", "images/mario/mario3.png");
  Hurdlespng = loadImage("images/Hurdle.png");

  jump = loadSound('music/jump.mp3');
  gameOver = loadSound('music/gameOver.wav');
  stageClear = loadSound('music/stageclear.wav');
  point = loadSound('music/point.mp3');
  music = loadSound('music/airtone_-_resonance.mp3');

}



function setup() {
  //textMode(CENTER);

  // music2 = loadSound('/airtone_-_forgottenland.mp3');
  /*var rand1 = random(0,7);
  var rand1 = random(0,7);
  var rand1 = random(0,7);*/


  database = firebase.database();
  ground = createSprite(5000, 240, 100000, 1);
  ground2 = createSprite(5000, 440, 100000, 1);

  // for numbers and text
  for (var k = 0; k < 10; k++) {
    randomNumber = Math.round(random(1, 2));

    if (randomNumber === 1) {
      rands[k] = Math.round(random(20, 26));
      fakeRands[k] = Math.round(random(1, 15));


      texts[k] = rands[k] + " - " + (rands[k] - 17);
      textsNumber[k] = rands[k] - (rands[k] - 17);
    }
    else {
      rands[k] = Math.round(random(20, 26));
      fakeRands[k] = Math.round(random(1, 15));
      texts[k] = rands[k] + " - " + (rands[k] - fakeRands[k]);
      textsNumber[k] = rands[k] - (rands[k] - fakeRands[k]);

    }

  }

  // f







  createCanvas(displayWidth, displayHeight - 150);
  form = new Form();
  player = new Player();
  game = new Game();
  fill(152, 5, 5);




  //createSprite(400, 200, 50, 50);
}

function draw() {



  background(100);

  player.updateplayerinfo();


  player.player[player.index].collide(ground);
  player.player[player.index].collide(ground2);
  player.player[player.index].velocityY = player.player[player.index].velocityY + 0.5


  if (gameState === 0) {

    game.start();

    textSize(23);
    text("Hurdles Math Game!!", 100, 100);
    textSize(13);
    text("Enter Your Name", 100, 200);

    // form.display();

  }

  if (gameState === 1) {

    if (flag === 0) {
      for (var c = 0; c < 5; c++) {

        hurdle[c] = new Hurdles((c * 3000) + 500);
        hurdle[c].createHurdles();


      }

      flag = 1
    }
    for (var e = 0; e < 5; e++) {
      hurdle[e].createtext((e * 3000) + 500);
    }
    game.play();
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
      text("17", player.player[player.index].x + 500, 100)

    }



    for (var b = 0; b < 5; b++) {


      for (var a = 0; a < hurdle[b].hurdles1.length; a++) {

        if (player.player[player.index].isTouching(hurdle[b].hurdles1[a]) && textsNumber[a] != 17) {


          if (player.life === 0) {
            if (over === 0) {
              music.stop();
              gameOver.play();

              over = 1;
            }

            out = "true"
            player.player[player.index].velocityX = 0;
            text("Wrong, the correct answer to " + texts[a] + " is: " + textsNumber[a] + ", not 17", player.player[player.index].x + 200, 100);

          }
          else {
            player.life = player.life - 1;
            respawn();
          }
        }
        if (player.player[player.index].isTouching(hurdle[b].hurdles1[a]) && textsNumber[a] === 17 && hurdle[b].hurdles1[a].x === player.player[player.index].x) {
          //speed = speed + 1;
          player.player[player.index].velocityX = speed;
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
      player.player[player.index].x = 0;
      player.player[player.index].velocityX = 0;
      break;
    case 2:
      player.player[player.index].x = 3000;
      player.player[player.index].velocityX = 0;
      break;
    case 3:
      player.player[player.index].x = 6000;
      player.player[player.index].velocityX = 0;
      break;
    case 4:
      player.player[player.index].x = 9000;
      player.player[player.index].velocityX = 0;
      break;
    case 5:
      player.player[player.index].x = 12000;
      player.player[player.index].velocityX = 0;
      break;

  }

  player.updateplayerinfo();






}