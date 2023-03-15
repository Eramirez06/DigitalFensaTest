import React, {useEffect, useState} from 'react';
import Header from 'components/Header';
import {View} from 'react-native';
import PointsBalance from './components/pointsBalance';
import TransactionsList from './components/TransactionsList';
import styles from './styles';
import {useTransactions} from 'hooks/useTransactions';
import Button from 'components/Button';
import i18n from 'i18n';

const HomeScreen = () => {
  const [isFiltering, setIsFiltering] = useState(false);
  const {getAllTransactions, toggleTransactions, displayAllTransactions} =
    useTransactions();

  useEffect(() => {
    getAllTransactions();
  }, [getAllTransactions]);

  const handleFilter = (isRedeem: boolean) => {
    toggleTransactions(isRedeem);
    setIsFiltering(true);
  };

  const displayAll = () => {
    displayAllTransactions();
    setIsFiltering(false);
  };

  return (
    <View style={styles.container}>
      <Header title={i18n.t('home.title')} subTitle="Emilio Ramirez" />
      <PointsBalance />
      <TransactionsList />
      <View style={styles.rowButtons}>
        {isFiltering ? (
          <Button onPress={displayAll} text={i18n.t('home.btnAll')} />
        ) : (
          <>
            <Button
              onPress={() => handleFilter(false)}
              text={i18n.t('home.btnEarned')}
              customStyle={styles.customStyle}
            />
            <Button
              onPress={() => handleFilter(true)}
              text={i18n.t('home.btnRedeemed')}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
