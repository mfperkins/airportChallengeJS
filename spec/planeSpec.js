describe('Plane', function () {
  var plane;

  beforeEach(function () {
    plane = new Plane()
  });

  it("initialised plane in a correct state", function () {
    expect(plane.flying).toEqual(false)
    expect(plane.landed).toEqual(true)
  })

  it("isFlying changes status of the flying", function () {
    plane.isFlying()
    expect(plane.flying).toEqual(true)
  })

  it("isLanded changes status of the landed", function () {
    plane.isLanded()
    expect(plane.landed).toEqual(false)
  })

});
