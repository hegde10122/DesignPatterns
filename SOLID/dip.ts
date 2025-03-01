interface PaymentService {
  process(): void;
}

class CreditCardService implements PaymentService {
  process() {
    console.log("Processing credit card payment");
  }
}

class PayPalService implements PaymentService {
  process() {
    console.log("Processing PayPal payment");
  }
}

class PaymentProcessor {
  private paymentService: PaymentService;

  constructor(paymentService: PaymentService) {
    this.paymentService = paymentService;
  }

  processPayment() {
    this.paymentService.process();
  }
}
