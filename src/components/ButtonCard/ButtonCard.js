import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {styles} from './ButtonCard.styles';

export const ButtonCard = ({amount}) => {
  return (
    <View style={styles.cardCont}>
      <View style={styles.titleCont}>
        <Text style={styles.title}>CUOTA FIJA POR MES</Text>
        <Text style={styles.amount}>{amount}</Text>
      </View>
      <View style={styles.buttonCont}>
        <TouchableOpacity
          onPress={() => Alert.alert('Felicidades por tu credito')}
          style={styles.creditButton}>
          <Text style={styles.creditText}>OBTENÉ CRÉDITO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert('No disponible')}
          style={styles.detailsButton}>
          <Text style={styles.detailsText}>VER DETALLE DE CUOTAS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
