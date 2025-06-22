import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  FlatList, Image, ScrollView, navigation
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
// import DropDownPicker from 'react-native-dropdown-picker';
import styles from '../../styles/universalstyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native';

import { COLORS } from '../../styles/universalstyles'; // update the path based on your project structure
import { useNavigation } from '@react-navigation/native';



const dummyCourses = [
  {
    id: '1',
    title: 'Guitar',
    level: 'Beginner',
    instrument: 'Guitar',
    description: 'Start your guitar journey with easy lessons.',
    image: require('../../assets/Images/download.jpg'),
  },
  {
    id: '2',
    title: 'Guitar',
    level: 'Intermediate',
    instrument: 'Guitar',
    description: 'Improve strumming and fingerstyle.',
    image: require('../../assets/Images/download.jpg'),
  },
  {
    id: '3',
    title: 'Guitar',
    level: 'Advanced',
    instrument: 'Guitar',
    description: 'Master solos and scales.',
    image: require('../../assets/Images/download.jpg'),
  },
  {
    id: '4',
    title: 'Piano',
    level: 'Beginner',
    instrument: 'Piano',
    description: 'Start your guitar journey with easy lessons.',
    image: require('../../assets/Images/download.jpg'),
  },
  {
    id: '5',
    title: 'Piano',
    level: 'Intermediate',
    instrument: 'Piano',
    description: 'Improve strumming and fingerstyle.',
    image: require('../../assets/Images/download.jpg'),
  },
  {
    id: '6',
    title: 'Piano',
    level: 'Advanced',
    instrument: 'Piano',
    description: 'Master solos and scales.',
    image: require('../../assets/Images/download.jpg'),
  },
  {
    id: '7',
    title: 'Flute',
    level: 'Beginner',
    instrument: 'Flute',
    description: 'Start your guitar journey with easy lessons.',
    image: require('../../assets/Images/download.jpg'),
  },
  {
    id: '8',
    title: 'Flute',
    level: 'Intermediate',
    instrument: 'Flute',
    description: 'Improve strumming and fingerstyle.',
    image: require('../../assets/Images/download.jpg'),
  },
  {
    id: '9',
    title: 'Flute',
    level: 'Advanced',
    instrument: 'Flute',
    description: 'Master solos and scales.',
    image: require('../../assets/Images/download.jpg'),
  },
  {
    id: '10',
    title: 'Tabla',
    level: 'Beginner',
    instrument: 'Tabla',
    description: 'Start your guitar journey with easy lessons.',
    image: require('../../assets/Images/download.jpg'),
  },
  {
    id: '11',
    title: 'Tabla',
    level: 'Intermediate',
    instrument: 'Tabla',
    description: 'Improve strumming and fingerstyle.',
    image: require('../../assets/Images/download.jpg'),
  },
  {
    id: '12',
    title: 'Tabla',
    level: 'Advanced',
    instrument: 'Tabla',
    description: 'Master solos and scales.',
    image: require('../../assets/Images/download.jpg'),
  },
  {
    id: '13',
    title: 'Harmonium',
    level: 'Beginner',
    instrument: 'Harmonium',
    description: 'Start your guitar journey with easy lessons.',
    image: require('../../assets/Images/download.jpg'),
  },
  {
    id: '14',
    title: 'Harmonium',
    level: 'Intermediate',
    instrument: 'Harmonium',
    description: 'Improve strumming and fingerstyle.',
    image: require('../../assets/Images/download.jpg'),
  },
  {
    id: '15',
    title: 'Harmonium',
    level: 'Advanced',
    instrument: 'Harmonium',
    description: 'Master solos and scales.',
    image: require('../../assets/Images/download.jpg'),
  },

];

const carouselImages = [
  require('../../assets/Images/download.jpg'),
  require('../../assets/Images/download.jpg'),
  require('../../assets/Images/download.jpg'),
];

