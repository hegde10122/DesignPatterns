import { Observer } from "./StockExchange";

  
  
  export class Investor implements Observer {
    constructor(private name: string) {}
  
    update(stockSymbol: string, price: number): void {
      console.log(`${this.name} received update: ${stockSymbol} is now Rs ${price}`);
    }
  }
  