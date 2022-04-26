import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  slider: {
    width: 250,
    height: 40,
  },
  cardCont: {
    margin: 20,
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
  },
  numericInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: 100,
    fontFamily: 'Montserrat-Bold',
    color: '#FFFFFF',
    height: 35,
    textAlign: 'center',
    padding: 8,
    borderColor: '#FFFFFF',
    borderWidth: 1,
  },
  minAndMAxCont: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
  },
  minAndMaxValue: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontSize: 15,
  },
});
