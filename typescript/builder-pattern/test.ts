import { CarBuilder } from "./builder";

const car1 = new CarBuilder()
  .setBrand("Lamborgini")
  .setEngine("V8643-turbo")
  .setAirbags(true)
  .setSeats(4)
  .build();

car1.displayDetails();
