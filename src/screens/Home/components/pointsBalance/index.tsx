import React from 'react';
import {View, Text} from 'react-native';
import i18n from 'i18n';
import {useTransactions} from 'hooks/useTransactions';
import styles from './styles';
import Loading from 'components/Loading';
import Theme from 'theme';

const PointsBalance = () => {
  const {pointsBalance, isLoading} = useTransactions();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t('home.yourPoints')}</Text>
      <View style={styles.pointsContainer}>
        <Text style={styles.currentDate}>{i18n.t('home.currentBalance')}</Text>
        {isLoading ? (
          <Loading color={Theme.colors.white} isLoading={isLoading} />
        ) : (
          <Text style={styles.currentBalance}>{`${pointsBalance} pts`}</Text>
        )}
      </View>
    </View>
  );
};

export default PointsBalance;
