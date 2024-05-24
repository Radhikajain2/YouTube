/* eslint-disable prettier/prettier */
/**
 * Label on top of RN Text
 */
import React from 'react';
import {Text, Linking} from 'react-native';

import {Colors, ScaledSheet, Typography} from '../styles';

export type LabelProps = React.ComponentProps<typeof Text> & {
  children: string | React.ReactNode;
  link?: string;
};

const Label = ({style, onPress, link, ...rest}: LabelProps) => {
  if (onPress || link) {
    return (
      <Text
        onPress={link ? () => Linking.openURL(link) : onPress}
        {...rest}
        style={[styles.text, styles.linkStyle, style]}
      />
    );
  }

  return <Text {...rest} style={[styles.text, style]} />;
};

const styles = ScaledSheet.create({
  text: {
    fontSize: '15@ms',
    color: Colors.neutral.black,
    ...Typography.textStyle.regular,
  },
  linkStyle: {
    color: Colors.neutral.black,
    textDecorationLine: 'underline',
  },
});

export {Label};
