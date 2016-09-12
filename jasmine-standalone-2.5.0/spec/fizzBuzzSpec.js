describe("FizzBuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('multiples of 3', function() {
    it('returns fizz when passed 3', function() {
      expect(fizzBuzz.play(3)).toEqual('fizz');
    });
  });

  describe('multiples of 5', function() {
    it('returns buzz when passed 5', function() {
      expect(fizzBuzz.play(5)).toEqual('buzz');
    });
  });

  describe('multiples of 5 and 3', function() {
    it('returns fizzbuzz when passed 15', function() {
      expect(fizzBuzz.play(15)).toEqual('fizzbuzz');
    });
  });

  describe('neither a multiple of 5 nor 3', function() {
    it('returns 16 when passed 16', function() {
      expect(fizzBuzz.play(16)).toEqual(16);
    });
  });
});
