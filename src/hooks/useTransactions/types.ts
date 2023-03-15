import {Transactions} from 'models/Transactions';

export type ContextValue = {
  transactions: Transactions[] | [];
  getAllTransactions: () => void;
  toggleTransactions: (isRedeem: boolean) => void;
  handleFilter: (key: string) => void;
  displayAllTransactions: () => void;
  setCurrentTransaction: (Transactions: Transactions) => void;
  pointsBalance: string;
  currentTransaction: Transactions;
  groupTransactions: any;
  currentFilter: string | null;
  isLoading: boolean;
};
