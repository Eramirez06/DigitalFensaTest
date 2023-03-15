import {format} from 'date-fns';
import {Transactions} from 'models/Transactions';

export const getPointsBalance = (allTransactions: Transactions[]) => {
  const sumPoints = allTransactions.reduce((accumulator, currentValue) => {
    if (currentValue.is_redemption) {
      return accumulator + currentValue.points;
    }
    return accumulator;
  }, 0);
  return sumPoints;
};

export const getAvailableRecordsByMonth = (allTransactions: Transactions[]) => {
  const recordByDate = {};
  allTransactions.forEach(element => {
    const actualDate = format(new Date(element.createdAt), 'MMMM yyyy');
    if (recordByDate[actualDate]) {
      recordByDate[actualDate].push(element);
    } else {
      recordByDate[actualDate] = [element];
    }
  });
  return recordByDate;
};
