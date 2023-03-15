import React, {useCallback, useMemo} from 'react';
import {View, Text, FlatList, ListRenderItem} from 'react-native';
import {Transactions} from 'models/Transactions';
import i18n from 'i18n';
import {useTransactions} from 'hooks/useTransactions';
import Transaction from '../Transaction';
import styles from './styles';
import Picker from 'components/Picker';
import {getItemsPicker} from './utils';
import Loading from 'components/Loading';

const TransactionsList = () => {
  const {transactions, groupTransactions, isLoading} = useTransactions();

  const renderItem: ListRenderItem<Transactions> = useCallback(
    ({item}) => <Transaction currentTransaction={item} {...item} />,
    [],
  );
  const keyExtractor = useCallback((item: Transactions) => item.id, []);

  const itemsPicker = useMemo(() => {
    return getItemsPicker(groupTransactions);
  }, [groupTransactions]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>{i18n.t('home.yourPoints')}</Text>
        <Picker items={itemsPicker} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={transactions}
          contentContainerStyle={styles.contentList}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          maxToRenderPerBatch={6}
          initialNumToRender={12}
          removeClippedSubviews
          ListEmptyComponent={<Loading isLoading={isLoading} />}
        />
      </View>
    </View>
  );
};
export default TransactionsList;
