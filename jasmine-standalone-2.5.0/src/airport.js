function Airport () {
this.parking = [];
};

Airport.prototype.airplanes = function() {
  return this.parking;
};

Airport.prototype.land = function(plane) {
 this.parking.push(plane);
};

// 
// airport = airplane_array[airplanes], weather[weathers] (weather[sunny],weather[stormy])
// airplane["status"] = "landed"
