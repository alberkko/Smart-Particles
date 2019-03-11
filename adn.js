function ADN(gjene) {
    if (gjene) {
      this.gjene = gjene;
    }                                  
    
    else {
      this.gjene = [];
      for (var i = 0; i < jeta; i++) {
        this.gjene[i] = p5.Vector.random2D();
        this.gjene[i].setMag(forca_max);
      }        
    }

    this.crossover = function(partner) {
      var new_gjene = [];
      var mid = floor(random(this.gjene.length));
      for (var i = 0; i < this.gjene.length; i++) {

        if (i > mid) {
          new_gjene[i] = this.gjene[i];
        }

        else {
          new_gjene[i] = partner.gjene[i];
        }
      }

      return new ADN(new_gjene);
    }
  

    this.again = function() {
      for (var i = 0; i < this.gjene.length; i++) {

        if (random(1) < 0.01) {
          this.gjene[i] = p5.Vector.random2D();
          this.gjene[i].setMag(forca_max);
        }
      }
    }
  
  }