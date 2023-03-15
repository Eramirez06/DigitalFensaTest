import {TransactionProvider} from 'hooks/useTransactions';
import Navigator from 'navigation';
import React from 'react';

const App = () => {
  return (
    <TransactionProvider>
      <Navigator />
    </TransactionProvider>
  );
};

export default App;
