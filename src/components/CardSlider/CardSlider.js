import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Slider from '@react-native-community/slider';
import {styles} from './CardSlider.styles';
import CurrencyInput from 'react-native-currency-input';

export const CardSlider = ({
  title,
  maxValue,
  minValue,
  setAmountValue,
  amountValue,
  setPlazoValue,
  plazoValue,
}) => {
  return (
    <View style={styles.cardCont}>
      <View style={styles.numericInput}>
        <Text style={styles.title}>{title}</Text>
        <CurrencyInput
          value={title === 'MONTO TOTAL' ? amountValue : plazoValue}
          onChangeValue={
            title === 'MONTO TOTAL' ? setAmountValue : setPlazoValue
          }
          prefix={title === 'MONTO TOTAL' ? '$ ' : ''}
          delimiter="."
          style={styles.input}
          separator=","
          precision={title === 'MONTO TOTAL' ? 2 : 0}
        />
      </View>
      <Slider
        style={styles.slider}
        minimumValue={minValue}
        maximumValue={maxValue}
        value={title === 'MONTO TOTAL' ? amountValue : plazoValue}
        onValueChange={title === 'MONTO TOTAL' ? setAmountValue : setPlazoValue}
        thumbTintColor="white"
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#FFFFFF"
        step={title === 'MONTO TOTAL' ? 0 : 1}
      />
      <View style={styles.minAndMAxCont}>
        <Text style={styles.minAndMaxValue}>
          {title === 'MONTO TOTAL' ? `$ ${minValue}` : minValue}
        </Text>
        <Text style={styles.minAndMaxValue}>
          {title === 'MONTO TOTAL' ? `$ ${maxValue}` : maxValue}
        </Text>
      </View>
    </View>
  );
};
