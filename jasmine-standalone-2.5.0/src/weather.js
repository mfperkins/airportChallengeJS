function Weather() {
  this.stormy = false;
};

Weather.prototype = {

  stormify: function(n = Math.random()){
    n > 0.9 ? this.stormy = true : this.stormy = false;
  },


}
