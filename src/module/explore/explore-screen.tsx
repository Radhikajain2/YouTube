/* eslint-disable prettier/prettier */
import React from 'react';
import {View,FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import Headers from '../../component/Header';
import {Label} from '../../component/label';
import {Card} from '../../component/Card';
import {Colors, Outlines, ScaledSheet} from '../../styles';


const LittleCard = ({name}) => {
  return (
    <View style={styles.littleContainer}>
      <Label style={styles.littleLable}>{name}</Label>
    </View>
  );
};
export const ExploreScreen = () => {
  const cardData = useSelector(state => state.products);
  return (
    <View style={styles.container}>
      <Headers />

      <View style={styles.secondContainer}>
        <LittleCard name="Trending" />
        <LittleCard name="Gaming" />
        <LittleCard name="News" />
        <LittleCard name="Movies" />
        <LittleCard name="Music" />
        <LittleCard name="Fashine" />
      </View>
      <Label style={styles.vedioLabel}>Vedio</Label>
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

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral.s700,
  },
  littleContainer: {
    backgroundColor: Colors.neutral.white,
    width: '150@ms',
    borderRadius: Outlines.borderRadius.base,
    marginTop: '10@ms',
  },
  littleLable: {
    textAlign: 'center',
    color: Colors.neutral.black,
    fontSize: '22@ms',
    height: '50@ms',
    marginTop: '20@ms',
  },
  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  vedioLabel: {
    margin: '8@ms',
    fontSize: '22@ms',
    borderBottomWidth: Outlines.borderWidth.base,
    color: Colors.neutral.white,
    marginTop: '20@ms',
    borderBottomColor: Colors.neutral.white,
  },
});
