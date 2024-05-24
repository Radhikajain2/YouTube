/* eslint-disable prettier/prettier */

import React from 'react';
import {Dimensions, Image, TouchableOpacity, View} from 'react-native';


import {ScaledSheet} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

import {Colors} from '../styles';
import {Label} from './label';

interface CardDetailsProps {
  videoId: string;
  title: string;
  channel: string;
  thumbnailUrl: string;
  videoUrl: string;
}

const CardDetails: React.FC<CardDetailsProps> = ({
  title,
  channel,
  thumbnailUrl,
  videoId,
  videoUrl,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('VideoPlayer', {videoId, title})}>
      <View style={styles.container}>
        <Image source={{uri: thumbnailUrl}} style={styles.imageContainer} />
        <View style={styles.textContainer}>
          <Label
            style={styles.textStyle}
            ellipsizeMode="tail"
            numberOfLines={3}>
            {title}
          </Label>
          <Label style={styles.secondTextStyle}>{channel}</Label>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    margin: '10@ms',
    marginBottom: 0,
  },
  imageContainer: {
    width: '45%',
    height: '100@ms',
  },
  textContainer: {
    padding: '7@ms',
  },
  textStyle: {
    fontSize: '17@ms',
    width: Dimensions.get('screen').width / 2,
    color: Colors.neutral.white,
  },
  secondTextStyle: {
    fontSize: '12@ms',
    color: Colors.neutral.white,
  },
});

export default CardDetails;
