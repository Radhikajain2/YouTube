/* eslint-disable prettier/prettier */
import React from 'react';
import {Dimensions, View} from 'react-native';

import WebView from 'react-native-webview';

import {Label} from '../../component/label';
import {Outlines,ScaledSheet} from '../../styles';

export const VideoPlayer = ({route}) => {
  const {videoId, title} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <WebView
          javaScriptEnabled={true}
          source={{uri: `https://www.youtube.com/embed/${videoId}`}}
        />
      </View>
      <Label style={styles.textStyle} numberOfLines={3}>
        {title}
      </Label>
      <View style={styles.emptyView} />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  secondContainer: {
    width: '100%',
    height: '60%',
  },
  textStyle: {
    fontSize: '20@ms',
    width: Dimensions.get('screen').width - 50,
    margin: '9@ms',
  },
  emptyView: {
    borderBottomWidth: Outlines.borderWidth.base,
  },
});
