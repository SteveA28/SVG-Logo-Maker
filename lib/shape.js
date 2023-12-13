class Shape {
  constructor(color) {
    this.color = color;
  }

  render() {
    // Logic for rendering SVG
    return `<svg fill="${this.color}">${this.getShape()}</svg>`;
  }

  // Placeholder method to be implemented by child classes
  getShape() {
    throw new Error('Method not implemented');
  }

  // Function to create SVG content based on user input
  static createSVG(userInput) {
    const shape = new Shape(userInput.shapeColor);
    return shape.render();
  }
}

class Circle extends Shape {
  // Implement the getShape method for Circle
  getShape() {
    return '<circle cx="50" cy="50" r="40" />';
  }
}

// Add other shape classes (e.g., Triangle, Square) as needed

module.exports = { Shape, Circle };