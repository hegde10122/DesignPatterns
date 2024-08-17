interface LedgerEntry {
    date: Date;
    description: string;
    amount: number;
    type: 'debit' | 'credit';
  }
  