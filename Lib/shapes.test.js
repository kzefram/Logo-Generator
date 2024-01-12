

const { Shapes, Circle } = require('./Lib/shapes.js');

test('drawCircle() does not returns the correct SVG string', () => {
  // Create a Circle instance with test data
  const circle = new Circle(150, 150, 50, 'red', 'Hello');

  // Call the drawCircle() method
  const svg = circle.drawCircle();

  // Define the expected SVG string
  const expectedSvg = `<svg width="300" height="200">
    <circle cx="150" cy="150" r="50" fill="red" text="Hello" />
  </svg>`;

  // Assert that the returned SVG string matches the expected value
  expect(svg).not.toBe(expectedSvg);
});

// test('drawSquare() returns ')