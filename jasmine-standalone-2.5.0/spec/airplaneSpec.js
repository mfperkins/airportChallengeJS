'use strict';
describe('Airplane', function(){
  var airplane;


  beforeEach(function(){
    airplane = new Airplane();
  });

  it('has flying set to false initially', function(){
    expect(airplane.flying).toEqual(false);
  });

  it('has flying changed to true after take off', function(){
    airplane.takeOff();
    expect(airplane.flying).toEqual(true);
  });

  it('has flying changed to false after landing from sky', function(){
    airplane.takeOff();
    airplane.landing();
    expect(airplane.flying).toEqual(false);
  });
});
