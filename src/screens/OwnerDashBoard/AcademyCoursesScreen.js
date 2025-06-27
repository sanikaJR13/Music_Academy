import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  FlatList, Image, ScrollView, SafeAreaView, StatusBar
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/universalstyles';
//import styles from '../OwnerDashBoard/Style/AcademyStyles';

const AcademyCoursesScreen = () => {
  const [search, setSearch] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [instrument, setInstrument] = useState('');
  const navigation = useNavigation();

  // const dummyCourses = [
  //   // 📝 Same dummyCourses data as before, can be imported or reused
  //   // For brevity, use the same data or import from a common file
  // ];

  const dummyCourses = [
  {
    id: '1',
    title: 'Guitar',
    level: 'Beginner',
    instrument: 'Guitar',
    Price: '999',
    description: 'Start your guitar journey with easy lessons.',
    image: require('../../assets/insturments/theme/GuitarFinal.png'),

  },
  {
    id: '2',
    title: 'Guitar',
    level: 'Intermediate',
    instrument: 'Guitar',
    Price: '1500',
    description: 'Improve strumming and fingerstyle.',
    image: require('../../assets/insturments/theme/GuitarFinal.png'),
  },
  {
    id: '3',
    title: 'Guitar',
    level: 'Advanced',
    instrument: 'Guitar',
    Price: '3500',
    description: 'Master solos and scales.',
    image: require('../../assets/insturments/theme/GuitarFinal.png'),
  },
  {
    id: '4',
    title: 'Piano',
    level: 'Beginner',
    instrument: 'Piano',
    Price: '999',
    description: 'Start your guitar journey with easy lessons.',
    image: require('../../assets/insturments/theme/Piano.png'),
  },
  {
    id: '5',
    title: 'Piano',
    level: 'Intermediate',
    instrument: 'Piano',
    Price: '1500',
    description: 'Improve strumming and fingerstyle.',
    image: require('../../assets/insturments/theme/Piano.png'),
  },
  {
    id: '6',
    title: 'Piano',
    level: 'Advanced',
    instrument: 'Piano',
    Price: '3500',
    description: 'Master solos and scales.',
    image: require('../../assets/insturments/theme/Piano.png'),
  },
  {
    id: '7',
    title: 'Flute',
    level: 'Beginner',
    instrument: 'Flute',
    Price: '999',
    description: 'Start your guitar journey with easy lessons.',
    image: require('../../assets/insturments/theme/Flute.png'),
  },
  {
    id: '8',
    title: 'Flute',
    level: 'Intermediate',
    instrument: 'Flute',
    Price: '1500',
    description: 'Improve strumming and fingerstyle.',
    image: require('../../assets/insturments/theme/Flute.png'),
  },
  {
    id: '9',
    title: 'Flute',
    level: 'Advanced',
    instrument: 'Flute',
    Price: '3500',
    description: 'Master solos and scales.',
    image: require('../../assets/insturments/theme/Flute.png'),
  },
  {
    id: '10',
    title: 'Tabla',
    level: 'Beginner',
    instrument: 'Tabla',
    Price: '999',
    description: 'Start your guitar journey with easy lessons.',
    image: require('../../assets/insturments/theme/Tabala.png'),
  },
  {
    id: '11',
    title: 'Tabla',
    level: 'Intermediate',
    instrument: 'Tabla',
    Price: '1500',
    description: 'Improve strumming and fingerstyle.',
    image: require('../../assets/insturments/theme/Tabala.png'),
  },
  {
    id: '12',
    title: 'Tabla',
    level: 'Advanced',
    instrument: 'Tabla',
    Price: '3500',
    description: 'Master solos and scales.',
    image: require('../../assets/insturments/theme/Tabala.png'),
  },
  {
    id: '13',
    title: 'Harmonium',
    level: 'Beginner',
    instrument: 'Harmonium',
    Price: '999',
    description: 'Start your guitar journey with easy lessons.',
    image: require('../../assets/insturments/theme/Harmonium.png'),
  },
  {
    id: '14',
    title: 'Harmonium',
    level: 'Intermediate',
    instrument: 'Harmonium',
    Price: '1500',
    description: 'Improve strumming and fingerstyle.',
    image: require('../../assets/insturments/theme/Harmonium.png'),
  },
  {
    id: '15',
    title: 'Harmonium',
    level: 'Advanced',
    instrument: 'Harmonium',
    Price: '3500',
    description: 'Master solos and scales.',
    image: require('../../assets/insturments/theme/Harmonium.png'),
  },
];


  const filteredCourses = dummyCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
    const matchesDifficulty = difficulty ? course.level === difficulty : true;
    const matchesInstrument = instrument ? course.instrument === instrument : true;
    return matchesSearch && matchesDifficulty && matchesInstrument;
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#1E3A8A" barStyle="light-content" />

      <FlatList
        data={filteredCourses}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 160 }}
        ListHeaderComponent={
          <>
            {/* 🔷 Header */}
            <View style={styles.customHeader}>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Icon name="bars" size={20} color="#FFFFFF" paddingHorizontal="15"/>
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Academy Courses</Text>
              <TouchableOpacity onPress={() => navigation.navigate('AddCourse')}>
                <Icon name="plus" size={20} color="#FFFFFF" paddingHorizontal="25"/>
              </TouchableOpacity>
            </View>

            {/* 🔍 Search */}
            <TextInput
              style={styles.input}
              placeholder="Search Courses..."
              placeholderTextColor="#6B7280"
              value={search}
              onChangeText={setSearch}
              paddingVertical="10"
            />

            {/* 🎚️ Filters */}
            <View style={styles.filterRow}>
              <View style={styles.pickerWrapperSmall}>
                <Picker
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
            <Text style={styles.coursePrice}>₹{item.Price}</Text>
            <TouchableOpacity
              style={styles.enrollButton}
              onPress={() => navigation.navigate('CoursesDetailScreen', { course: item })}
            >
              <Text style={styles.enrollText}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent={
          <TouchableOpacity
            style={[styles.enrollButton, { margin: 20, backgroundColor: '#1E3A8A' }]}
            onPress={() => navigation.navigate('AddCourse')}
          >
            <Text style={[styles.enrollText, { fontWeight: 'bold' }]}>+ Add New Course</Text>
          </TouchableOpacity>
        }
      />

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
    </SafeAreaView>
  );
};

export default AcademyCoursesScreen;
