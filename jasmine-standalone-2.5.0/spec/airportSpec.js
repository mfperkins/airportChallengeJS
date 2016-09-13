'use strict';
describe('Airport', function(){
  var airport;
  var airplane;
  var weather;

  beforeEach(function(){
    weather = jasmine.createSpyObj('weather',['isStormy']);
    airport = new Airport(weather);
    airplane = jasmine.createSpyObj('airplane',['landing', 'takeOff']);
  });

      it('has no planes initially', function(){
        expect(airport.airplanes()).toEqual([]);
    });

  describe('under normal conditions', function() {
    beforeEach(function(){
      weather.isStormy.and.returnValue(false);
    });
      it('lands a plane at an airport', function() {
        airport.land(airplane);
        expect(airport.airplanes()).toContain(airplane);
        expect(airplane.landing).toHaveBeenCalled();
    });

    it('lands a plane at an airport', function() {
      airport.land(airplane);
      airport.takeOff(airplane);
      expect(airport.airplanes()).toEqual([]);
      expect(airplane.takeOff).toHaveBeenCalled();
  });

});

  describe('under stormy conditions', function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(true);
    });

    it('prevents landing when the weather is stormy', function() {
      expect(function(){airport.land(airplane);}).toThrowError("Cannot land - stormy weather");
    });
  });
});
