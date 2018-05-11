var sound; var hear_you; var colour;


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  
  sound = new p5.AudioIn(); sound.start(); colour = color(0, 0, 0);
}

function draw() {
  console.log(sound); adjustidSound = sound.getLevel() * 1080; noStroke();
  fill(colour); ellipse(width / 2, height / 2, adjustidSound);
  chech();
}

function i_cant_hear_you() { hear_you.play(); }

function check() {
 if(adjustidSound) { colour = color(random(0, 255), random(0, 255), random(0, 255)); }
}

function windowResized() { resizeCanvas(window.innerWidth, window.innerHeight); }

function stateChange(newState) {
    setTimeout(function () { if (newState == -1) { alert('VIDEO HAS STOPPED'); } }, 5000);
}
