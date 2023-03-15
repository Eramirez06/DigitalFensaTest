import React, {FC, createContext, useCallback, useState, useMemo} from 'react';

import {ContextValue} from './types';
import {Transactions} from 'models/Transactions';
import {getTransactions} from 'api/getTransactions';
import {getAvailableRecordsByMonth, getPointsBalance} from './utils';

interface IUseTransactions {
  children: React.ReactNode;
}

const TransactionsContext = createContext<ContextValue>({
  transactions: [],
  getAllTransactions: () => {},
  displayAllTransactions: () => {},
  toggleTransactions: () => {},
  setCurrentTransaction: () => {},
  handleFilter: () => {},
  pointsBalance: '0',
  currentTransaction: {} as Transactions,
  groupTransactions: {},
  currentFilter: null,
  isLoading: true,
});

export const TransactionProvider: FC<IUseTransactions> = ({children}) => {
  const [transactions, setTransactions] = useState<Transactions[]>([]);
  const [currentFilter, setCurrenFilter] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentTransaction, setCurrentTransaction] = useState<Transactions>(
    {} as Transactions,
  );
  const [allTransactions, setAllTransactions] = useState<Transactions[]>([]);

  const getAllTransactions = useCallback(async () => {
    setIsLoading(true);
    const data = await getTransactions();
    setTransactions(data);
    setAllTransactions(data);
    setIsLoading(false);
  }, []);

  const toggleTransactions = (isRedeem = true) => {
    const newData = allTransactions.filter(
      data => data.is_redemption === isRedeem,
    );
    setTransactions(newData);
    setCurrenFilter(null);
  };

  const displayAllTransactions = useCallback(() => {
    setTransactions(allTransactions);
    setCurrenFilter(null);
  }, [allTransactions]);

  const pointsBalance = useMemo(() => {
    const sumPoints = getPointsBalance(allTransactions);
    return sumPoints;
  }, [allTransactions]);

  const groupTransactions = useMemo(() => {
    const gTransactions = getAvailableRecordsByMonth(allTransactions);
    return gTransactions;
  }, [allTransactions]);

  const setTransaction = (transaction: Transactions) => {
    setCurrentTransaction(transaction);
  };

  const handleFilter = useCallback(
    (key: string | null) => {
      if (key) {
        setTransactions(groupTransactions[key]);
      } else {
        displayAllTransactions();
      }
      setCurrenFilter(key);
    },
    [groupTransactions, displayAllTransactions],
  );

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        getAllTransactions,
        toggleTransactions,
        displayAllTransactions,
        setCurrentTransaction: setTransaction,
        currentTransaction,
        pointsBalance: pointsBalance.toLocaleString('en-US'),
        groupTransactions,
        handleFilter,
        currentFilter,
        isLoading,
      }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = (): ContextValue =>
  React.useContext<ContextValue>(TransactionsContext);
