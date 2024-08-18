interface LedgerEntry {
  date: Date;
  description: string;
  amount: number;
  type: 'debit' | 'credit';
  notes?: string;       // Optional property
  category?: string;   // Optional property
  tags?: string[];     // Optional property
}

class Ledger {

  //entries is an array of LedgerEntry objects initialised as an empty array
  private entries: LedgerEntry[] = [];

  //instead of writing 0 directly - in the getBalance() function - which makes it non-intuitive, we 
  //initialise the reducer function with the initial balance amount as 0.
  private INITIAL_AMOUNT:number = 0;

  //add a new entry to the ledger
  addEntry(entry: LedgerEntry): void {
    this.entries.push(entry);
  }

  //get all entries from the ledger
  getEntries(): LedgerEntry[] {
    return this.entries;
  }

  //get the balance from all transactions - credit increases the balance while debit decreases it
  //we use the "reduce" function that manipulates the balance variable with 0 as the starting value. 
  //Amount value inside each valued is either added or subtracted depending upon credit or debit transactions.
  //the return statement includes a ternary operator to update the balance amount.
  //Thus we can see that the reduce function in TypeScript is used to accumulate values in an 
  //array into a single value.
  getBalance(): number {

    return this.entries.reduce((balance, entry) => {
      return entry.type === 'credit' ? balance + entry.amount : balance - entry.amount;
    }, this.INITIAL_AMOUNT);
  }

  //get entries filtered by type 
  getEntriesByType(type: 'debit' | 'credit'): LedgerEntry[] {
    return this.entries.filter(entry => entry.type === type);
  }

  // Get entries by category
  getEntriesByCategory(category: string): LedgerEntry[] {
    return this.entries.filter(entry => entry.category === category);
  }
}

//Example usage
const myLedger = new Ledger();

const salaryEntry: LedgerEntry = {
  date: new Date(),
  description: 'salary',
  amount: 50000,
  type: 'credit',
  category: 'Income',
  tags: ['monthly', 'salary']
}

myLedger.addEntry(salaryEntry);

const rentEntry: LedgerEntry = {
  date: new Date(),
  description: 'House Rent',
  amount: 7560,
  type: 'debit',
  category: 'Housing',
  notes: 'Paid for August'

}

myLedger.addEntry(rentEntry);

const groceriesEntry: LedgerEntry = {
  date: new Date(),
  description: 'Groceries',
  amount: 433,
  type: 'debit',
  category:'food'

}

myLedger.addEntry(groceriesEntry);

console.log('All entries : ', myLedger.getEntries());
console.log('Balance : ', myLedger.getBalance());
console.log('Debits : ', myLedger.getEntriesByType('debit'));
console.log('Credits : ', myLedger.getEntriesByType('credit'));
console.log('Housing Entries:', myLedger.getEntriesByCategory('Housing'));

/**
  Here we are designing a Ledger class to manage a collection of financial
  transactions or entries. Typically, a ledger keeps track of each transaction, 
  including details such as the date, 
  description, amount, and type (e.g., debit or credit). 

  We design an interface for each legder entry. 
  
  In TypeScript, an interface is a way to define the structure of an object.
  It specifies what properties and methods an object should have, 
  without providing the actual implementation. Interfaces are used to create contracts that
  classes and other objects can adhere to, ensuring they follow a specific structure.
  An interface defines a blueprint for objects by specifying 
  what properties and methods they should have.

  Classes must implement interfaces to ensure they provide the required structure.
  The class must provide the implementation for all the properties and methods declared in the interface.
  Interfaces can define optional properties using the ? syntax. In the above case, notes is an optional 
  property. category and tags are also optional properties.

 */

/**
The private keyword makes the entries property only accessible within the Ledger class itself. 
This means that no other code outside of the Ledger class can directly access or 
modify the entries array.
This encapsulation is a common practice in object-oriented programming 
to protect the internal state of an object and control how it is accessed or modified.

 */

/**
  
The Ledger class satisfies the Single Responsibility Principle (SRP) of object-oriented design. 
The SRP states that a class should have only one reason to change, 
meaning it should have only one job or responsibility.

How the Ledger Class Satisfies SRP ?

1) Single Responsibility:

The Ledger class is responsible for managing ledger entries. 
Its main purpose is to store, retrieve, and manipulate financial transactions.
It doesn’t concern itself with other unrelated tasks, such as user interaction, 
data validation, or reporting. This focus on a single responsibility 
makes the class easier to understand, maintain, and modify.

2) Well-Defined Purpose:

Storing Entries: The class stores entries in a private array (entries).
Adding Entries: It provides a method (addEntry) to add new entries to the ledger.
Retrieving Entries: It has methods (getEntries, getEntriesByType, etc.) for retrieving entries based on specific criteria.
Calculating Balance: It includes a method (getBalance) to calculate the balance of all the transactions.

All these methods are directly related to managing ledger entries, and none of them step outside of this responsibility.

3) Encapsulation:

By making the entries array private, the class encapsulates its data. 
This ensures that the internal structure of the ledger is protected and
 can only be modified through the class's methods, which are all focused on its single responsibility.

 4) Easier Maintenance:

 Since the class only has one responsibility, if you need to make changes related to 
 how ledger entries are managed, you know that these changes will likely only affect the Ledger class. 
 This minimizes the risk of unintended side effects in other parts of the codebase.

 Potential Example of Violating SRP
 ----------------------------------
If the Ledger class also handled tasks like exporting data to a file, 
managing user inputs, or performing complex financial calculations beyond basic balance checks, it would start to violate the SRP. 
Each of these tasks would introduce new reasons for the class to change, increasing its complexity and making it harder to maintain.

Conclusion
The Ledger class satisfies the Single Responsibility Principle by focusing 
solely on the management of ledger entries. 
It encapsulates the logic needed to add, retrieve,
and process these entries, without taking on responsibilities outside of this domain.
This makes the class easier to understand, modify, and extend, which is the essence of adhering to SRP.

 */