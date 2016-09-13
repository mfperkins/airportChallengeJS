function Weather() {
  this.stormy = false;
};

Weather.prototype = {

  isStormy: function() {
    this.stormify();
    return this.stormy;
  },

  stormify: function(n = Math.random()){
    n > 0.9 ? this.stormy = true : this.stormy = false;
  },


}
