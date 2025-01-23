interface Prototype {
  clone(): Prototype;
}

class Circle implements Prototype {
  private _radius: number;
  public color: string;

  constructor(radius: number, color: string) {
    this._radius = radius;
    this.color = color;
  }

  set radius(value: number) {
    this._radius = value;
  }

  get radius(): Number {
    return this._radius;
  }

  clone() {
    const newCircle = Object.create(this);
    return newCircle;
  }
}

class Rectangale implements Prototype {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  set width(value: number) {
    this._width = value;
  }

  set height(value: number) {
    this._height = value;
  }

  get width(): number {
    return this._width;
  }

  get height(): number {
    return this._height;
  }

  clone() {
    return new Rectangale(this._width, this._height);
  }
}

const circle = new Circle(5, "red");
const rectangale = new Rectangale(10, 5);

console.log(circle.radius);
console.log(rectangale.height, rectangale.width);

const circleCopy = circle.clone();
const rectangaleCopy = rectangale.clone();

circleCopy.radius = 9;

console.log(circleCopy.radius);
console.log(rectangaleCopy.height, rectangaleCopy.width);
