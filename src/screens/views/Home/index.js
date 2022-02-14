import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import ListItem from '../../../components/ListItem';
import { getCountries } from '../../../state/countries/actions';
import { styles } from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector(state => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

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
