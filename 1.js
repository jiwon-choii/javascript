// Array to store the falling balls
let balls = [];

function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  background(220);

  // Draw and update each ball
  for (let i = balls.length - 1; i >= 0; i--) {
    balls[i].update();
    balls[i].display();

    // Remove balls that are off-screen
    if (balls[i].isOffScreen()) {
      balls.splice(i, 1);
    }
  }
}

function mousePressed() {
  // Create a new ball at the mouse position when the mouse is pressed
  let ball = new Ball(mouseX, mouseY);
  balls.push(ball);
}

// Ball class definition
class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 20;
    this.speedY = random(2, 5);
  }

  update() {
    // Update the ball's position based on its speed
    this.y += this.speedY;
  }

  display() {
    // Draw the ball
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }

  isOffScreen() {
    // Check if the ball is off-screen
    return this.y - this.radius > height;
  }
}
