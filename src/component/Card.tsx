/* eslint-disable prettier/prettier */

import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import {Label} from './label';
import {Colors, ScaledSheet} from '../styles';

interface CardProps {
  videoId: string;
  title: string;
  channel: string;
  thumbnailUrl: string;
  videoUrl: string;
}

export const Card: React.FC<CardProps> = ({
  videoId,
  title,
  channel,
  thumbnailUrl,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('VideoPlayer', {videoId, title})}>
      <View style={styles.mainContainer}>
        <Image source={{uri: thumbnailUrl}} style={styles.imageContainer} />
        <View style={styles.textMainContainer}>
          <MaterialIcons name="account-circle" style={styles.secondIconStyle} />
          <View style={styles.textContainer}>
            <Label style={styles.text}>{title}</Label>
            <Label style={styles.text2}>{channel}</Label>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: Colors.neutral.s600,
  },
  imageContainer: {
    width: '100%',
    height: '200@ms',
  },
  textMainContainer: {
    flexDirection: 'row',
    margin: '10@ms',
  },
  secondIconStyle: {
    color: Colors.neutral.white,
    fontSize: '35@ms',
  },
  textContainer: {
    margin: '5@ms',
    color: Colors.neutral.white,
    marginTop: '1@ms',
  },
  text: {
    fontSize: '15@ms',
    color: Colors.neutral.white,
  },
  text2: {
    color: Colors.neutral.white,
    marginBottom: '4@ms',
  },
});
