const Shape = require('./shape');
const Triangle = require('./triangle');
const Circle = require('./circle');
const Square = require('./square');

describe('Shape', () => {
  test('render method should throw an error if not implemented by child class', () => {
    const shape = new Shape('red');
    expect(() => shape.render()).toThrow('Method not implemented');
  });
});

describe('Triangle', () => {
  test('render method should return SVG for a triangle with the given color', () => {
    const triangle = new Triangle('blue');
    const expectedSVG = '<svg fill="blue"><polygon points="100,10 40,198 190,78 10,78 160,198" /></svg>';
    expect(triangle.render()).toEqual(expectedSVG);
  });
});

describe('Circle', () => {
  test('render method should return SVG for a circle with the given color', () => {
    const circle = new Circle('green');
    const expectedSVG = '<svg fill="green"><circle cx="100" cy="100" r="80" /></svg>';
    expect(circle.render()).toEqual(expectedSVG);
  });
});

describe('Square', () => {
  test('render method should return SVG for a square with the given color', () => {
    const square = new Square('yellow');
    const expectedSVG = '<svg fill="yellow"><rect width="200" height="200" /></svg>';
    expect(square.render()).toEqual(expectedSVG);
  });
});