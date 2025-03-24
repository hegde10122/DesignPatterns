import { Investor } from "./Investor";
import { StockExchange } from "./StockExchange";


function main() {

    // Create a stock exchange
const stockExchange = new StockExchange();

// Create investors
const investor1 = new Investor("Markandey Sanap");
const investor2 = new Investor("Gagan Pratap");

// Investors subscribe to stock updates
stockExchange.attach(investor1);
stockExchange.attach(investor2);

// Stock prices change
stockExchange.updateStockPrice("Larsen", 950);
stockExchange.updateStockPrice("KotakBank", 1899);

// Gagan Pratap unsubscribes
stockExchange.detach(investor2);

// Another stock update
stockExchange.updateStockPrice("Larsen", 955);

}
main();