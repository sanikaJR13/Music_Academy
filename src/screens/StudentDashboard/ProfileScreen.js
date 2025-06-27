import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/universalstyles';
import { ScrollView } from 'react-native';
import BottomNavigation from '../../components/BottomNavigation';


const ProfileScreen = () => {
  const navigation = useNavigation();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [course, setCourse] = useState('Guitar Basics');
  const [batchTime, setBatchTime] = useState('5 PM - 6 PM');

  const handleSave = () => {
    setIsEditing(false);
    // You can add database update logic here
  };

  return (
    <View>
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

      <ScrollView contentContainerStyle={styles.profileContainer}>
  <View style={styles.avatarWrapper}>
    <Image
      source={require('../../assets/insturments/theme/Guitar.png')}
      style={styles.avatar}
    />
    <TouchableOpacity style={styles.editIcon} onPress={() => setIsEditing(true)}>
      <Icon name="pen" size={12} color="#1E3A8A" />
    </TouchableOpacity>
  </View>

  {isEditing ? (
    <>
      <TextInput
        style={styles.inputField}
        value={name}
        onChangeText={setName}
        placeholder="Enter Name"
      />
      <TextInput
        style={styles.inputField}
        value={course}
        onChangeText={setCourse}
        placeholder="Enter Course"
      />
      <TextInput
        style={styles.inputField}
        value={batchTime}
        onChangeText={setBatchTime}
        placeholder="Enter Batch Time"
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </>
  ) : (
    <>
      <Text style={styles.profileText}>Name: {name}</Text>
      <Text style={styles.profileText}>Course Selected: {course}</Text>
      <Text style={styles.profileText}>Batch Time: {batchTime}</Text>
    </>
  )}
</ScrollView>


      

      {/* 🔽 Bottom Navigation
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate('StudentDashBoard')}>
          <Icon name="home" size={22} color="#1E3A8A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="user" size={22} color="#1E3A8A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LogOut')}>
          <Icon name="sign-out-alt" size={22} color="#F97316" />
        </TouchableOpacity>
      </View> */}
      {/* Bottom Navigation */}
      {/* <BottomNavigation currentTab="Profile" /> */}
      <BottomNavigation />

    </View>
  );
};

export default ProfileScreen;














// import React from 'react';
// import { View, Text, Image, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import { useNavigation } from '@react-navigation/native';
// import styles from '../../styles/universalstyles';

// const ProfileScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.profileContainer}>
//       {/* 🔷 Header */}
//       <View style={styles.customHeader}>
//         <TouchableOpacity onPress={() => console.log('Menu pressed')}>
//           <Icon name="bars" size={20} color="#FFFFFF" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Music Academy</Text>
//         <TouchableOpacity onPress={() => console.log('Notifications')}>
//           <Icon name="bell" size={20} color="#FFFFFF" />
//         </TouchableOpacity>
//       </View>

//       {/* 👤 Profile Section */}
//       <View style={styles.profileContainer}>
//         <View style={styles.avatarWrapper}>
//           <Image
//             source={require('../../assets/insturments/theme/Guitar.png')}
//             style={styles.avatar}
//           />
//           <TouchableOpacity style={styles.editIcon}>
//             <Icon name="pen" size={12} color="#1E3A8A" />
//           </TouchableOpacity>
//         </View>
//         <Text style={styles.profileText}>Name: John Doe</Text>
//         <Text style={styles.profileText}>Course Selected: Guitar Basics</Text>
//         <Text style={styles.profileText}>Batch Time: 5 PM - 6 PM</Text>
//       </View>

//       {/* 🔽 Bottom Navigation */}
//       <View style={styles.bottomBar}>
//         <TouchableOpacity onPress={() => navigation.navigate('StudentDashBoard')}>
//           <Icon name="home" size={22} color="#1E3A8A" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
//           <Icon name="user" size={22} color="#1E3A8A" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('LogOut')}>
//           <Icon name="sign-out-alt" size={22} color="#F97316" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default ProfileScreen;



























