
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../../styles/AcademyDashboardStyle';
import AcademyBottomNavigation from '../../components/AcademyBottomNavigation';

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

const instruments = [
  { id: '1', name: 'Guitar', icon: 'guitar' },
  { id: '2', name: 'Piano', icon: 'music' },
  { id: '3', name: 'Flute', icon: 'music' },
  { id: '4', name: 'Tabla', icon: 'drum' },
  { id: '5', name: 'Harmonium', icon: 'keyboard' },
];

const dashboardOptions = [
  { title: 'Courses', icon: 'book', screen: 'AcademyCoursesScreen' },
  { title: 'TimeTable', icon: 'calendar-alt', screen: 'BatchTimeTable' },
  { title: 'Students', icon: 'users', screen: 'AcademyProfile' },
];

const AcademyDashboard = ({ navigation }) => {
  const [selectedInstrument, setSelectedInstrument] = useState(null);

  const handleInstrumentPress = (name) => {
    setSelectedInstrument((prev) => (prev === name ? null : name));
  };

  const filteredCourses = dummyCourses.filter(
    (course) => course.instrument === selectedInstrument
  );

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.customHeader}>
          <TouchableOpacity style={styles.headerIcon}>
            <Icon name="bars" size={20} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Music Academy</Text>
          <TouchableOpacity style={styles.headerIcon}>
            <Icon name="bell" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Icon name="pen" size={14} color="#1E3A8A" />
          </TouchableOpacity>
          <Text style={styles.academyName}>Beats Academy</Text>
        </View>

        <View style={styles.dashboardRow}>
          {dashboardOptions.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dashboardCard}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Icon name={item.icon} size={20} color="#1E3A8A" />
              <Text style={styles.dashboardText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Icon name="user" size={24} color="#1E3A8A" />
            <Text style={styles.statValue}>450</Text>
            <Text>Total Students</Text>
          </View>
          <View style={styles.statCard}>
            <Icon name="book" size={24} color="#1E3A8A" />
            <Text style={styles.statValue}>15</Text>
            <Text>Total Courses</Text>
          </View>
          <View style={styles.statCard}>
            <Icon name="music" size={24} color="#1E3A8A" />
            <Text style={styles.statValue}>5</Text>
            <Text>Instruments Taught</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Instruments Taught</Text>
        <View style={styles.instrumentRow}>
          {instruments.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.instrument,
                selectedInstrument === item.name && styles.selectedInstrument,
              ]}
              onPress={() => handleInstrumentPress(item.name)}
            >
              <Icon name={item.icon} size={26} color="#1E3A8A" />
              <Text style={styles.instrumentName}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {selectedInstrument && (
          <>
            <Text style={styles.sectionTitle}>
              {selectedInstrument} Courses
            </Text>
            <View style={styles.courseGrid}>
              {filteredCourses.map((item) => (
                <View key={item.id} style={styles.card}>
                  <Image
                    source={item.image}
                    style={styles.cardImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.cardTitle}>{item.instrument}</Text>
                  <Text style={styles.cardLevel}>{item.level}</Text>
                  <Text style={styles.cardPrice}>₹{item.Price}</Text>
                  <TouchableOpacity
                    style={styles.cardButton}
                    onPress={() =>
                      navigation.navigate('AcademyCourseDetailScreen', { course: item })
                    }
                  >
                    <Text style={styles.cardButtonText}>View Details</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </>
        )}
      </ScrollView>
      <AcademyBottomNavigation />
    </>
  );
};

export default AcademyDashboard;