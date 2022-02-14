import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Flag from 'react-native-flags';
import { styles } from './styles';

const ListItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Flag code={item.ISO2} size={32} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.Country}</Text>
        <Text>{item.ISO2}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