export default function CoursesScreen() {
  const [search, setSearch] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [instrument, setInstrument] = useState('');

  const filteredCourses = dummyCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
    const matchesDifficulty = difficulty ? course.level === difficulty : true;
    const matchesInstrument = instrument ? course.instrument === instrument : true;
    return matchesSearch && matchesDifficulty && matchesInstrument;
  });

  //   // Add states
  // const [instrumentOpen, setInstrumentOpen] = useState(false);
  // const [instrumentValue, setInstrumentValue] = useState(null);
  // const [instrumentItems, setInstrumentItems] = useState([
  //   { label: 'All Instruments', value: '' },
  //   { label: 'Guitar', value: 'Guitar' },
  //   { label: 'Piano', value: 'Piano' },
  //   { label: 'Flute', value: 'Flute' },
  //   { label: 'Tabla', value: 'Tabla' },
  //   { label: 'Harmonium', value: 'Harmonium' },
  // ]);

  // const [levelOpen, setLevelOpen] = useState(false);
  // const [levelValue, setLevelValue] = useState(null);
  // const [levelItems, setLevelItems] = useState([
  //   { label: 'All Levels', value: '' },
  //   { label: 'Beginner', value: 'Beginner' },
  //   { label: 'Intermediate', value: 'Intermediate' },
  //   { label: 'Advanced', value: 'Advanced' },
  // ]);
// export default function CoursesScreen({ navigation }){

