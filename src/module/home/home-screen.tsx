/* eslint-disable prettier/prettier */
/* eslint-disable no-catch-shadow */
/* eslint-disable react-native/no-inline-styles */

import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Headers from '../../component/Header';
import {Card} from '../../component/Card';

interface Product {
  p_id: string;
  p_name: string;
  cat_name: string;
  p_image: string;
  url: string;
}

export const HomeScreen = () => {
  const cardData = useSelector((state: any) => state.products);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://impactmindz.in/client/boub/back_end/api/product',
      );
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Resource not found (404). Please check the URL.');
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        throw new Error(`Expected JSON response but got HTML: ${text}`);
      }

      const data = await response.json();
      setLoading(false);

      if (data && data.status === 1 && data.data) {
        const combinedData = Object.values(data.data).flat() as Product[];
        dispatch({type: 'add', payload: combinedData});
      } else {
        setError('Invalid data format received from the server.');
        console.error('Invalid data format:', data);
      }
    } catch (error) {
      setError(error.message);
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Headers />
      {loading && <ActivityIndicator size="large" color="red" />}
      {error && (
        <View style={{padding: 20}}>
          <Text style={{color: 'red'}}>{error}</Text>
        </View>
      )}
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
