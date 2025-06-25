// navigation/TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CoursesScreen from '../screens/CoursesScreen';
import BatchScreen from '../screens/BatchScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="Home"
      component={DashboardScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Courses"
      component={CoursesScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="book" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Batch"
      component={BatchScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="calendar-alt" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="user-circle" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
