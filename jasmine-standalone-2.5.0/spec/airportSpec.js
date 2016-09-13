'use strict';
describe('Airport', function(){
  // var plane;
  var airport;

      beforeEach(function(){
        airport = new Airport();
        // plane = new Plane();
      });

      it('has no planes initially', function(){
        expect(airport.airplanes()).toEqual([]);
    });

      it('lands a plane at an airport', function(){
        var airplane = "airplane"
        airport.land(airplane);
        expect(airport.airplanes()).toContain(airplane);
    });
});
