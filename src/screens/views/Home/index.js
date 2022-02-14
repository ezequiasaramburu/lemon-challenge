import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import ListItem from '../../../components/ListItem';
import { getCountries } from '../../../state/countries/actions';
import { userLogout } from '../../../state/auth/actions';
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

  const handleOnLogout = () => {
    dispatch(userLogout());
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <FlatList data={data} renderItem={renderItem} />
          <View style={styles.wrapper}>
            <TouchableOpacity style={styles.touchable} onPress={handleOnLogout}>
              <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Home;
