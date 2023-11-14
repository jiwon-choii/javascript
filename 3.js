let snowflakes = [];

function setup() {
  createCanvas(displayWidth, displayHeight);
  noStroke();
}

function draw() {
  background(0);

  // Draw stars
  drawStars();

  // Create and draw snowflakes
  createSnowflake();
  drawSnowflakes();
}

function drawStars() {
  fill(255);
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    ellipse(x, y, 2, 2);
  }
}

function createSnowflake() {
  if (random() > 0.95) {
    let x = random(width);
    let y = -10;
    let size = random(5, 15);
    let speed = random(1, 3);
    snowflakes.push({ x, y, size, speed });
  }
}

function drawSnowflakes() {
  fill(255);

  for (let i = 0; i < snowflakes.length; i++) {
    let flake = snowflakes[i];
    ellipse(flake.x, flake.y, flake.size, flake.size);
    flake.y += flake.speed;

    // Remove snowflakes that are off-screen
    if (flake.y > height) {
      snowflakes.splice(i, 1);
      i--;
    }
  }
}

