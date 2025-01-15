interface RequestHandler {
  handle(request: any): void;
}

class ConcreteRequestHandler implements RequestHandler {
  handle(request: any): void {
    console.log("ConcreteRequestHandler.handle");
  }
}

class Decorator implements RequestHandler {
  protected handler: RequestHandler;
  constructor(requestHandler: RequestHandler) {
    this.handler = requestHandler;
  }

  handle(request: any): void {
    this.handler.handle(request);
  }
}

class LoggingDecorator extends Decorator {
  handle(request: any): void {
    console.log("LoggingDecorator.handle");
    super.handle(request);
  }
}

class AuthenticationDecorator extends Decorator {
  handle(request: any): void {
    console.log("AuthenticationDecorator.handle");
    if (request.authenticated) {
      console.log("Authentication successful");
      super.handle(request);
    } else {
      console.log("Authentication failed");
    }
  }
}

const concreteHandler = new ConcreteRequestHandler();

const loggingDecorator = new LoggingDecorator(concreteHandler);
const authenticationDecorator = new AuthenticationDecorator(loggingDecorator);

authenticationDecorator.handle({ authenticated: true });
console.log("--------------------");
authenticationDecorator.handle({ authenticated: false });
