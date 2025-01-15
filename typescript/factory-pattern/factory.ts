enum PizzaType {
  Margherita,
  Pepperoni,
}

interface Pizza {
  prepare(): void;
  bake(): void;
  cut(): void;
  box(): void;
}

class MargheritaPizza implements Pizza {
  prepare(): void {
    console.log("Preparing Margherita Pizza");
  }

  bake(): void {
    console.log("Baking Margherita Pizza");
  }

  cut(): void {
    console.log("Cutting Margherita Pizza");
  }

  box(): void {
    console.log("Boxing Margherita Pizza");
  }
}

class PepperoniPizza implements Pizza {
  prepare(): void {
    console.log("Preparing Pepperoni Pizza");
  }

  bake(): void {
    console.log("Baking Pepperoni Pizza");
  }

  cut(): void {
    console.log("Cutting Pepperoni Pizza");
  }

  box(): void {
    console.log("Boxing Pepperoni Pizza");
  }
}

class PizzaFactory {
  static createPizza(type: PizzaType): Pizza {
    switch (type) {
      case PizzaType.Margherita:
        return new MargheritaPizza();
      case PizzaType.Pepperoni:
        return new PepperoniPizza();
      default:
        throw new Error(`Unknown pizza type: ${type}`);
    }
  }
}

const pizza1 = PizzaFactory.createPizza(PizzaType.Margherita);
pizza1.prepare();
pizza1.bake();
pizza1.cut();
pizza1.box();