// // // import React from 'react';
// // // import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
// // // import styles from '../../styles/universalstyles';

// // // // const ProfileScreen = ({ route, navigation }) => {
// // // //   const {
// // // //     fullName,
// // // //     email,
// // // //     contact,
// // // //     instrument,
// // // //     batchTime,
// // // //     batchType,
// // // //   } = route.params;

// // //   return (
// // //     <ScrollView contentContainerStyle={styles.scrollContainer}>
// // //       <Image
// // //         source={require('../../assets/Images/logo.png')}
// // //         style={styles.logo}
// // //       />

// // //       <Text style={styles.title}>My Profile</Text>

// // //       <View style={styles.profileContainer}>
// // //         <Text style={styles.profileLabel}>Full Name:</Text>
// // //         <Text style={styles.profileValue}>{fullName}</Text>

// // //         <Text style={styles.profileLabel}>Email:</Text>
// // //         <Text style={styles.profileValue}>{email}</Text>

// // //         <Text style={styles.profileLabel}>Contact Number:</Text>
// // //         <Text style={styles.profileValue}>{contact}</Text>

// // //         <Text style={styles.profileLabel}>Instrument:</Text>
// // //         <Text style={styles.profileValue}>{instrument}</Text>

// // //         <Text style={styles.profileLabel}>Batch Time:</Text>
// // //         <Text style={styles.profileValue}>{batchTime}</Text>

// // //         <Text style={styles.profileLabel}>Batch Type:</Text>
// // //         <Text style={styles.profileValue}>{batchType}</Text>
// // //       </View>

// // //       <TouchableOpacity
// // //         style={styles.loginButton}
// // //         onPress={() => navigation.navigate('Home')}
// // //       >
// // //         <Text style={styles.loginButtonText}>Go to Home</Text>
// // //       </TouchableOpacity>
// // //     </ScrollView>
// // //   );
// // // };

// // // export default ProfileScreen;



// // import React from 'react';
// // import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
// // import styles from '../../styles/universalstyles';

// // const ProfileScreen = ({ route, navigation }) => {
// //   const {
// //     fullName,
// //     email,
// //     contact,
// //     instrument,
// //     batchTime,
// //     batchType,
// //   } = route?.params || {};

// //   return (
// //     <ScrollView contentContainerStyle={styles.scrollContainer}>
// //       <Image
// //         source={require('../../assets/Images/logo.png')}
// //         style={styles.logo}
// //       />

// //       <Text style={styles.title}>My Profile</Text>

// //       <View style={styles.profileContainer}>
// //         <Text style={styles.profileLabel}>Full Name:</Text>
// //         <Text style={styles.profileValue}>{fullName || 'N/A'}</Text>

// //         <Text style={styles.profileLabel}>Email:</Text>
// //         <Text style={styles.profileValue}>{email || 'N/A'}</Text>

// //         <Text style={styles.profileLabel}>Contact Number:</Text>
// //         <Text style={styles.profileValue}>{contact || 'N/A'}</Text>

// //         <Text style={styles.profileLabel}>Instrument:</Text>
// //         <Text style={styles.profileValue}>{instrument || 'N/A'}</Text>

// //         <Text style={styles.profileLabel}>Batch Time:</Text>
// //         <Text style={styles.profileValue}>{batchTime || 'N/A'}</Text>

// //         <Text style={styles.profileLabel}>Batch Type:</Text>
// //         <Text style={styles.profileValue}>{batchType || 'N/A'}</Text>
// //       </View>

// //       <TouchableOpacity
// //         style={styles.loginButton}
// //         onPress={() => navigation.navigate('Home')}
// //       >
// //         <Text style={styles.loginButtonText}>Go to Home</Text>
// //       </TouchableOpacity>
// //     </ScrollView>
// //   );
// // };

// // export default ProfileScreen;

