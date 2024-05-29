/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity, View} from 'react-native';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

import productReducer from './src/reducer/reducer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import {Colors, ScaledSheet} from './src/styles';
import {PostScreen} from './src/module/post/post';
import {Shorts} from './src/module/shorts/shorts';
import {SearchScreen} from './src/module/search/search-screen';
import {HomeScreen} from './src/module/home/home-screen';
import {ExploreScreen} from './src/module/explore/explore-screen';
import {VideoPlayer} from './src/module/vedio/vedio-Player';
import {SubscribeScreen} from './src/module/subscribe/subscribe-screen';

const rootReducer = combineReducers({
  products: productReducer,
});

export type RootStackParamList = {
  Home: undefined;
  VideoPlayer: {videoId: string; title: string};
  SearchScreen: undefined;
};
const store = createStore(rootReducer);

const Stack = createStackNavigator<RootStackParamList>();
const Tabs = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}: any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.seconContainer}>
        <FontAwesome6
          name="plus"
          size={30}
          color="white"
          style={styles.iconStyle}
        />
        {children}
      </View>
    </TouchableOpacity>
  );
};

const RootHome = () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Explore') {
            iconName = 'explore';
          } else if (route.name === 'Subscribe') {
            iconName = 'subscriptions';
          } else if (route.name === 'shorts') {
            iconName = 'video-collection';
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.neutral.white,
        tabBarInactiveTintColor: Colors.neutral.white,
        tabBarStyle: {backgroundColor: Colors.neutral.s700, height: '8%'},
      })}>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Explore" component={ExploreScreen} />
      <Tabs.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarLabel: '',
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tabs.Screen name="Subscribe" component={SubscribeScreen} />
      <Tabs.Screen name="shorts" component={Shorts} />
    </Tabs.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="rootHome" component={RootHome} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = ScaledSheet.create({
  container: {
    top: ' -10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seconContainer: {
    width: '70@ms',
    height: '70@ms',
    borderRadius: '35@ms',
    backgroundColor: 'red',
  },
  iconStyle: {
    alignSelf: 'center',
    marginTop: '29%',
  },
});
