import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Item } from '../../../components/Item';
import { Header } from '../../../components/Header';
import { getCountryDetail } from '../../../state/countries/actions';

const CountryDetail = ({ route }) => {
  const dispatch = useDispatch();
  const { isLoading, details } = useSelector(state => state.countries);
  const { slug } = route?.params;
  const [orderBy, setOrderBy] = useState('Date');
  const [asce, setAsce] = useState(true);

  useEffect(() => {
    dispatch(getCountryDetail(slug));
  }, [dispatch, slug]);

  const RederItem = useCallback(({ item }) => {
    return <Item item={item} />;
  }, []);

  const handleOnAscending = () => {
    setAsce(!asce);
  };

  const handleOnTypeOrder = () => {
    const order = orderBy === 'Date' ? 'Cases' : 'Date';
    setOrderBy(order);
  };

  return (
    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Header
            order={orderBy}
            asce={asce}
            onPressAsce={handleOnAscending}
            onPressOrder={handleOnTypeOrder}
          />
          <FlatList data={details} renderItem={RederItem} />
        </>
      )}
    </SafeAreaView>
  );
};

export default CountryDetail;
