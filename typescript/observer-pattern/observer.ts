interface Observer {
  update(value: number): void;
}

interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

class ConcreteStrategy implements Subject {
  private observers: Observer[] = [];
  private value: number = 0;

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notifyObservers(): void {
    console.log(`Notifying observers...`);
    this.observers.forEach((observer) => observer.update(this.value));
  }

  setValue(value: number): void {
    this.value = value;
    this.notifyObservers();
  }
}

class ObserverA implements Observer {
  update(value: number): void {
    console.log(`Observer A: ${value}`);
  }
}

class ObserverB implements Observer {
  update(value: number): void {
    console.log(`Observer B: ${value}`);
  }
}

const observerA = new ObserverA();
const observerB = new ObserverB();

const subject = new ConcreteStrategy();

subject.registerObserver(observerA);
subject.registerObserver(observerB);

subject.setValue(10);

subject.removeObserver(observerB);

subject.setValue(20);
