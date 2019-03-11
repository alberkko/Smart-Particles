
function Particle(adn) {
 
    this.pos = createVector(width / 2, height);
    this.vel = createVector();
    this.acc = createVector();
    this.completed = false;
    this.crashed = false;
    if (adn) {
      this.adn = adn;       
    } else {
      this.adn = new ADN();
    }  
    this.streetsmarts = 0;
  
    this.applyForce = function(force) {
      this.acc.add(force);
    }

    this.calcStreetsmarts = function() {
      var d = dist(this.pos.x, this.pos.y, target.x, target.y);

      this.streetsmarts = map(d, 0, width, width, 0);
      if (this.completed) {
        this.streetsmarts *= 10;
      }
      if (this.crashed) {
        this.streetsmarts /= 10;
      }
  
    }
    this.update = function() {
      var d = dist(this.pos.x, this.pos.y, target.x, target.y);
      if (d < 10) {
        this.completed = true;
        this.pos = target.copy();
      }
      if (this.pos.x > r1x && this.pos.x < r1x + r1w && this.pos.y > r1y && this.pos.y < r1y + r1h)
       {
        this.crashed = true; }
     if (this.pos.x > r2x && this.pos.x < r2x + r2w && this.pos.y > r2y && this.pos.y < r2y + r2h)
       {
     this.crashed = true;
      }
      if (this.pos.x > width || this.pos.x < 0) {
        this.crashed = true;
      }
      if (this.pos.y > height || this.pos.y < 0) {
        this.crashed = true;
      }
  
  
      this.applyForce(this.adn.gjene[count]);
      if (!this.completed && !this.crashed) {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);                                            
        this.vel.limit(4);
      }
    }
    this.show = function() {
      push();
      noStroke();
      fill(255, 500);
      translate(this.pos.x, this.pos.y);
      rotate(this.vel.heading());
      rectMode(CENTER);
      rect(0, 0, 5, 5);
      pop();
    }
  
  }

