'use strict';
describe('Airport', function(){
  // var airplane;
  var airport;

      beforeEach(function(){
        airport = new Airport();
        // airplane = new Airplane();
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
