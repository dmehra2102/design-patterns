// Interface
interface PaymentInterface {
  pay(amount: number): void;
}

// Concrete Strategies
class CreditCardPayment implements PaymentInterface {
  pay(amount: number): void {
    console.info(`Paying ${amount} using Credit Card`);
  }
}

class PayPalPayment implements PaymentInterface {
  pay(amount: number): void {
    console.info(`Paying ${amount} using PayPal`);
  }
}

// Context
class PaymentContext {
  private payment: PaymentInterface;

  constructor(payment: PaymentInterface) {
    this.payment = payment;
  }

  public setPaymentMethod(payment: PaymentInterface): void {
    this.payment = payment;
  }

  public pay(amount: number): void {
    this.payment.pay(amount);
  }
}

// Usage

const creditCardPayment = new CreditCardPayment();
const payPalPayment = new PayPalPayment();

const paymentContext = new PaymentContext(creditCardPayment);
paymentContext.pay(100);

paymentContext.setPaymentMethod(payPalPayment);
paymentContext.pay(200);
