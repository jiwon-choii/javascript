// Number of lines
const numLines = 5;

// Array to store line objects
let lines = [];

function setup() {
  createCanvas(displayWidth, displayHeight);

  // Create line objects and add them to the array
  for (let i = 0; i < numLines; i++) {
    lines.push(new MovingLine());
  }
}

function draw() {
  background(220);

  // Draw and update each line
  for (let i = 0; i < numLines; i++) {
    lines[i].update();
    lines[i].display();
  }
}

// Line class definition
class MovingLine {
  constructor() {
    this.x1 = random(width);
    this.y1 = random(height);
    this.x2 = random(width);
    this.y2 = random(height);
    this.speedX1 = random(-2, 2);
    this.speedY1 = random(-2, 2);
    this.speedX2 = random(-2, 2);
    this.speedY2 = random(-2, 2);
  }

  update() {
    // Update line positions based on their speeds
    this.x1 += this.speedX1;
    this.y1 += this.speedY1;
    this.x2 += this.speedX2;
    this.y2 += this.speedY2;

    // Bounce off the canvas edges
    this.checkEdges();
  }

  display() {
    // Draw the line
    stroke(0);
    line(this.x1, this.y1, this.x2, this.y2);
  }

  checkEdges() {
    // Bounce off the canvas edges
    if (this.x1 < 0 || this.x1 > width) {
      this.speedX1 *= -1;
    }

    if (this.y1 < 0 || this.y1 > height) {
      this.speedY1 *= -1;
    }

    if (this.x2 < 0 || this.x2 > width) {
      this.speedX2 *= -1;
    }

    if (this.y2 < 0 || this.y2 > height) {
      this.speedY2 *= -1;
    }
  }
}
