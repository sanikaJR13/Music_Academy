import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../../styles/universalstyles';

const dashboardOptions = [
  { title: 'Students', icon: 'users', screen: 'Students' },
  { title: 'Courses', icon: 'book', screen: 'AcademyCoursesScreen' },
  { title: 'Batches', icon: 'calendar-alt', screen: 'BatchTimeTable' },
  { title: 'Profile', icon: 'user-circle', screen: 'AcademyProfile' },
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
    <View style={{ flex: 1 }}>
      {/* 🔷 Header */}
      <View style={styles.customHeader}>
        <TouchableOpacity onPress={() => console.log('Menu pressed')}>
          <Icon name="bars" size={20} color="#FFFFFF" paddingHorizontal="15"/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Music Academy</Text>
        <TouchableOpacity onPress={() => console.log('Notifications')}>
          <Icon name="bell" size={20} color="#FFFFFF" paddingHorizontal="15"/>
        </TouchableOpacity>
      </View>

      {/* 🔷 Scrollable Content */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100, // to make space for sticky bottom bar
          paddingHorizontal: 16,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.dashboardHeading}>Academy Dashboard</Text>
        <FlatList
          data={dashboardOptions}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          scrollEnabled={false}
          contentContainerStyle={styles.dashboardGrid}
        />
      </ScrollView>

      {/* 🔽 Sticky Bottom Bar */}
      <View style={[styles.bottomBar, {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderColor: '#E5E7EB',
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
      }]}>
        <TouchableOpacity onPress={() => navigation.navigate('AcademyDashBoard')}>
          <Icon name="home" size={22} color="#1E3A8A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AcademyProfile')}>
          <Icon name="user" size={22} color="#1E3A8A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('BatchTimeTable')}>
          <Icon name="calendar-alt" size={22} color="#1E3A8A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AcademyCoursesScreen')}>
          <Icon name="book" size={22} color="#1E3A8A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Student')}>
          <Icon name="user-graduate" size={22} color="#1E3A8A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LogOut')}>
          <Icon name="sign-out-alt" size={22} color="#F97316" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AcademyDashboardScreen;




// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import styles from '../../styles/universalstyles';

// const dashboardOptions = [
//   { title: 'Students', icon: 'users', screen: 'Students' },
//   { title: 'Courses', icon: 'book', screen: 'Courses' },
//   { title: 'Batches', icon: 'calendar-alt', screen: 'Batch' },
//   { title: 'Profile', icon: 'user-circle', screen: 'Profile' },
// ];

// const AcademyDashboardScreen = ({ navigation }) => {
//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.dashboardCard}
//       onPress={() => navigation.navigate(item.screen)}
//     >
//       <Icon name={item.icon} size={28} color="#1E3A8A" />
//       <Text style={styles.dashboardText}>{item.title}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.dashboardContainer}>
//       {/* 🔷 Custom Header */}
//       <View style={styles.customHeader}>
//         <TouchableOpacity onPress={() => console.log('Menu pressed')}>
//           <Icon name="bars" size={20} color="#FFFFFF" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Music Academy</Text>
//         <TouchableOpacity onPress={() => console.log('Notifications')}>
//           <Icon name="bell" size={20} color="#FFFFFF" />
//         </TouchableOpacity>
//       </View>

//       {/* 🔷 Scrollable Dashboard Content */}
//       <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
//         <Text style={styles.dashboardHeading}>Academy Dashboard</Text>
//         <FlatList
//           data={dashboardOptions}
//           numColumns={2}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.title}
//           scrollEnabled={false} // ✅ important to avoid nested scrolling
//           contentContainerStyle={styles.dashboardGrid}
//         />
//       </ScrollView>

//       {/* 🔽 Bottom Navigation */}
//       <View style={styles.bottomBar}>
//         <TouchableOpacity onPress={() => navigation.navigate('AcademyDashBoard')}>
//           <Icon name="home" size={22} color="#1E3A8A" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('AcademyProfile')}>
//           <Icon name="user" size={22} color="#1E3A8A" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('BatchTimeTable')}>
//           <Icon name="calendar-alt" size={22} color="#1E3A8A" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('AcademyCoursesScreen')}>
//           <Icon name="book" size={22} color="#1E3A8A" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('Student')}>
//           <Icon name="user-graduate" size={22} color="#1E3A8A" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('LogOut')}>
//           <Icon name="sign-out-alt" size={22} color="#F97316" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default AcademyDashboardScreen;




// // import React from 'react';
// // import { View, Text, FlatList, TouchableOpacity } from 'react-native';
// // import Icon from 'react-native-vector-icons/FontAwesome5';
// // import styles from '../../styles/universalstyles';

// // const dashboardOptions = [
// //   { title: 'Students', icon: 'users', screen: 'Students' },
// //   { title: 'Courses', icon: 'book', screen: 'Courses' },
// //   { title: 'Batches', icon: 'calendar-alt', screen: 'Batch' },
// //   { title: 'Profile', icon: 'user-circle', screen: 'Profile' },

// // ];

// // const AcademyDashboardScreen = ({ navigation }) => {
// //   const renderItem = ({ item }) => (
// //     <TouchableOpacity
// //       style={styles.dashboardCard}
// //       onPress={() => navigation.navigate(item.screen)}
// //     >
// //       <Icon name={item.icon} size={28} color="#1E3A8A" />
// //       <Text style={styles.dashboardText}>{item.title}</Text>
// //     </TouchableOpacity>
// //   );

// //   return (
// //     <View style={styles.dashboardContainer}>
// //       {/* 🔷 Custom Header */}
// //       <View style={styles.customHeader}>
// //         <TouchableOpacity onPress={() => console.log('Menu pressed')}>
// //           <Icon name="bars" size={20} color="#FFFFFF" />
// //         </TouchableOpacity>
// //         <Text style={styles.headerTitle}>Music Academy</Text>
// //         <TouchableOpacity onPress={() => console.log('Notifications')}>
// //           <Icon name="bell" size={20} color="#FFFFFF" />
// //         </TouchableOpacity>
// //       </View>

// //       {/* 🔷 Dashboard Content */}
// //       <Text style={styles.dashboardHeading}>Academy Dashboard</Text>
// //       <FlatList
// //         data={dashboardOptions}
// //         numColumns={2}
// //         renderItem={renderItem}
// //         keyExtractor={(item) => item.title}
// //         contentContainerStyle={styles.dashboardGrid}
// //       />

// //       {/* 🔽 Bottom Navigation */}
// //       <View style={styles.bottomBar}>
// //         <TouchableOpacity onPress={() => navigation.navigate('AcademyDashBoard')}>
// //           <Icon name="home" size={22} color="#1E3A8A" />
// //         </TouchableOpacity>
// //         <TouchableOpacity onPress={() => navigation.navigate('AcademyProfile')}>
// //           <Icon name="user" size={22} color="#1E3A8A" />
// //         </TouchableOpacity>
// //         <TouchableOpacity onPress={() => navigation.navigate('BatchTimeTable')}>
// //           <Icon name="calendar-alt" size={22} color="#1E3A8A" />
// //         </TouchableOpacity>
// //         <TouchableOpacity onPress={() => navigation.navigate('AcademyCoursesScreen')}>
// //           <Icon name="book" size={22} color="#1E3A8A" />
// //         </TouchableOpacity>
// //          <TouchableOpacity onPress={() => navigation.navigate('Student')}>
// //     <Icon name="user-graduate" size={22} color="#1E3A8A" />
// //   </TouchableOpacity>
// //         <TouchableOpacity onPress={() => navigation.navigate('LogOut')}>
// //           <Icon name="sign-out-alt" size={22} color="#F97316" />
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // };

// // export default AcademyDashboardScreen;