/* eslint-disable prettier/prettier */

import React, {useEffect, useState} from 'react';
import {FlatList, TextInput, View} from 'react-native';
import {useSelector} from 'react-redux';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import CardDetails from '../../component/CardDetail';
import {SearchScreenStyles as styles} from './style';

export const SearchScreen: React.FC = ({navigation}: any) => {
  const [searchText, setSearchText] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const miniCardData = useSelector((state: any) => state.products);

  useEffect(() => {
    const filtered = miniCardData.filter(item =>
      item.p_name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredData(filtered);
  }, [searchText, miniCardData]);

  const renderFilteredData = () => {
    if (searchText === '') {
      return miniCardData.map(item => (
        <CardDetails
          key={item.p_id}
          videoId={item.p_id}
          title={item.p_name}
          channel={item.cat_name}
          thumbnailUrl={item.p_image}
          videoUrl={item.url}
        />
      ));
    } else {
      return filteredData.map(item => (
        <CardDetails
          key={item.p_id}
          videoId={item.p_id}
          title={item.p_name}
          channel={item.cat_name}
          thumbnailUrl={item.p_image}
          videoUrl={item.url}
        />
      ));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <MaterialIcons
          name="arrow-back"
          style={styles.iconStyle}
          onPress={() => navigation.goBack()}
        />
        <TextInput
          value={searchText}
          onChangeText={text => setSearchText(text)}
          style={styles.inputStyle}
          placeholderTextColor="#888"
          placeholder="Search YouTube"
        />
        <MaterialIcons name="send" style={styles.iconStyle} />
      </View>

      <FlatList
        data={renderFilteredData()}
        renderItem={({item}) => item}
        keyExtractor={item => item.p_id}
      />
    </View>
  );
};
