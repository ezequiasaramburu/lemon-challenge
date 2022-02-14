import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export const Header = ({ onPressAsce, onPressOrder, asce, order }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Order By: </Text>
      </View>
      <TouchableOpacity onPress={onPressOrder} style={styles.touchable}>
        <Text style={[styles.text, styles.bold]}>
          {order === 'Cases' ? 'Cases' : 'Date'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressAsce} style={styles.touchable}>
        <Text style={[styles.text, styles.bold]}>
          {asce ? 'Ascending' : 'Descending'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
