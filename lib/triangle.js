
const Shape = require('./shape');

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  getShape() {
    // Logic for rendering a triangle
    return '<polygon points="100,10 40,198 190,78 10,78 160,198" />';
  }
}

module.exports = Triangle;