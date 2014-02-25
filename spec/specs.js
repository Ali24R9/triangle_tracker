describe('Triangle', function() {
  describe('invalid', function() {
    it('should tell if it is a valid triangle.', function() {
      var testInvalid = Object.create(Triangle);
      testInvalid.side1 = 10;
      testInvalid.side2 = 2;
      testInvalid.side3 = 3;
      testInvalid.invalid().should.equal(false);
    });
  });

  describe('type', function() {

    it('should tell if it is an equilateral triangle.', function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.side1 = 3;
      testTriangle.side2 = 3;
      testTriangle.side3 = 3;
      testTriangle.type().should.equal("equilateral");
    });

    it('should tell if it is a valid isosceles triangle.', function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.side1 = 3;
      testTriangle.side2 = 5;
      testTriangle.side3 = 5;
      testTriangle.type().should.equal("isosceles");
    });
    
    it('should tell if it is a valid scalene triangle.', function() {
    var testTriangle = Object.create(Triangle);
    testTriangle.side1 = 6;
    testTriangle.side2 = 3;
    testTriangle.side3 = 4;
    testTriangle.type().should.equal('scalene');
    });
  });
});




