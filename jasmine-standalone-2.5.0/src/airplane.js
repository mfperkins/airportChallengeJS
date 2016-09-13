function Airplane () {
  this.flying = false;
};

Airplane.prototype = {

  takeOff: function() {
    this.flying = true;
  },

  landing: function() {
    this.flying = false;
  },

};
