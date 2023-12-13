const Shape = require('./shape');

class Square extends Shape {
  constructor(color) {
    super(color);
  }

  getShape() {
// Logic for rendering a square
    return '<rect width="200" height="200" />';
  }
}

module.exports = Square;