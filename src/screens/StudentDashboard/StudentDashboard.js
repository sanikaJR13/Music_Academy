// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   FlatList,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import styles from '../../styles/universalstyles';
// import BottomNavigation from '../../components/BottomNavigation';

// const dashboardOptions = [
//   { title: 'Home', icon: 'home', screen: 'StudentDashBoard' },
//   { title: 'Courses', icon: 'book', screen: 'Courses' },
//   { title: 'Chat', icon: 'comments', screen: 'Chat' },
//   { title: 'Profile', icon: 'user', screen: 'Profile' },
// ];

// export default function StudentDashboard({ navigation }) {
//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.dashboardCard}
//       onPress={() => navigation.navigate(item.screen)}
//     >
//       <Icon name={item.icon} size={26} color="#1E3A8A" style={{ marginBottom: 8 }} />
//       <Text style={styles.dashboardCardText}>{item.title}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.StudentDashboardcontainer}>
//       {/* 🔷 Header */}
//       <View style={styles.customHeader}>
//         <TouchableOpacity onPress={() => console.log('Menu pressed')}>
//           <Icon name="bars" size={20} color="#FFFFFF" paddingHorizontal="16" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Student Dashboard</Text>
//         <TouchableOpacity onPress={() => console.log('Notifications')}>
//           <Icon name="bell" size={20} color="#FFFFFF" paddingHorizontal="16"/>
//         </TouchableOpacity>
//       </View>

//       {/* 🔷 Dashboard Cards Centered */}
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text style={styles.dashboardTitle}>Welcome To The Music Academy!</Text>
//         <FlatList
//           data={dashboardOptions}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.title}
//           numColumns={2}
//           contentContainerStyle={styles.centeredDashboardGrid}
//         />
//       </View>

//       {/* 🔽 Bottom Navigation */}
//       <BottomNavigation />
//     </View>
//   );
// }


import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../../styles/universalstyles';
import BottomNavigation from '../../components/BottomNavigation';

const dashboardOptions = [
  { title: 'Home', icon: 'home', screen: 'StudentDashBoard' },
  { title: 'Courses', icon: 'book', screen: 'Courses' },
  { title: 'Chat', icon: 'comments', screen: 'Chat' },
  { title: 'Profile', icon: 'user', screen: 'Profile' },
];

export default function StudentDashboard({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.dashboardCard}
      onPress={() => navigation.navigate(item.screen)}
    >
      <Icon name={item.icon} size={26} color="#1E3A8A" style={{ marginBottom: 8 }} />
      <Text style={styles.dashboardCardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.StudentDashboardcontainer}>
      {/* 🔷 Header */}
      <View style={styles.customHeader}>
        <TouchableOpacity onPress={() => console.log('Menu pressed')}>
          <Icon name="bars" size={20} color="#FFFFFF" paddingHorizontal="16"/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Student Dashboard</Text>
        <TouchableOpacity onPress={() => console.log('Notifications')}>
          <Icon name="bell" size={20} color="#FFFFFF" paddingHorizontal="16"/>
        </TouchableOpacity>
      </View>

      {/* 🔷 Scrollable Content */}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 20 }}>
          <Text style={styles.dashboardTitle}>Welcome To The Music Academy!</Text>
          <FlatList
            data={dashboardOptions}
            renderItem={renderItem}
            keyExtractor={(item) => item.title}
            numColumns={2}
            contentContainerStyle={styles.centeredDashboardGrid}
          />
        </View>
      </ScrollView>

      {/* 🔽 Bottom Navigation */}
      <BottomNavigation />
    </View>
  );
}
