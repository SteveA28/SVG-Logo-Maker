const Shape = require('./shape');

class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  getShape() {
// Logic for rendering a circle
    return '<circle cx="100" cy="100" r="80" />';
  }
}

module.exports = Circle;