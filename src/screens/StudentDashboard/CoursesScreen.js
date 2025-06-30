import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/AcademyStyles';
import BottomNavigation from '../../components/BottomNavigation';

const dummyCourses = [
  {
    id: '1',
    title: 'Guitar',
    level: 'Beginner',
    instrument: 'Guitar',
    Price: '999',
    description:
      'Start your guitar journey with easy lessons focused on basic chords and rhythm. Learn how to hold and tune the guitar correctly. Simple strumming patterns and beginner-friendly songs will build your confidence. This course requires no prior experience and is perfect for absolute beginners.',
    image: require('../../assets/insturments/theme/GuitarFinal.png'),
  },
  {
    id: '2',
    title: 'Guitar',
    level: 'Intermediate',
    instrument: 'Guitar',
    Price: '1500',
    description:
      'Take your guitar skills to the next level with this intermediate course. Learn fingerstyle techniques, power chords, and barre chords. Explore rhythm variations, chord transitions, and improvisation. Ideal for students who have mastered the basics and are ready for more complexity.',
    image: require('../../assets/insturments/theme/GuitarFinal.png'),
  },
  {
    id: '3',
    title: 'Guitar',
    level: 'Advanced',
    instrument: 'Guitar',
    Price: '3500',
    description:
      'Master the art of guitar playing with advanced techniques and theory. Focus on lead guitar skills, soloing, scales, and advanced improvisation. Study complex chord progressions and music composition. This course prepares you for performances and studio recordings.',
    image: require('../../assets/insturments/theme/GuitarFinal.png'),
  },
  {
    id: '4',
    title: 'Piano',
    level: 'Beginner',
    instrument: 'Piano',
    Price: '999',
    description:
      'Discover the magic of piano with foundational lessons for beginners. Learn hand positioning, basic scales, and simple melodies. Practice both hands coordination with familiar tunes. A perfect start for young learners or adult beginners looking to explore piano.',
    image: require('../../assets/insturments/theme/Piano.png'),
  },
  {
    id: '5',
    title: 'Piano',
    level: 'Intermediate',
    instrument: 'Piano',
    Price: '1500',
    description:
      'Enhance your piano skills by focusing on melody, harmony, and chord progressions. Learn to play more complex pieces and improve your sight-reading. Develop both left and right hand coordination with challenging exercises. This course bridges the gap between beginner and advanced levels.',
    image: require('../../assets/insturments/theme/Piano.png'),
  },
  {
    id: '6',
    title: 'Piano',
    level: 'Advanced',
    instrument: 'Piano',
    Price: '3500',
    description:
      'Delve deep into classical and jazz piano techniques. Study advanced music theory, improvisation, and composition. Perform pieces from renowned composers and explore personal expression through music. Ideal for aspiring professional pianists and performers.',
    image: require('../../assets/insturments/theme/Piano.png'),
  },
  {
    id: '7',
    title: 'Flute',
    level: 'Beginner',
    instrument: 'Flute',
    Price: '999',
    description:
      'Learn the basics of playing the flute with easy exercises and songs. Understand correct posture, breath control, and simple fingering. Build a solid foundation in tone production and rhythm. This course is designed to introduce beginners to the beauty of flute playing.',
    image: require('../../assets/insturments/theme/Flute.png'),
  },
  {
    id: '8',
    title: 'Flute',
    level: 'Intermediate',
    instrument: 'Flute',
    Price: '1500',
    description:
      'Improve your flute skills with advanced breathing techniques and fingering patterns. Learn classical compositions and Indian ragas. Focus on sound clarity, speed, and vibrato control. Perfect for those who have basic flute knowledge and want to go deeper.',
    image: require('../../assets/insturments/theme/Flute.png'),
  },
  {
    id: '9',
    title: 'Flute',
    level: 'Advanced',
    instrument: 'Flute',
    Price: '3500',
    description:
      'Master the nuances of flute performance with a focus on raagas, ornamentation, and improvisation. Learn to perform solo and ensemble pieces with confidence. Develop expressive techniques and stylistic interpretations. Aimed at serious students preparing for concerts or competitions.',
    image: require('../../assets/insturments/theme/Flute.png'),
  },
  {
    id: '10',
    title: 'Tabla',
    level: 'Beginner',
    instrument: 'Tabla',
    Price: '999',
    description:
      'Introduce yourself to the world of rhythm with beginner tabla lessons. Learn correct hand placement, basic bols, and simple taals. Develop your timing and coordination through regular practice. This course makes learning tabla fun and accessible for newcomers.',
    image: require('../../assets/insturments/theme/Tabala.png'),
  },
  {
    id: '11',
    title: 'Tabla',
    level: 'Intermediate',
    instrument: 'Tabla',
    Price: '1500',
    description:
      'Explore complex taals, compositions, and variations in tabla playing. Improve hand speed, clarity, and rhythmic cycles. Practice classical kaidas, relas, and tukras. A strong step forward for learners with basic tabla knowledge.',
    image: require('../../assets/insturments/theme/Tabala.png'),
  },
  {
    id: '12',
    title: 'Tabla',
    level: 'Advanced',
    instrument: 'Tabla',
    Price: '3500',
    description:
      'Achieve professional proficiency with advanced tabla compositions and improvisation. Learn accompaniment techniques for vocals and instruments. Gain command over intricate rhythm patterns and performance skills. Ideal for students preparing for stage and exams.',
    image: require('../../assets/insturments/theme/Tabala.png'),
  },
  {
    id: '13',
    title: 'Harmonium',
    level: 'Beginner',
    instrument: 'Harmonium',
    Price: '999',
    description:
      'Get started with harmonium by learning key basics, scales, and simple tunes. Practice finger placement and playing with both hands. This beginner course is perfect for those interested in Indian classical or devotional music. No prior music knowledge needed.',
    image: require('../../assets/insturments/theme/Harmonium.png'),
  },
  {
    id: '14',
    title: 'Harmonium',
    level: 'Intermediate',
    instrument: 'Harmonium',
    Price: '1500',
    description:
      'Learn to play chords, ragas, and accompaniment styles. Improve hand coordination and develop musical expression. Understand the role of harmonium in solo and group settings. This course helps build a strong musical foundation.',
    image: require('../../assets/insturments/theme/Harmonium.png'),
  },
  {
    id: '15',
    title: 'Harmonium',
    level: 'Advanced',
    instrument: 'Harmonium',
    Price: '3500',
    description:
      'Advance your harmonium skills by mastering raagas, compositions, and live performance techniques. Dive into advanced theory and improvisation. Perfect for aspiring performers and music teachers. This course builds confidence and artistry for the stage.',
    image: require('../../assets/insturments/theme/Harmonium.png'),
  },
];


const carouselImages = [
  require('../../assets/insturments/theme/Offer1.png'),
  require('../../assets/insturments/theme/Offer2.png'),
  require('../../assets/insturments/theme/Offer3.png'),
];

export default function CoursesScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [instrument, setInstrument] = useState('');

  const filteredCourses = dummyCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
    const matchesDifficulty = difficulty ? course.level === difficulty : true;
    const matchesInstrument = instrument ? course.instrument === instrument : true;
    return matchesSearch && matchesDifficulty && matchesInstrument;
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F9FAFB' }}>
      <FlatList
        data={filteredCourses}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 8 }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <StatusBar backgroundColor="#1E3A8A" barStyle="light-content" />
            {/* 🔷 Header */}
            <View style={styles.customHeader}>
              <TouchableOpacity onPress={() => console.log('Menu pressed')}>
                <Icon name="bars" size={20} color="#FFFFFF" />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Courses Screen</Text>
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
            
            <Text style={styles.coursePrice}>₹{item.Price}</Text>
            <TouchableOpacity
              style={styles.enrollButton}
              onPress={() => navigation.navigate('CoursesDetailScreen', { course: item })}
            >
              <Text style={styles.enrollText}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <BottomNavigation />
    </SafeAreaView>
  );
}
