import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../OwnerDashBoard/Style/AcademyStyles';
import AcademyBottomNavigation from '../../components/AcademyBottomNavigation';

const instruments = ['Guitar', 'Tabla', 'Piano', 'Violin'];

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#F3F4F6' }}>
      {/* 🔷 Custom Header */}
      <View style={styles.customHeader}>
        <TouchableOpacity onPress={() => console.log('Menu pressed')}>
          <Icon name="bars" size={20} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Music Academy</Text>
        <TouchableOpacity onPress={() => console.log('Notifications')}>
          <Icon name="bell" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* 🔽 Scrollable Profile Content */}
      <ScrollView contentContainerStyle={styles.profileContainer}>
        <View style={styles.profileHeader}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.academyLogo}
          />
          <Text style={styles.academyName}>Music Academy</Text>

          {/* ✏️ Edit Button */}
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate('EditProfileScreen')}
          >
            <Icon name="edit" size={16} color="#1E3A8A" style={{ marginRight: 6 }} />
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* 📊 Stats Cards */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Icon name="users" size={20} color="#1E3A8A" />
            <Text style={styles.statNumber}>120</Text>
            <Text style={styles.statLabel}>Total Students</Text>
          </View>
          <View style={styles.statCard}>
            <Icon name="user-check" size={20} color="#1E3A8A" />
            <Text style={styles.statNumber}>85</Text>
            <Text style={styles.statLabel}>Current Students</Text>
          </View>
        </View>

        {/* 🎸 Instruments Offered */}
        <Text style={styles.sectionHeading}>🎼 Instruments Offered</Text>
        <FlatList
          data={instruments}
          horizontal
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={styles.instrumentTag}>
              <Text style={styles.instrumentText}>{item}</Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.instrumentList}
        />
      </ScrollView>

      {/* 🔽 Bottom Navigation */}
      <AcademyBottomNavigation />

    </View>
  );
};

export default ProfileScreen;
































// // src/screens/ProfileScreen.js
// import React from 'react';
// import { View, Text, Image, FlatList, ScrollView, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import styles from '../../styles/universalstyles';

// const instruments = ['Guitar', 'Tabla', 'Piano', 'Violin'];

// const ProfileScreen = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.profileContainer}>
//     <View style={styles.profileContainer}>
//       {/* 🎵 Header with Logo */}
//       <View style={styles.profileHeader}>
//         <Image
//           source={require('../../assets/logo.png')} // Replace with actual logo
//           style={styles.academyLogo}
//         />
//         <Text style={styles.academyName}>Music Academy</Text>
//       </View>

//       {/* ✏️ Edit Button */}
//   <TouchableOpacity
//     style={styles.editButton}
//     onPress={() => navigation.navigate('EditProfileScreen')} // Replace with navigation if needed
//   >
//     <Icon name="edit" size={16} color="#1E3A8A" style={{ marginRight: 6 }} />
//     <Text style={styles.editButtonText}>Edit Profile</Text>
//   </TouchableOpacity>

//       {/* 📊 Stats Cards */}
//       <View style={styles.statsRow}>
//         <View style={styles.statCard}>
//           <Icon name="users" size={20} color="#1E3A8A" />
//           <Text style={styles.statNumber}>120</Text>
//           <Text style={styles.statLabel}>Total Students</Text>
//         </View>
//         <View style={styles.statCard}>
//           <Icon name="user-check" size={20} color="#1E3A8A" />
//           <Text style={styles.statNumber}>85</Text>
//           <Text style={styles.statLabel}>Current Students</Text>
//         </View>
//       </View>

//       {/* 🎸 Instrument Tags */}
//       <Text style={styles.sectionHeading}>🎼 Instruments Offered</Text>
//       <FlatList
//         data={instruments}
//         horizontal
//         keyExtractor={(item) => item}
//         renderItem={({ item }) => (
//           <View style={styles.instrumentTag}>
//             <Text style={styles.instrumentText}>{item}</Text>
//           </View>
//         )}
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.instrumentList}
//       />
//     </View>
//     </ScrollView>
//   );
// };

// export default ProfileScreen;















// // // src/screens/ProfileScreen.js
// // import React from 'react';
// // import { View, Text, Image, FlatList } from 'react-native';
// // import styles from '../../styles/universalstyles'; // Adjust path if needed

// // const instruments = ['Guitar', 'Tabla', 'Piano', 'Violin'];

// // const AcademyProfile = () => {
// //   return (
// //     <View style={styles.profileContainer}>
// //       {/* Academy Logo */}
// //       <Image
// //         source={require('../../assets/logo.png')} // Replace with your logo path
// //         style={styles.academyLogo}
// //         //resizeMode="contain"
// //       />

// //       {/* 🏷 Academy Name */}
// //       <Text style={styles.academyName}>Beats Music Academy</Text>

// //       {/* Stats */}
// //       <View style={styles.statsBox}>
// //         <Text style={styles.statsText}>🎓 Total Students: 120</Text>
// //         <Text style={styles.statsText}>✅ Current Students: 85</Text>
// //       </View>

// //       {/* 🎸 Instruments */}
// //       <Text style={styles.sectionHeading}>Instruments Offered</Text>
// //       <FlatList
// //         data={instruments}
// //         keyExtractor={(item) => item}
// //         renderItem={({ item }) => (
// //           <View style={styles.instrumentTag}>
// //             <Text style={styles.instrumentText}>{item}</Text>
// //           </View>
// //         )}
// //         horizontal
// //         showsHorizontalScrollIndicator={false}
// //         contentContainerStyle={styles.instrumentList}
// //       />
// //     </View>
// //   );
// // };

// // export default AcademyProfile;







// // // import { StyleSheet, Text, View } from 'react-native'
// // // import React from 'react'

// // // const  = () => {
// // //   return (
// // //     <View>
// // //       <Text>AcademyProfile</Text>
// // //     </View>
// // //   )
// // // }

// // // export default AcademyProfile

// // // const styles = StyleSheet.create({})