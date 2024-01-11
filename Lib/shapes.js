class Shapes {
    constructor(color, text) {
      this.color = color;
      this.text = text;
    }
  
    render() {
      console.log(`Your shape has been rendered as ${this.color} and with this ${this.text}`);
    }
  }
  
  class Circle extends Shapes {
    constructor(color, radius) {
      super(color);
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * this.radius ** 2;
    }
  
    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }

    drawCircle() {
      const svg = `<svg width="400" height="400">
          <circle cx="200" cy="200" r="${this.radius}" fill="${this.color}" />
      </svg>`;
      return svg;
  }  
  
  class Square extends Shapes {
    constructor(color, side) {
      super(color, side);
      this.side = side;
    }
  
    drawSquare() {
      const svg = `<svg width="300" height="200">
        <rect x="50" y="50" width="${this.side}" height="${this.side}" fill="${this.color}"  />
      </svg>`;
      return svg;
    }
  }
  
  class Triangle extends Shapes {
    constructor(color, side) {
      super(color, side);
      this.side = side;
    }
  
    drawTriangle() {
      const svg = `<svg width="300" height="200">
        <polygon points="150,50 100,150 200,150" style="fill:${this.color}/>
      </svg>`;
      return svg;
    }
  }

  function generatelogo(data) {
    const { shapes } = data;

    switch (shapes) {
        case 'circle':
            return new Circle(data['text-colour'], data.radius).drawCircle();
        case 'square':
            return new Square(data['shape-colour'], data.side).drawSquare();
        case 'triangle':
            return new Triangle(data['shape-colour'], data.side).drawTriangle();
        default:
            return 'Invalid shape selected';
    }
}
  
  module.exports = { Shapes, Circle, Square, Triangle, generatelogo };
