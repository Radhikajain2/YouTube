/* eslint-disable prettier/prettier */

import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Headers from '../../component/Header';
import {Card} from '../../component/Card';

export const HomeScreen = ({navigation}) => {
  const cardData = useSelector((state: any) => state.products);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = () => {
    setLoading(true);
    fetch('https://impactmindz.in/client/boub/back_end/api/product')
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        if (data && data.status === 1 && data.data) {
          const combinedData = Object.values(data.data).flat() as Product[];
          dispatch({type: 'add', payload: combinedData});
        } else {
          console.error('Invalid data format:', data);
        }
      })
      .catch((error: Error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={{flex: 1}}>
      <Headers />
      {loading ? <ActivityIndicator size="large" color="red" /> : null}
      <FlatList
        data={cardData}
        renderItem={({item}) => (
          <Card
            videoId={item.p_id}
            title={item.p_name}
            channel={item.cat_name}
            thumbnailUrl={item.p_image}
            videoUrl={item.url}
          />
        )}
        keyExtractor={item => item.p_id}
      />
    </View>
  );
};
