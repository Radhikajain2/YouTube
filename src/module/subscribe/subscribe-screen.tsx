/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Headers from '../../component/Header';
import {Colors, ScaledSheet} from '../../styles';

export const SubscribeScreen = () => {
  return (
    <View style={styles.container}>
      <Headers />
      <MaterialIcons name="subscriptions" style={styles.icon} />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral.black,
  },
  icon: {
    color: Colors.neutral.white,
    fontSize: '150@ms',
    alignSelf: 'center',
    marginTop: '60%',
  },
});
