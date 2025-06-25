import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../../styles/universalstyles';

const dashboardOptions = [
  { title: 'My Courses', icon: 'book', screen: 'Courses' },
  { title: 'Lessons', icon: 'music', screen: 'Lessons' },
  { title: 'Practice Sessions', icon: 'drum', screen: 'Practice' },
  { title: 'Instructor Chat', icon: 'comments', screen: 'Chat' },
  { title: 'Community', icon: 'users', screen: 'Community' },
  { title: 'Notifications', icon: 'bell', screen: 'Notifications' },
];

export default function StudentDashboard({ navigation }) {
  const userName = 'Narayan'; // Replace with dynamic user name if needed

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.dashboardCard}
      onPress={() => navigation.navigate(item.screen)}
    >
      <Icon name={item.icon} size={24} color="#1E3A8A" />
      <Text style={styles.dashboardCardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    
   <View style={styles.StudentDashboardcontainer}>
      {/* 🔷 Header */}
    <View style={styles.customHeader}>
      <TouchableOpacity onPress={() => console.log('Menu pressed')}>
        <Icon name="bars" size={20} color="#FFFFFF" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Music Academy</Text>
      <TouchableOpacity onPress={() => console.log('Notifications')}>
        <Icon name="bell" size={20} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
    <View style={styles.StudentDashboardcontainer} >

  
      <Text style={styles.dashboardTitle}>Hi {userName} 👋</Text>
      <FlatList
        data={dashboardOptions}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        numColumns={2}
        contentContainerStyle={styles.dashboardGrid}
      />
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={22} color="#1E3A8A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="user" size={22} color="#1E3A8A" />
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Icon name="cog" size={22} color="#1E3A8A" />
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Icon name="sign-out-alt" size={22} color="#F97316" />
        </TouchableOpacity>
    </View>
    </View> 
     </View>
    
  );
}
