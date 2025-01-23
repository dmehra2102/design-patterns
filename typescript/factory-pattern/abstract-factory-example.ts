// Interfaces for Button and Checkbox
interface GUIFeature {
  button(): void;
  checkBox(): void;
}

// Concrete implementations for Windows UI components
class WindowsFeatures implements GUIFeature {
  button(): void {
    console.log("Rendering Windows button.");
  }
  checkBox(): void {
    console.log("Checking Windows checkbox.");
  }
}

// Concrete implementations for macOS UI components
class MacOSFeature implements GUIFeature {
  button(): void {
    console.log("Rendering macOS button.");
  }
  checkBox(): void {
    console.log("Checking Windows checkbox.");
  }
}

// Abstract Factory interface
interface AbstractFactory {
  createWindowsGUI(): GUIFeature;
  createMacOSGUI(): GUIFeature;
}

// Implementation of the Abstract Factory
class ConcreteFactory implements AbstractFactory {
  createWindowsGUI(): GUIFeature {
    return new WindowsFeatures();
  }

  createMacOSGUI(): GUIFeature {
    return new MacOSFeature();
  }
}

// Client code demonstrating the usage of factories
const factory = new ConcreteFactory();
const macOSGUI = factory.createMacOSGUI();
const windowsGUI = factory.createWindowsGUI();

macOSGUI.button();
windowsGUI.button();
