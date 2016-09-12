function Plane () {
  this.flying = false
  this.landed = true
}

Plane.prototype.isFlying = function () {
  this.flying = true
}

Plane.prototype.isLanded = function () {
  this.landed = false
}
