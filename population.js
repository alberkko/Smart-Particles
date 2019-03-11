function Population() {

    this.particles = [];
    this.psize = 500;          
    this.matingpool = [];    
  
    for (var i = 0; i < this.psize; i++) {
      this.particles[i] = new Particle();
    }

    this.evaluate = function() {  
  
      var maxsmart = 0;

      for (var i = 0; i < this.psize; i++) {
        this.particles[i].calcStreetsmarts();

        if (this.particles[i].streetsmarts > maxsmart) {
          maxsmart = this.particles[i].streetsmarts;
        }
      }    

      for (var i = 0; i < this.psize; i++) {
        this.particles[i].streetsmarts /= maxsmart;
      }  
  
      this.matingpool = [];

      for (var i = 0; i < this.psize; i++) {
        var n = this.particles[i].streetsmarts * 100;
        for (var j = 0; j < n; j++) {
          this.matingpool.push(this.particles[i]);
        }
      }    
    }   

    this.selection = function() {
      var newParticles = [];
      for (var i = 0; i < this.particles.length; i++) {
        var parentA = random(this.matingpool).adn;
        var parentB = random(this.matingpool).adn;
        var child = parentA.crossover(parentB);
        child.again();
        newParticles[i] = new Particle(child);
      }

      this.particles = newParticles;
    }

    this.run = function() {
      for (var i = 0; i < this.psize; i++) {
        this.particles[i].update();
        this.particles[i].show();
      }
    }
  }