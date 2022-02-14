import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export const Item = ({ item }) => {
  const date = new Date(item.Date).toLocaleDateString('es-AR');

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={[styles.text, styles.bold]}>Date: </Text>
        <Text style={styles.text}>{date}</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.text, styles.bold]}>Number of cases: </Text>
        <Text style={styles.text}>{item.Cases}</Text>
      </View>
    </View>
  );
};