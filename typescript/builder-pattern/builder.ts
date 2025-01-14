class Car {
  engine: string;
  seats: number;
  brand: string;
  airBags: boolean;

  constructor() {
    this.airBags = false;
    this.brand = "";
    this.engine = "";
    this.seats = 0;
  }
  displayDetails(): void {
    console.info(
      `Car with brand: ${this.brand}, engine: ${this.engine}, seats: ${this.seats}, airbags: ${this.airBags}`
    );
  }
}

interface BuilderMethods {
  setEngine: (engine: string) => this;
  setSeats: (seats: number) => this;
  setBrand: (brand: string) => this;
  setAirbags: (hasAirbags: boolean) => this;
  build: () => Car;
}

export class CarBuilder implements BuilderMethods {
  private car: Car;

  constructor() {
    this.car = new Car();
  }

  setBrand(brand: string) {
    this.car.brand = brand;
    return this;
  }

  setEngine(engine: string) {
    this.car.engine = engine;
    return this;
  }

  setSeats(seats: number) {
    this.car.seats = seats;
    return this;
  }

  setAirbags(hasAirbags: boolean) {
    this.car.airBags = hasAirbags;
    return this;
  }

  build() {
    return this.car;
  }
}
