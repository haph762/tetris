let unicorn;
let uImg;
let tImg;
let bImg;
let trollImg;
let trains = [];
let red = [255, 0, 0];
let green = [3, 76, 38];
let soccer = 0;
let speedTrains = 10;
let numberRandomTrains = 0.005;
let upLevel = "Level Up!!!";
let isUpLevel = false;
// using language 'uppppppppp'
// let soundClassifier;
function preload() {
  // using language 'uppppppppp'
  // const options = { probabilityThreshoId: 0.95 };
  // soundClassifier = ml5.soundClassifier("SpeechCommands18w", options);
  //using images
  bImg = loadImage(
    "../img/chromeDinosaurGame/backgrounds/Background_PurpleHillsSunClouds.jpg"
  );
  tImg = loadImage(
    "../img/chromeDinosaurGame/characters/Dot_Train_Run - Copy.png"
  );
  uImg = loadImage(
    "../img/chromeDinosaurGame/characters/Equals_Unicorn_Run.png"
  );
  trollImg = loadImage("../img/chromeDinosaurGame/characters/troll-face.png");
}
function mousePressed() {
  trains.push(new Train());
}
function setup() {
  createCanvas(1000, 650);
  unicorn = new Unicorn();
  // using language 'uppppppppp'
  // soundClassifier.classify(gotCommand);

  //up level
  setInterval(() => {
    // number trains
    numberRandomTrains += 0.003;
    //speed trains
    speedTrains += 5;
    //show text 'Up level'
    isUpLevel = true;
    setTimeout(() => {
      isUpLevel = false;
    }, 1000);
  }, 8000);
}
//function using language 'uppppppppp'
// function gotCommand(error, result) {
//   if (error) console.error(error);
//   if (result[0].label == "up") unicorn.jump();
// }
//function using keyboard ' ' to 'uppppppppp'
function keyPressed() {
  if (key == " ") {
    unicorn.jump();
  }
}
function mouseClicked() {
  unicorn.jump();
}
function draw() {
  console.log("dram is runnnnnnnnn");

  // number trains show
  if (random() < numberRandomTrains) {
    trains.push(new Train());
  }

  //background
  background(bImg);

  //trains
  for (let t of trains) {
    t.move(speedTrains);
    t.show();
    if (unicorn.hits(t)) {
      isUpLevel = false;
      // game over
      fill(red);
      textSize(62);
      text(`Game Over`, 200, 200);
      image(trollImg, 550, 150, 70, 70);
      noLoop();
    } else {
      soccer++;
    }
  }

  //unicorn
  unicorn.show();
  unicorn.move();

  //show soccer
  fill(red);
  textSize(22);
  text(`Soccer: ${soccer}`, 850, 50);
  // up level
  if (isUpLevel) {
    fill(green);
    textSize(62);
    text(`${upLevel}`, 350, 500);
  }
}
/// reload page
const loadPage = () => {
  location.reload();
};
