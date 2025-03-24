export interface Observer {
    update(stockSymbol: string, price: number): void;
  }
  //Observers define the contract for receiving updates.

  export interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(stockSymbol: string, price: number): void;
  }

  //The subject maintains a list of observers and notifies them about updates.

  export class StockExchange implements Subject {
    private observers: Observer[] = [];
  
    attach(observer: Observer): void {
      this.observers.push(observer);
    }
  
    detach(observer: Observer): void {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    notify(stockSymbol: string, price: number): void {
      for (const observer of this.observers) {
        observer.update(stockSymbol, price);
      }
    }
  
    // Simulate stock price updates
    updateStockPrice(stockSymbol: string, price: number): void {
      console.log(`Stock Exchange: ${stockSymbol} updated to Rs ${price}`);
      this.notify(stockSymbol, price);
    }
  }
