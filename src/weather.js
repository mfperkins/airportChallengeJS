function Weather() {
  this.stormy = false;
}

Weather.prototype.randomWeather = function () {
  var randomNumber = Math.floor((Math.random() * 10) +1);
  if (randomNumber >= 9) {
    this.stormy = true
  };
}
