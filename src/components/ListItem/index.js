import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Flag from 'react-native-flags';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

const ListItem = ({ item }) => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Country detail', {
      slug: item.Slug,
      title: item.Country,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      <Flag code={item.ISO2} size={32} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.Country}</Text>
        <Text>{item.ISO2}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
