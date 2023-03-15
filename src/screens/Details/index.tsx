import React from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SafeAreaView} from 'react-native-safe-area-context';
import {format} from 'date-fns';
import Header from 'components/Header';
import {useTransactions} from 'hooks/useTransactions';
import styles from './styles';
import i18n from 'i18n';
import Button from 'components/Button';
import {goBack} from 'utils/navigationHandler';

const DetailsScreen = () => {
  const {
    currentTransaction: {product, image, createdAt, points},
  } = useTransactions();

  return (
    <View style={styles.container}>
      <Header
        customStyle={styles.customHeader}
        customHeaderStyle={styles.customHeaderStyle}
        title={product}
      />
      <SafeAreaView style={styles.content} edges={['right', 'bottom', 'left']}>
        <View>
          <FastImage
            style={styles.image}
            source={{
              uri: image,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.stretch}
          />
          <Text style={styles.title}>{i18n.t('details.title')}</Text>
          <Text style={styles.information}>
            {i18n.t('details.date', {
              date: format(new Date(createdAt), 'dd LLLL, yyyy'),
            })}
          </Text>
          <Text style={styles.title}>{i18n.t('details.subTitle')}</Text>
          <Text style={styles.information}>
            {i18n.t('details.points', {
              points,
            })}
          </Text>
        </View>
        <View style={styles.row}>
          <Button onPress={goBack} text={i18n.t('details.btnAccept')} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DetailsScreen;
