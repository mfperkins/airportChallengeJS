'user strict';
describe('Weather', function(){
  var weather;


    beforeEach(function(){
      weather = new Weather();
      spyOn(Math, "random").and.returnValue(0.91);
    });

    it('is not stormy initially', function(){
      expect(weather.stormy).toEqual(false);
    });

    it('is now stormy after weather changes', function(){
      weather.stormify();
      expect(weather.stormy).toEqual(true);
    });

});
