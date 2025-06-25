// src/screens/OwnerDashBoard/AcademyDashboardScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../../styles/universalstyles'; // ✅ Matches the default export

const dashboardOptions = [
  { title: 'Students', icon: 'users', screen: 'Students' },
  { title: 'Courses', icon: 'book', screen: 'Courses' },
  { title: 'Batches', icon: 'calendar-alt', screen: 'Batch' },
  { title: 'Profile', icon: 'user-circle', screen: 'Profile' },
];

const AcademyDashboardScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.dashboardCard}
      onPress={() => navigation.navigate(item.screen)}
    >
      <Icon name={item.icon} size={28} color="#1E3A8A" />
      <Text style={styles.dashboardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    
    <View style={styles.dashboardContainer}>
      <Text style={styles.dashboardHeading}>Academy Dashboard</Text>
      <FlatList
        data={dashboardOptions}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        contentContainerStyle={styles.dashboardGrid}
      />
    </View>
  );
};

export default AcademyDashboardScreen;
