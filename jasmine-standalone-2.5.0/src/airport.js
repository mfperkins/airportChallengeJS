function Airport(weather) {
  this.parking = [];
  this.weather = typeof weather !== 'undefined' ? weather : new Weather();
};

Airport.prototype.airplanes = function() {
  return this.parking;
};

Airport.prototype.land = function(plane) {
  if (this.weather.isStormy()) {
    throw new Error("Cannot land - stormy weather")
  }
  else {
    plane.landing();
    this.parking.push(plane);
  }
};

Airport.prototype.takeOff = function(plane) {
  plane.takeOff();
  this.parking.pop(plane);
};

//
// airport = airplane_array[airplanes], weather[weathers] (weather[sunny],weather[stormy])
// airplane["status"] = "landed"
