class Shape {
    constructor(color) {
      this.color = color;
    }
  
    render() {
//Logic for rendering SVG
      return `<svg fill="${this.color}">${this.getShape()}</svg>`;
    }
  
// Placeholder method to be implemented by child classes
    getShape() {
      throw new Error('Method not implemented');
    }
  }
  
  module.exports = Shape;
  