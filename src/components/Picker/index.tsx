/* eslint-disable react/no-unstable-nested-components */
import React, {FC} from 'react';
import {View} from 'react-native';
import i18n from 'i18n';
import {useTransactions} from 'hooks/useTransactions';
import RNPickerSelect from 'react-native-picker-select';
import styles, {pickerSelectStyles} from './styles';

interface IPickerProps {
  items: any;
}

const Picker: FC<IPickerProps> = ({items}) => {
  const {handleFilter, currentFilter} = useTransactions();

  const handleValueChange = (item: string) => {
    handleFilter(item);
  };

  return (
    <RNPickerSelect
      style={pickerSelectStyles}
      onValueChange={handleValueChange}
      value={currentFilter}
      Icon={() => <View style={styles.iconSimulator} />}
      useNativeAndroidPickerStyle={false}
      items={items}
      fixAndroidTouchableBug
      placeholder={{
        label: i18n.t('home.filterPlaceholder'),
        value: null,
      }}
    />
  );
};

export default Picker;
