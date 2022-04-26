import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {ButtonCard, CardSlider} from './components';

const App = () => {
  const [amountValue, setAmountValue] = React.useState(5000);
  const [plazoValue, setPlazoValue] = React.useState(3);
  const [totalAmount, setTotalAmount] = React.useState(0);

  // validacion rapida para generar el credito solo si existe dentro del valor minimo y maximo estimado
  const validateAmount = () => {
    if (
      plazoValue >= 3 &&
      plazoValue <= 24 &&
      amountValue >= 5000 &&
      amountValue <= 50000
    ) {
      return true;
    } else {
      return false;
    }
  };

  const calculatedTotalAmount = () => {
    const total = validateAmount() ? amountValue / plazoValue : 0;
    let formatedNumber =
      '$' + total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return setTotalAmount(formatedNumber);
  };

  useEffect(() => {
    calculatedTotalAmount();
  }, [amountValue, plazoValue]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.title}>Simulá tu crédito</Text>
        <CardSlider
          title="MONTO TOTAL"
          maxValue={50000}
          minValue={5000}
          setAmountValue={setAmountValue}
          amountValue={amountValue}
        />
        <CardSlider
          title="PLAZO"
          maxValue={24}
          minValue={3}
          setPlazoValue={setPlazoValue}
          plazoValue={plazoValue}
        />
        <ButtonCard amount={totalAmount} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#054779',
    justifyContent: 'space-evenly',
    padding: 30,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003b67',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 25,
    fontFamily: 'Montserrat-Bold',
  },
});

export default App;
