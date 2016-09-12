describe('Weather', function () {
  var weather;

  beforeEach(function () {
    weather = new Weather()
    spyOn(Math, 'random').and.returnValue(0.85)
  });

  it("should initialize with 'stormy' as false", function () {
    expect(weather.stormy).toEqual(false)
  })

  it('should return stormy', function() {
    weather.randomWeather()
    expect(weather.stormy).toEqual(true)
  })

});
