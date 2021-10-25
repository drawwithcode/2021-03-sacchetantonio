//backgroung variables
let inc = 0.005;
let xStart = 0;
let yStart = 0;

//album cover
let cover;

//JSON
let data;

//tracks
let track1;
let track2;
let track3;
let track4;
let track5;
let track6;
let track7;
let track8;
let track9;
let track10;
let track11;
let track12;

function preload() {
  cover = loadImage("./assets/images/MusicOfTheSpheres.jpeg");
  data = loadJSON("./assets/musicOfSpheres.json");
  track1 = loadSound("./assets/tracks/🪐.mp3");
  track2 = loadSound("./assets/tracks/Higher Power.mp3");
  track3 = loadSound("./assets/tracks/Humankind.mp3");
  track4 = loadSound("./assets/tracks/✨.mp3");
  track5 = loadSound("./assets/tracks/Let Somebody Go.mp3");
  track6 = loadSound("./assets/tracks/❤️.mp3");
  track7 = loadSound("./assets/tracks/People Of The Pride.mp3");
  track8 = loadSound("./assets/tracks/Biutyful.mp3");
  track9 = loadSound("./assets/tracks/🌎.mp3");
  track10 = loadSound("./assets/tracks/My Universe.mp3");
  track11 = loadSound("./assets/tracks/♾.mp3");
  track12 = loadSound("./assets/tracks/Coloratura.mp3");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  //background setup
  pixelDensity(1);

  // Perlin noise on the background (reference: Coding Train)
  push();
  let yOff = yStart;
  loadPixels();
  for (let y = 0; y < height; y++) {
    let xOff = xStart;
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;

      let r = noise(xOff, yOff) * 255;
      let g = noise(xOff, yOff) * 255;
      let mR = map(r, 0, 255, 0, 150);
      let mG = map(g, 0, 255, 0, 100);
      pixels[index + 0] = mR;
      pixels[index + 1] = mG;
      pixels[index + 2] = 255;
      pixels[index + 3] = 255;

      xOff += inc;
    }
    yOff += inc;
    xStart += 0.0001;
    yStart += -0.00001;
  }
  updatePixels();
  pop();

  //Track division
  push();
  for (x = windowWidth / 12; x < windowWidth; x += windowWidth / 12) {
    strokeWeight(0.5);
    line(x, windowHeight / 40, x, (windowHeight / 40) * 39);
  }
  pop();

  //Track Text
  push();
  textAlign(CENTER);
  fill("white");
  textSize(15);
  textFont("EB Garamond");
  textStyle(ITALIC);
  text(
    "<- use the pointer to move to the next track ->",
    windowWidth / 2,
    windowHeight / 20
  );
  pop();

  //Volume Text
  push();
  textAlign(CENTER);
  angleMode(DEGREES);
  translate(windowWidth / 30, windowHeight / 2);
  rotate(-90);
  fill("white");
  textSize(15);
  textFont("EB Garamond");
  textStyle(ITALIC);
  text("<- use the pointer to adjust the volume ->", 0, 0);
  rotate(-20);
  pop();

  //Track Positions
  let tracks = data.tracks;
  for (i = 0; i < tracks.length; i++) {
    let track = tracks[i];
    let position = track.position;
    let title = track.name;
    let duration = track.duration;
    let ft = track.ft;
    console.log(position);

    textAlign(CENTER);
    fill("white");
    textSize(15);
    textFont("EB Garamond");
    let offset = width / tracks.length;
    push();
    translate(offset * i + windowWidth / 24, (windowHeight / 20) * 19);
    text(position, 0, 0);
    pop();
  }
}

