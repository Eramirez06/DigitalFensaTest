import React, {FC, memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {format} from 'date-fns';
import {useTransactions} from 'hooks/useTransactions';
import {navigate} from 'utils/navigationHandler';
import {Transactions} from 'models/Transactions';
import RightArrow from 'assets/icons/RightArrow';
import styles from './styles';

interface ITransactionsProps extends Transactions {
  currentTransaction: Transactions;
}

const Transaction: FC<ITransactionsProps> = ({
  createdAt,
  product,
  is_redemption,
  image,
  points,
  currentTransaction,
}) => {
  const {setCurrentTransaction} = useTransactions();

  const handleDetails = () => {
    setCurrentTransaction(currentTransaction);
    navigate('Details');
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handleDetails}
      style={styles.container}>
      <FastImage
        style={styles.image}
        source={{
          uri: image,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.stretch}
      />
      <View style={styles.detailsContainer}>
        <Text numberOfLines={1} style={styles.productName}>
          {product}
        </Text>
        <Text numberOfLines={1} style={styles.date}>
          {format(new Date(createdAt), 'dd LLLL, yyyy')}
        </Text>
      </View>
      <View style={styles.priceContainer}>
        <Text
          style={[styles.symbol, is_redemption ? styles.minus : styles.plus]}>
          {is_redemption ? '-' : '+'}
        </Text>
        <Text numberOfLines={1} style={styles.transactionBalance}>
          {points}
        </Text>
        <RightArrow />
      </View>
    </TouchableOpacity>
  );
};
export default memo(Transaction);
