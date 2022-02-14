import React from 'react';
import { useSelector } from 'react-redux';
import { ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import ListItem from '../../../components/ListItem';
import { styles } from './styles';

const Home = () => {
  const { data, isLoading } = useSelector(state => state.countries);

  const renderItem = ({ item }) => {
    return <ListItem item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList data={data} renderItem={renderItem} />
      )}
    </SafeAreaView>
  );
};

export default Home;
