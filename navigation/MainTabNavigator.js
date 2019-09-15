import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import PortfolioScreen from '../screens/PortfolioScreen/PortfolioScreen';
import MarketsScreen from '../screens/MarketScreen/MarketsScreen';
import NewsScreen from '../screens/NewsScreen/NewsScreen';
import NewsDetailScreen from '../screens/NewsScreen/NewsDetailScreen/NewsDetailScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const PortfolioStack = createStackNavigator(
  {
    Portfolio: PortfolioScreen,
  }
);

PortfolioStack.navigationOptions = {
  tabBarLabel: 'Portfolio',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={"ios-pie"}
    />
  ),
};

PortfolioStack.path = '';

const MarketStack = createStackNavigator(
  {
    Markets: MarketsScreen,
  },
  config
);

MarketStack.navigationOptions = {
  tabBarLabel: 'Markets',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused} 
      name={"ios-pie"}
    />
  ),
};

MarketStack.path = '';

const NewsStack = createStackNavigator(
  {
    News: NewsScreen,
    NewsDetail: NewsDetailScreen,
  },
);

NewsStack.navigationOptions = {
  tabBarLabel: 'News',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon 
      focused={focused} 
      name={"ios-cash"} 
    />
  ),
};

NewsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  PortfolioStack,
  MarketStack,
  NewsStack,
}, {
  initialRouteName: 'NewsStack',
  tabBarVisible: false
});

tabNavigator.path = '';

export default tabNavigator;
