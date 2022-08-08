//create
class Unicorn {
  constructor() {
    this.r = 70;
    this.x = 50;
    this.y = height - this.r; // height của canvas
    this.vy = 0; // độ cao khi nhảy
    this.gravity = 1; // thể hiện trong lực
  }
  jump() {
    if (this.y == height - this.r) this.vy = -20;
    // this.vy = -20;
  }
  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }
  hits(train) {
    //return true or false if this.x, this.y, r and train.x, train.y, train.r using Circle when touch
    return collideCircleCircle(
      this.x,
      this.y,
      this.r,
      train.x,
      train.y,
      train.r
    );
    //round shape unicorn and trains
    // let x1 = this.x + this.r * 1.5;
    // let y1 = this.y + this.r * 1.5;
    // let x2 = train.x + train.r * 1.5;
    // let y2 = train.y + train.r * 1.5;
    // return true or false if x1, y1, r and train.x1, train.y1, train.r1 using Circle when touch
    // return collideCircleCircle(x1, y1, this.r, x2, y2, train.r);
  }
  show() {
    image(uImg, this.x, this.y, this.r, this.r);
    // fill(255, 50);
    // ellipseMode(CORNER);
    // ellipse(this.x, this.y, this.r, this.r);
  }
}
