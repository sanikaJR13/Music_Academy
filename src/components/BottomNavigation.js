import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../styles/BottomNavigationStyles';

const BottomNavigation = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const tabs = [
    { name: 'Home', icon: 'home', screen: 'StudentDashBoard' },
    { name: 'Courses', icon: 'book-open', screen: 'Courses' },
    { name: 'Chat', icon: 'comment', screen: 'Chat' },
    { name: 'Profile', icon: 'user', screen: 'Profile' },
  ];

  return (
    <View style={styles.bottomBar}>
      {tabs.map((tab, index) => {
        const isActive = route.name === tab.screen;
        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(tab.screen)}
          >
            <Icon
              name={tab.icon}
              size={22}
              color={isActive ? '#FACC15' : '#1E3A8A'}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigation;
