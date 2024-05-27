import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ArtistsHome, FavoritesHome, MusicStylesHome } from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ArtistsNavigator } from '.';
import { GlobalStyle } from '../utils/styles';
import { TabNavigatorParamList } from './TabNavigatorParamList';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: GlobalStyle.accent,
        tabBarInactiveTintColor: GlobalStyle.primary,
        tabBarLabelStyle: {
          fontSize: 13,
        },
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          backgroundColor: GlobalStyle.tertiary,
        },
      })}>
      <Tab.Screen
        name="Artists"
        component={ArtistsNavigator}
        options={{
          tabBarLabel: 'Artistes',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-sharp" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MusicStyles"
        component={MusicStylesHome}
        options={{
          tabBarLabel: 'Genres',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="musical-note-sharp" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesHome}
        options={{
          tabBarLabel: 'Favoris',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-sharp" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
