export type IWallet = {
  user: string; 
  balance: number;
  transactions: {
    amount: number;
    date: Date;
    type: 'credit' | 'debit';
    description?: string; 
  }[];
};