function draw() {
  //TRACK1
  if (mouseX < width / 12) {
    //TRACK1 plays
    if (track1.isPlaying() == false) {
      track1.loop();
      //DESCRIPTION APPEARS
      push();
      rectMode(CENTER, TOP);
      noStroke();
      fill("blue");
      rect(
        windowWidth / 2,
        windowHeight / 2 + 25,
        windowWidth / 4,
        windowWidth / 4,
        10
      );
      textAlign(CENTER);
      fill("white");
      textSize(20);
      textFont("EB Garamond");
      text(data.tracks[0].name, windowWidth / 2, (windowHeight / 3) * 2.1);
      textSize(12);
      textStyle(NORMAL);
      text(
        data.tracks[0].duration,
        windowWidth / 2,
        (windowHeight / 3) * 2.1 + 20
      );
      textSize(15);
      text(data.tracks[0].ft, windowWidth / 2, (windowHeight / 3) * 2.1 + 40);
      pop();
    }
  } else {
    track1.pause();
  }

  //TRACK2
  if (mouseX > width / 12 && mouseX < (width / 12) * 2) {
    //TRACK2 plays
    if (track2.isPlaying() == false) {
      track2.loop();
      //DESCRIPTION APPEARS
      push();
      rectMode(CENTER, TOP);
      noStroke();
      fill("blue");
      rect(
        windowWidth / 2,
        windowHeight / 2 + 25,
        windowWidth / 4,
        windowWidth / 4,
        10
      );
      textAlign(CENTER);
      fill("white");
      textSize(20);
      textStyle(BOLD);
      textFont("EB Garamond");
      text(data.tracks[1].name, windowWidth / 2, (windowHeight / 3) * 2.1);
      textSize(12);
      textStyle(NORMAL);
      text(
        data.tracks[1].duration,
        windowWidth / 2,
        (windowHeight / 3) * 2.1 + 20
      );
      textSize(15);
      text(data.tracks[1].ft, windowWidth / 2, (windowHeight / 3) * 2.1 + 40);
      pop();
    }
  } else {
    track2.pause();
  }

  //TRACK3
  if (mouseX > (width / 12) * 2 && mouseX < (width / 12) * 3) {
    //TRACK3 plays
    if (track3.isPlaying() == false) {
      track3.loop();
      //DESCRIPTION APPEARS
      push();
      rectMode(CENTER, TOP);
      noStroke();
      fill("blue");
      rect(
        windowWidth / 2,
        windowHeight / 2 + 25,
        windowWidth / 4,
        windowWidth / 4,
        10
      );
      textAlign(CENTER);
      fill("white");
      textSize(20);
      textStyle(BOLD);
      textFont("EB Garamond");
      text(data.tracks[2].name, windowWidth / 2, (windowHeight / 3) * 2.1);
      textSize(12);
      textStyle(NORMAL);
      text(
        data.tracks[2].duration,
        windowWidth / 2,
        (windowHeight / 3) * 2.1 + 20
      );
      textSize(15);
      text(data.tracks[2].ft, windowWidth / 2, (windowHeight / 3) * 2.1 + 40);
      pop();
    }
  } else {
    track3.pause();
  }

  //TRACK4
  if (mouseX > (width / 12) * 3 && mouseX < (width / 12) * 4) {
    //TRACK4 plays
    if (track4.isPlaying() == false) {
      track4.loop();
      //DESCRIPTION APPEARS
      push();
      rectMode(CENTER, TOP);
      noStroke();
      fill("blue");
      rect(
        windowWidth / 2,
        windowHeight / 2 + 25,
        windowWidth / 4,
        windowWidth / 4,
        10
      );
      textAlign(CENTER);
      fill("white");
      textSize(20);
      textStyle(BOLD);
      textFont("EB Garamond");
      text(data.tracks[3].name, windowWidth / 2, (windowHeight / 3) * 2.1);
      textSize(12);
      textStyle(NORMAL);
      text(
        data.tracks[3].duration,
        windowWidth / 2,
        (windowHeight / 3) * 2.1 + 20
      );
      textSize(15);
      text(data.tracks[3].ft, windowWidth / 2, (windowHeight / 3) * 2.1 + 40);
      pop();
    }
  } else {
    track4.pause();
  }

  //TRACK5
  if (mouseX > (width / 12) * 4 && mouseX < (width / 12) * 5) {
    //TRACK5 plays
    if (track5.isPlaying() == false) {
      track5.loop();
      //DESCRIPTION APPEARS
      push();
      rectMode(CENTER, TOP);
      noStroke();
      fill("blue");
      rect(
        windowWidth / 2,
        windowHeight / 2 + 25,
        windowWidth / 4,
        windowWidth / 4,
        10
      );
      textAlign(CENTER);
      fill("white");
      textSize(20);
      textStyle(BOLD);
      textFont("EB Garamond");
      text(data.tracks[4].name, windowWidth / 2, (windowHeight / 3) * 2.1);
      textSize(12);
      textStyle(NORMAL);
      text(
        data.tracks[4].duration,
        windowWidth / 2,
        (windowHeight / 3) * 2.1 + 20
      );
      textSize(15);
      text(
        "ft. " + data.tracks[4].ft,
        windowWidth / 2,
        (windowHeight / 3) * 2.1 + 40
      );
      pop();
    }
  } else {
    track5.pause();
  }

  //TRACK6
  if (mouseX > (width / 12) * 5 && mouseX < (width / 12) * 6) {
    //TRACK6 plays
    if (track6.isPlaying() == false) {
      track6.loop();
      //DESCRIPTION APPEARS
      push();
      rectMode(CENTER, TOP);
      noStroke();
      fill("blue");
      rect(
        windowWidth / 2,
        windowHeight / 2 + 25,
        windowWidth / 4,
        windowWidth / 4,
        10
      );
      textAlign(CENTER);
      fill("white");
      textSize(20);
      textStyle(BOLD);
      textFont("EB Garamond");
      text(data.tracks[5].name, windowWidth / 2, (windowHeight / 3) * 2.1);
      textSize(12);
      textStyle(NORMAL);
      text(
        data.tracks[5].duration,
        windowWidth / 2,
        (windowHeight / 3) * 2.1 + 20
      );
      textSize(15);
      text(
        "ft. " + data.tracks[5].ft,
        windowWidth / 2,
        (windowHeight / 3) * 2.1 + 40
      );
      pop();
    }
  } else {
    track6.pause();
  }

  //TRACK7
  if (mouseX > (width / 12) * 6 && mouseX < (width / 12) * 7) {
    //TRACK7 plays
    if (track7.isPlaying() == false) {
      track7.loop();
      //DESCRIPTION APPEARS
      push();
      rectMode(CENTER, TOP);
      noStroke();
      fill("blue");
      rect(
        windowWidth / 2,
        windowHeight / 2 + 25,
        windowWidth / 4,
        windowWidth / 4,
        10
      );
      textAlign(CENTER);
      fill("white");
      textSize(20);
      textStyle(BOLD);
      textFont("EB Garamond");
      text(data.tracks[6].name, windowWidth / 2, (windowHeight / 3) * 2.1);
      textSize(12);
      textStyle(NORMAL);
      text(
        data.tracks[6].duration,
        windowWidth / 2,
        (windowHeight / 3) * 2.1 + 20
      );
      textSize(15);
      text(data.tracks[6].ft, windowWidth / 2, (windowHeight / 3) * 2.1 + 40);
      pop();
    }
  } else {
    track7.pause();
  }
  //TRACK8
  if (mouseX > (width / 12) * 7 && mouseX < (width / 12) * 8) {
    //TRACK8 plays
    if (track8.isPlaying() == false) {
      track8.loop();
      //DESCRIPTION APPEARS
      push();
      rectMode(CENTER, TOP);
      noStroke();
      fill("blue");
      rect(
        windowWidth / 2,
        windowHeight / 2 + 25,
        windowWidth / 4,
        windowWidth / 4,
        10
      );
      textAlign(CENTER);
      fill("white");
      textSize(20);
      textStyle(BOLD);
      textFont("EB Garamond");
      text(data.tracks[7].name, windowWidth / 2, (windowHeight / 3) * 2.1);
      textSize(12);
      textStyle(NORMAL);
      text(
        data.tracks[7].duration,
        windowWidth / 2,
        (windowHeight / 3) * 2.1 + 20
      );
      textSize(15);
      text(data.tracks[7].ft, windowWidth / 2, (windowHeight / 3) * 2.1 + 40);
      pop();
    }
  } else {
    track8.pause();
  }

  //TRACK9
  if (mouseX > (width / 12) * 8 && mouseX < (width / 12) * 9) {
    //TRACK9 plays
    if (track9.isPlaying() == false) {
      track9.loop();
      //DESCRIPTION APPEARS
      push();
      rectMode(CENTER, TOP);
      noStroke();
      fill("blue");
      rect(
        windowWidth / 2,
        windowHeight / 2 + 25,
        windowWidth / 4,
        windowWidth / 4,
        10
      );
      textAlign(CENTER);
      fill("white");
      textSize(20);
      textStyle(BOLD);
      textFont("EB Garamond");
      text(data.tracks[8].name, windowWidth / 2, (windowHeight / 3) * 2.1);
      textSize(12);
      textStyle(NORMAL);
      text(
        data.tracks[8].duration,
        windowWidth / 2,
        (windowHeight / 3) * 2.1 + 20
      );
      textSize(15);
      text(data.tracks[8].ft, windowWidth / 2, (windowHeight / 3) * 2.1 + 40);
      pop();
    }
  } else {
    track9.pause();
  }

  //TRACK10
  if (mouseX > (width / 12) * 9 && mouseX < (width / 12) * 10) {
    //TRACK10 plays
    if (track10.isPlaying() == false) {
      track10.loop();
      //DESCRIPTION APPEARS
      push();
      rectMode(CENTER, TOP);
      noStroke();
      fill("blue");
      rect(
        windowWidth / 2,
        windowHeight / 2 + 25,
        windowWidth / 4,
        windowWidth / 4,
        10
      );
      textAlign(CENTER);
      fill("white");
      textSize(20);
      textStyle(BOLD);
      textFont("EB Garamond");
      text(data.tracks[9].name, windowWidth / 2, (windowHeight / 3) * 2.1);
      textSize(12);
      textStyle(NORMAL);
      text(
        data.tracks[9].duration,
        windowWidth / 2,
        (windowHeight / 3) * 2.1 + 20
      );
      textSize(15);
      text(
        "ft. " + data.tracks[9].ft,
        windowWidth / 2,
        (windowHeight / 3) * 2.1 + 40
      );
      pop();
    }
  } else {
    track10.pause();
  }

  //TRACK11
  if (mouseX > (width / 12) * 10 && mouseX < (width / 12) * 11) {
    //TRACK11 plays
    if (track11.isPlaying() == false) {
      track11.loop();
      //DESCRIPTION APPEARS
      push();
      rectMode(CENTER, TOP);
      noStroke();
      fill("blue");
      rect(
        windowWidth / 2,
        windowHeight / 2 + 25,
        windowWidth / 4,
        windowWidth / 4,
        10
      );
      textAlign(CENTER);
      fill("white");
      textSize(20);
      textStyle(BOLD);
      textFont("EB Garamond");
      text(data.tracks[10].name, windowWidth / 2, (windowHeight / 3) * 2.1);
      textSize(12);
      textStyle(NORMAL);
      text(
        data.tracks[10].duration,
        windowWidth / 2,
        (windowHeight / 3) * 2.1 + 20
      );
      textSize(15);
      text(data.tracks[10].ft, windowWidth / 2, (windowHeight / 3) * 2.1 + 40);
      pop();
    }
  } else {
    track11.pause();
  }
  //TRACK12
  if (mouseX > (width / 12) * 11) {
    //TRACK12 plays
    if (track12.isPlaying() == false) {
      track12.loop();
      //DESCRIPTION APPEARS
      push();
      rectMode(CENTER, TOP);
      noStroke();
      fill("blue");
      rect(
        windowWidth / 2,
        windowHeight / 2 + 25,
        windowWidth / 4,
        windowWidth / 4,
        10
      );
      textAlign(CENTER);
      fill("white");
      textSize(20);
      textStyle(BOLD);
      textFont("EB Garamond");
      text(data.tracks[11].name, windowWidth / 2, (windowHeight / 3) * 2.1);
      textSize(12);
      textStyle(NORMAL);
      text(
        data.tracks[11].duration,
        windowWidth / 2,
        (windowHeight / 3) * 2.1 + 20
      );
      textSize(15);
      text(data.tracks[11].ft, windowWidth / 2, (windowHeight / 3) * 2.1 + 40);
      pop();
    }
  } else {
    track12.pause();
  }

  //Album Cover

  imageMode(CENTER);
  image(
    cover,
    windowWidth / 2,
    windowHeight / 2 - 75,
    windowWidth / 4,
    windowWidth / 4
  );

  //Pause
  push();
  rectMode(LEFT, CENTER);
  noStroke();
  let c = color("rgba(0,0,255,0.1)");
  fill(c);
  rect((windowWidth / 20) * 19 - 10, windowHeight / 2 - 5, 100, 50, 5);
  fill("white");
  rect((windowWidth / 20) * 19, windowHeight / 2, 10, 40, 5);
  rect((windowWidth / 20) * 19 + 20, windowHeight / 2, 10, 40, 5);
  pop();
  if (
    mouseX > (windowWidth / 20) * 19 - 30 &&
    mouseY > windowHeight / 2 - 35 &&
    mouseY < windowHeight / 2 + 35
  ) {
    if (track12.isPlaying() == true) {
      track12.stop();
    }
  }

  //Volume
  let volume = map(mouseY, 0, windowHeight, 0.5, 0);
  track1.amp(volume);
  track2.amp(volume);
  track3.amp(volume);
  track4.amp(volume);
  track5.amp(volume);
  track6.amp(volume);
  track7.amp(volume);
  track8.amp(volume);
  track9.amp(volume);
  track10.amp(volume);
  track11.amp(volume);
  track12.amp(volume);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
