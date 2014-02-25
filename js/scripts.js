

var Triangle = {

  invalid: function() {
    if(!isNaN(this.side1)) {
      if (this.side1 + this.side2 > this.side3 && this.side2 + this.side3 > this.side1 && this.side1 + this.side3 > this.side2) {
        return "triangle";}
      else {
        return false;
      }
    }
    else {
      return false;
    }
  },

  type: function() {
      if (this.side1 === this.side2 && this.side2 === this.side3) {   
        return "equilateral";
      } else if (this.side1 === this.side2 || this.side2 === this.side3 || 
                 this.side1 === this.side3) {
        return "isosceles";
      }
      else {
        return "scalene";
      }
    }
};
$(document).ready(function() {
  $('form#triangleInput').submit(function(event) {
    event.preventDefault();

    var input1 = parseInt($('#side1').val());
    var input2 = parseInt($('#side2').val());
    var input3 = parseInt($('#side3').val());

    var newTriangle = Object.create(Triangle);
    newTriangle.side1 = input1;
    newTriangle.side2 = input2;
    newTriangle.side3 = input3;

    if (newTriangle.invalid() === "triangle") {


      if (newTriangle.type() === 'equilateral') {

        $('ul#equilResults').prepend("<li>"+ newTriangle.side1 + ", " + newTriangle.side2 + ", " + newTriangle.side3 + "</li>");
      }
      else if (newTriangle.type() === 'isosceles') {

        $('ul#isoResults').prepend("<li>"+ newTriangle.side1 + ", " + newTriangle.side2 + ", " + newTriangle.side3 + "</li>");
      }
      else {

        $('ul#scalResults').prepend("<li>"+ newTriangle.side1 + ", " + newTriangle.side2 + ", " + newTriangle.side3 + "</li>");
      }
    }
    else {
      alert("This is not a valid triangle");
    }    
    this.reset();
  });
});



