import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardCont: {
    margin: 20,
  },
  title: {
    fontSize: 13,
    fontFamily: 'Montserrat-Bold',
    color: '#FFFFFF',
  },
  amount: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
  },
  titleCont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#00355d',
  },
  creditText: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
  detailsText: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    fontSize: 12,
  },
  creditButton: {
    backgroundColor: '#17aa8d',
    padding: 20,
    width: '58%',
  },
  detailsButton: {
    backgroundColor: '#0a538b',
    padding: 14,
    width: '40%',
  },
  buttonCont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
