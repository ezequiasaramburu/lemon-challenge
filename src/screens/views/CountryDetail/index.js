import React, { useCallback, useEffect } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Item } from '../../../components/Item';
import { getCountryDetail } from '../../../state/countries/actions';

const CountryDetail = ({ route }) => {
  const dispatch = useDispatch();
  const { isLoading, details } = useSelector(state => state.countries);
  const { slug } = route?.params;

  useEffect(() => {
    dispatch(getCountryDetail(slug));
  }, [dispatch, slug]);

  const RederItem = useCallback(({ item }) => {
    return <Item item={item} />;
  }, []);

  return (
    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList data={details} renderItem={RederItem} />
      )}
    </SafeAreaView>
  );
};

export default CountryDetail;
