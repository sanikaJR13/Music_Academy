import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import styles from '../styles/BottomNavigationStyles';

const AcademyBottomNavigation = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const tabs = [
    { name: 'Home', icon: 'home', screen: 'AcademyProfile' },
    { name: 'Courses', icon: 'book', screen: 'AcademyCoursesScreen' },
    { name: 'TimeTable', icon: 'calendar-alt', screen: 'BatchTimeTable' },
    { name: 'Students', icon: 'users', screen: 'AcademyProfile' },
  ];

  return (
    <View style={styles.bottomBar}>
      {tabs.map((tab, index) => {
        const isActive = route.name === tab.screen;
        return (
          <TouchableOpacity
            key={index}
            style={styles.tabItem}
            onPress={() => navigation.navigate(tab.screen)}
          >
            <Animatable.View
              animation={isActive ? 'bounceIn' : undefined}
              duration={500}
              useNativeDriver
            >
              <Icon
                name={tab.icon}
                size={22}
                color={isActive ? '#FACC15' : '#1E3A8A'}
              />
            </Animatable.View>
            <Text
              style={[
                styles.tabLabel,
                { color: isActive ? '#FACC15' : '#1E3A8A' },
              ]}
            >
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default AcademyBottomNavigation;
