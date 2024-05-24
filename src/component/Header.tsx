/* eslint-disable prettier/prettier */
import React from 'react';
import {StatusBar, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import {Label} from './label';
import {Colors, ScaledSheet, Typography} from '../styles';

export const Headers = () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar
        backgroundColor={Colors.neutral.s700}
        barStyle="light-content"
      />
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <FontAwesome5 name="youtube" style={styles.iconStyle} />
          <Label style={styles.iconStyleText}>YouTube</Label>
          <View style={styles.secondContainer}>
            <MaterialIcons name="devices" style={styles.secondIconStyle} />

            <MaterialIcons
              name="search"
              style={styles.secondIconStyle}
              onPress={() => navigation.navigate('SearchScreen')}
            />

            <MaterialIcons
              name="account-circle"
              style={styles.secondIconStyle}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = ScaledSheet.create({
  container: {
    height: '45@ms',
    backgroundColor: Colors.neutral.s600,
    justifyContent: 'center',
    elevation: '4@ms',
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: '5@ms',
  },
  iconStyle: {
    color: Colors.danger.cdark,
    fontSize: '30@ms',
    marginLeft: '10@ms',
  },
  iconStyleText: {
    fontSize: '22@ms',
    marginLeft: '5@ms',
    color: Colors.neutral.white,
    marginTop: '2@ms',
    ...Typography.textStyle.bold,
    letterSpacing: '-2@ms',
  },
  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 'auto',
    width: '150@ms',
    margin: '5@ms',
  },
  secondIconStyle: {
    color: Colors.neutral.white,
    fontSize: '25@ms',
  },
});

export default Headers;
