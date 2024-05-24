/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {ms} from 'react-native-size-matters';

import * as Colors from './colors';

export const borderRadius = {
  small: ms(5),
  base: ms(10),
  large: ms(20),
  max: 9999,
};

export const borderWidth = {
  hairline: StyleSheet.hairlineWidth,
  thin: ms(1),
  base: ms(2),
  thick: ms(3),
};

export const shadow = {
  base: {
    shadowColor: Colors.neutral.s400,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
};