// }
// export default function CoursesScreen({ navigation }) { // 👈 Add navigation prop
const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={filteredCourses}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <StatusBar backgroundColor="#1E3A8A" barStyle="light-content" />

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

            {/* 🎞️ Carousel */}
            <ScrollView horizontal pagingEnabled style={styles.carousel}>
              {carouselImages.map((img, index) => (
                <Image key={index} source={img} style={styles.carouselImage} />
              ))}
            </ScrollView>

            {/* 🔍 Search Bar */}
            <TextInput
              style={styles.input}
              placeholder="Search Courses..."
              placeholderTextColor="#6B7280"
              value={search}
              onChangeText={setSearch}
            />

            {/* 🎚️ Filters */}
            <View style={styles.filterRow}>
              <View style={styles.pickerWrapperSmall}>
                <Picker
                  mode="dropdown"
                  selectedValue={instrument}
                  onValueChange={(value) => setInstrument(value)}
                  style={styles.picker}
                  dropdownIconColor="#1E3A8A"
                >
                  <Picker.Item label="All Instruments" value="" />
                  <Picker.Item label="Guitar" value="Guitar" />
                  <Picker.Item label="Piano" value="Piano" />
                  <Picker.Item label="Flute" value="Flute" />
                  <Picker.Item label="Tabla" value="Tabla" />
                  <Picker.Item label="Harmonium" value="Harmonium" />
                </Picker>
              </View>

              <View style={styles.pickerWrapperSmall}>
                <Picker
                  selectedValue={difficulty}
                  onValueChange={(value) => setDifficulty(value)}
                  style={styles.picker}
                  dropdownIconColor="#1E3A8A"
                >
                  <Picker.Item label="All Levels" value="" />
                  <Picker.Item label="Beginner" value="Beginner" />
                  <Picker.Item label="Intermediate" value="Intermediate" />
                  <Picker.Item label="Advanced" value="Advanced" />
                </Picker>
              </View>
            </View>
          </>
        }
        renderItem={({ item }) => (
          <View style={styles.courseCard}>
            <Image source={item.image} style={styles.courseImage} />
            <Text style={styles.courseTitle}>{item.instrument}</Text>
            <Text style={styles.courseLevel}>{item.level}</Text>
            <Text style={styles.courseDescription}>{item.description}</Text>
            <Text style={styles.coursePrice}>₹999</Text>

            <TouchableOpacity style={styles.enrollButton}
            onPress={() => navigation.navigate('CoursesDetailScreen', { course: item })}
            >
              <Text style={styles.enrollText}>Enroll</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* 🔽 Bottom Navigation */}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={22} color="#1E3A8A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="user" size={22} color="#1E3A8A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Icon name="cog" size={22} color="#1E3A8A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Icon name="sign-out-alt" size={22} color="#F97316" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

  // return (
  //   <View style={styles.coursesscreencontainer}>
  //     {/* <ScrollView
  //       showsVerticalScrollIndicator={false}
  //       contentContainerStyle={styles.scrollContainer} > */}
  //     {/* <SafeAreaView style={{ flex: 1 }}>
  //       <ScrollView contentContainerStyle={styles.scrollContainer}>
  //          <StatusBar 
  //       backgroundColor="#1E3A8A"  // For Android
  //       barStyle="light-content"   // 'dark-content' or 'light-content'
  //     /> */}
  //         {/* <Text style={styles.welcomeText}>Welcome to the Music Academy</Text> */}
  //         <View style={styles.customHeader}>
  //           <TouchableOpacity onPress={() => console.log('Menu pressed')}>
  //             <Icon name="bars" size={20} color="#FFFFFF" />
  //           </TouchableOpacity>

  //           <Text style={styles.headerTitle}>Music Academy</Text>

  //           <TouchableOpacity onPress={() => console.log('Notifications')}>
  //             <Icon name="bell" size={20} color="#FFFFFF" />
  //           </TouchableOpacity>
  //         </View>
  //         {/* 🎞️ Carousel */}
  //         <ScrollView horizontal pagingEnabled style={styles.carousel}>
  //           {carouselImages.map((img, index) => (
  //             <Image key={index} source={img} style={styles.carouselImage} />
  //           ))}
  //         </ScrollView>

  //         {/* 🔍 Search */}
  //         <TextInput
  //           style={styles.input}
  //           placeholder="Search Courses..."
  //           placeholderTextColor="#6B7280"
  //           value={search}
  //           onChangeText={setSearch}
  //         />

  //         <View style={styles.filterRow}>
  //           <View style={styles.pickerWrapperSmall}>
  //             <Picker
  //               mode="dropdown"
  //               selectedValue={instrument}
  //               onValueChange={(value) => setInstrument(value)}
  //               style={styles.picker}
  //               dropdownIconColor="#1E3A8A"
  //             >
  //               <Picker.Item label="All Instruments" itemStyle={styles.pickerItem} value="" />
  //               <Picker.Item label="Guitar" itemStyle={styles.pickerItem} value="Guitar" />
  //               <Picker.Item label="Piano" itemStyle={styles.pickerItem} value="Piano" />
  //               <Picker.Item label="Flute" itemStyle={styles.pickerItem} value="Flute" />
  //               <Picker.Item label="Tabla" itemStyle={styles.pickerItem} value="Tabla" />
  //               <Picker.Item label="Harmonium" itemStyle={styles.pickerItem} value="Harmonium" />
  //             </Picker>
  //           </View>

  //           <View style={styles.pickerWrapperSmall}>
  //             <Picker
  //               selectedValue={difficulty}
  //               onValueChange={(value) => setDifficulty(value)}
  //               style={styles.picker}
  //               dropdownIconColor="#1E3A8A"
  //             >
  //               <Picker.Item label="All Levels" itemStyle={styles.pickerItem} value="" />
  //               <Picker.Item label="Beginner" itemStyle={styles.pickerItem} value="Beginner" />
  //               <Picker.Item label="Intermediate" itemStyle={styles.pickerItem} value="Intermediate" />
  //               <Picker.Item label="Advanced" itemStyle={styles.pickerItem} value="Advanced" />
  //             </Picker>
  //           </View>
  //         </View>

  //         {/* 📚 Course Grid */}
  //         <FlatList
  //           data={filteredCourses}
  //           keyExtractor={(item) => item.id}
  //           numColumns={2}
  //           contentContainerStyle={{ paddingBottom: 10 }}
  //           renderItem={({ item }) => (
  //             <View style={styles.courseCard}>
  //               <Image source={item.image} style={styles.courseImage} />
  //               <Text style={styles.courseTitle}>{item.instrument}</Text>
  //               <Text style={styles.courseLevel}>{item.level}</Text>
  //               <Text style={styles.courseDescription}>{item.description}</Text>
  //               <Text style={styles.coursePrice}>₹999</Text>
  //               <TouchableOpacity style={styles.enrollButton}>
  //                 <Text style={styles.enrollText}>Enroll</Text>
  //               </TouchableOpacity>
  //             </View>
  //           )}
  //         />
  //       </ScrollView>
        
   
  //       {/* 🔽 Bottom Navigation */}
  //       {/* <View style={styles.bottomNav}>
  //       <Text style={styles.navItem}>🏠</Text>
  //       <Text style={[styles.navItem, styles.activeNav]}>🎓</Text>
  //       <Text style={styles.navItem}>⚙️</Text>
  //       <Text style={styles.navItem}>👤</Text>
  //     </View> */}
  //       <View style={styles.bottomBar}>
  //         <TouchableOpacity onPress={() => navigation.navigate('Home')}>
  //           <Icon name="home" size={22} color="#1E3A8A" />
  //         </TouchableOpacity>
  //         <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
  //           <Icon name="user" size={22} color="#1E3A8A" />
  //         </TouchableOpacity>
  //         <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
  //           <Icon name="cog" size={22} color="#1E3A8A" />
  //         </TouchableOpacity>
  //         <TouchableOpacity onPress={() => navigation.navigate('Login')}>
  //           <Icon name="sign-out-alt" size={22} color="#F97316" />
  //         </TouchableOpacity>
  //       </View>
  //     </SafeAreaView>
  //   </View >
  // );
