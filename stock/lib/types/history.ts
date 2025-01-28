export interface Transaction {
  id: string;
  amount: number;
  date: string;
  type: 'WITHDRAWAL' | 'DEPOSIT';
}

export interface TransactionHistory {
  transactions: Transaction[];
}