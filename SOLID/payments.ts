class PaymentService {
  processPayment(amount: number): void {
    console.log(`Processing payment of ₹${amount}`);
    // Core payment processing logic that applies to all users
  }
}

class RegisteredUserPaymentService extends PaymentService {
  processPayment(amount: number): void {
    const discountedAmount = this.applyDiscount(amount);
    super.processPayment(discountedAmount);
    this.addLoyaltyPoints(discountedAmount);
  }

  private applyDiscount(amount: number): number {
    return amount * 0.9; // 10% discount for registered users
  }

  private addLoyaltyPoints(amount: number): void {
    const points = Math.floor(amount / 10); // Earn 1 loyalty point for every ₹10 spent
    console.log(
      `Added ${points} loyalty points to the registered user's account.`
    );
  }
}

class GuestUserPaymentService extends PaymentService {
  processPayment(amount: number): void {
    super.processPayment(amount);
    console.log(`Guest users do not receive discounts or loyalty points.`);
  }
}

class CorporateUserPaymentService extends PaymentService {
  processPayment(amount: number): void {
    const discountedAmount = this.applyCorporateDiscount(amount);
    super.processPayment(discountedAmount);
    this.generateInvoice(discountedAmount);
  }

  private applyCorporateDiscount(amount: number): number {
    return amount * 0.85; // 15% discount for corporate users
  }

  private generateInvoice(amount: number): void {
    console.log(`Invoice generated for ₹${amount} for corporate user.`);
  }
}

function handlePayment(paymentService: PaymentService, amount: number): void {
  paymentService.processPayment(amount);
}

const registeredPayment = new RegisteredUserPaymentService();
const guestPayment = new GuestUserPaymentService();
const corporatePayment = new CorporateUserPaymentService();

// Consistent behaviour, with discounts and points for registered users
handlePayment(registeredPayment, 1000);

// Consistent behaviour, no discounts for guest users
handlePayment(guestPayment, 1000);

// Consistent behaviour, with corporate discounts and invoice generation
handlePayment(corporatePayment, 1000);
